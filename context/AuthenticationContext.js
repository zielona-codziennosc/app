import React, { Component, createContext } from "react";
import { AsyncStorage } from "react-native";
import * as Google from 'expo-google-app-auth';

const AuthenticationContext = createContext();

export default AuthenticationContext;

const getTokenIfValid = async () => {
  const token = await AsyncStorage.getItem("backend_jwt");
  const tokenExp = await AsyncStorage.getItem("backend_jwt_exp");

  if(tokenExp && tokenExp > Date.now() + 1000 * 60 * 10)
    return token;
};


const buryLoginResultInStorage = async ({token, expiresIn, id}) => {
  await Promise.all([
    AsyncStorage.setItem("backend_jwt", String(token)),
    AsyncStorage.setItem("backend_jwt_exp", String(expiresIn)),
    AsyncStorage.setItem("userId", String(id))
  ]);
};

export class AuthenticationContextProvider extends Component {

  state = {
    token: "",
    userId: ""
  };

  async componentDidMount() {
    const token = await getTokenIfValid();
    this.setState({token});
  }

  login = async () => {

    const googleResponse = await Google.logInAsync({
      androidStandaloneAppClientId: "1057953753265-je2pta6uev2paoojtf7h5use62l97ubh.apps.googleusercontent.com",
      androidClientId: "1057953753265-je2pta6uev2paoojtf7h5use62l97ubh.apps.googleusercontent.com",
    });


    const loginResult = await fetch("https://trace.papiewski.tk/user/login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ googleIdToken: googleResponse.idToken })
    }).then(response => response.json());

    await buryLoginResultInStorage(loginResult);

    this.setState({token: loginResult.token, userId: loginResult.id})
  };

  logout = async () => {
    this.setState({token: null, userId: ""});
  };


  render() {

    const {login, logout} = this;
    const reducers = {login, logout};

    return (
      <AuthenticationContext.Provider value={{...this.state, reducers}}>
        {this.props.children}
      </AuthenticationContext.Provider>
    )
  }
}
