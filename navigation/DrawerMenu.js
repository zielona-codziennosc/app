import React, {useEffect, useState} from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import {
  faHome,
  faGlobeEurope,
  faFileInvoice,
  faUserCircle,
  faCog
} from '@fortawesome/free-solid-svg-icons';
import Color from 'color';

import Button, { ButtonColors, ButtonSizes } from '../components/Button';
import Divider from '../components/Divider';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import DrawerMenuElement from './DrawerMenuElement';
import DrawerBottomElement from './DrawerBottomElement';

import StorageConstants from "../constants/Storage";
import logout from "../backendCommunication/logout";

export default function DrawerMenu(props) {
  const { navigation } = props;

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userName = await AsyncStorage.getItem(StorageConstants.USER_NAME);
      setUserName(userName);
    };
    fetchData();
  },null);

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>{userName}</Text>
        <Button
          text="Wyloguj"
          size={ButtonSizes.fullSmall}
          color={ButtonColors.white}
          action={() => logout(navigation)}
        />
      </View>
      <View style={styles.content}>
        <View>
          <DrawerMenuElement icon={faHome} title="Dom" route="Home" navigation={navigation} />
          <DrawerMenuElement icon={faGlobeEurope} title="Zróbmy coś!" route="ActionsList" navigation={navigation} />
          <DrawerMenuElement icon={faFileInvoice} title="Codziennik" route="Review" navigation={navigation} />
          <DrawerMenuElement icon={faFileInvoice} title="TYMCZASOWE_Inicjalizacja" route="Initialize" navigation={navigation} />
        </View>
        <View>
          <Divider style={styles.bottomLine} />
          <View style={styles.bottom}>
            <DrawerBottomElement icon={faUserCircle} title="Mój profil" route="Profile" navigation={navigation} />
            <DrawerBottomElement icon={faCog} title="Ustawienia" route="Settings" navigation={navigation} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    flex: 1
  },
  userInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Color(Colors.green).alpha(0.75).toString(),
    padding: 20,
    paddingTop: 40,
    height: 30
  },
  userInfoText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '600'
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 20,
    height: Layout.window.height - 90
  },
  bottomLine: {
    marginBottom: 10
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});
