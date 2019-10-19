import React from 'react';
import {
  View, Text, TouchableNativeFeedback
} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Colors from '../constants/Colors';

library.add(faBars);

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      withBackground: false
    };
  }

  render() {
    const {
      title,
      action,
      openDrawer
    } = this.props;
    const { withBackground } = this.state;

    return (
      <View style={({
        ...styles.container,
        ...withBackground && styles.containerWithBackground
      })}
      >
        {title && (
        <Text style={({
          ...styles.title,
          ...withBackground && styles.titleWhite
        })}
        >
          {title}
        </Text>
        )}

        {!openDrawer && action}

        {openDrawer
          && (
            <TouchableNativeFeedback
              style={styles.menuButton}
              underlayColor="transparent"
              onPress={() => openDrawer()}
            >
              <FontAwesomeIcon
                icon={faBars}
                size={20}
                style={({
                  ...styles.title,
                  ...withBackground && styles.titleWhite
                })}
              />
            </TouchableNativeFeedback>
          )}
      </View>
    );
  }
}

Header.defaultProps = {
  title: ' ',
  action: null,
  openDrawer: null
};

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
    height: 30 + 20 * 3
  },
  containerWithBackground: {
    backgroundColor: Color(Colors.green).alpha(0.75).toString()
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: Colors.blackGreenish
  },
  titleWhite: {
    color: Colors.white
  },
  menuButton: {
    display: 'flex',
    justifyContent: 'center'
  }
});
