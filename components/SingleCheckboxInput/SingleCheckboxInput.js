import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import EStyleSheet from 'react-native-extended-stylesheet';
import Color from 'color';

import Colors from '../../constants/Colors';

export default function SingleCheckboxInput(props) {
  const [value, onChangeValue] = React.useState(true);
  const { text, style } = props;

  return (
    <View style={({ ...styles.container, ...style })}>
      <View style={({ ...styles.checkbox, ...value && styles.checkboxActive })}>
        <TouchableNativeFeedback
          underlayColor="transparent"
          onPress={() => onChangeValue(!value)}
        >
          <FontAwesomeIcon
            style={({ ...styles.checkboxIcon, ...value && styles.checkboxIconShow })}
            icon={faCheck}
            size={15}
          />
        </TouchableNativeFeedback>
      </View>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  checkbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.grey,
    borderRadius: 20,
    height: 25,
    width: 25,
  },
  checkboxActive: {
    backgroundColor: Colors.green
  },
  checkboxIcon: {
    color: Colors.white,
    opacity: 0
  },
  checkboxIconShow: {
    opacity: 1
  },
  text: {
    fontWeight: '600',
    fontSize: 18,
    marginLeft: 10,
    color: Color(Colors.blackGreenish).alpha(0.75).toString()
  }
});
