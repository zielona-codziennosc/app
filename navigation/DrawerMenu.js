import React from 'react';
import { Text, View } from 'react-native';
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
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import DrawerMenuElement from './DrawerMenuElement';
import DrawerBottomElement from './DrawerBottomElement';

export default function DrawerMenu(props) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>Adrian Orłów</Text>
        <Button text="Wyloguj" size={ButtonSizes.fullSmall} color={ButtonColors.white} />
      </View>
      <View style={styles.content}>
        <View>
          <DrawerMenuElement icon={faHome} title="Dom" route="Home" navigation={navigation} />
          <DrawerMenuElement icon={faGlobeEurope} title="Zróbmy coś!" route="Actions" navigation={navigation} />
          <DrawerMenuElement icon={faFileInvoice} title="Codziennik" route="Review" navigation={navigation} />
        </View>
        <View>
          <View style={styles.bottomLine} />
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
    flexDirection: 'row',
    backgroundColor: Color(Colors.green).alpha(0.75).toString(),
    padding: 20,
    paddingTop: 40
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
    height: Layout.window.height - 80
  },
  bottomLine: {
    height: 1,
    width: '100%',
    marginBottom: 10,
    backgroundColor: Color(Color.blackGreenish).alpha(0.25).toString()
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row'
  }
});
