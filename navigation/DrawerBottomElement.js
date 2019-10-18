import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../constants/Colors';

export default function DrawerBottomElement(props) {
  const {
    navigation,
    icon,
    title,
    route
  } = props;

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => navigation.navigate(route)}
      >
        <View style={styles.inner}>
          <FontAwesomeIcon
            style={styles.content}
            size={18}
            icon={icon}
          />
          <Text
            style={({ ...styles.title, ...styles.content })}
          >
            {title}
          </Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    borderRadius: 5,
    overflow: 'hidden'
  },
  inner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  content: {
    color: Colors.blackGreenish
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600'
  }
});
