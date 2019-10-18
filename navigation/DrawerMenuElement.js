import React from 'react';
import { TouchableNativeFeedback, Text, View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Colors from '../constants/Colors';

export default function DrawerMenuElement(props) {
  const {
    navigation,
    icon,
    title,
    route
  } = props;

  const getActiveRouteState = (state) => {
    if (!state.routes || state.routes.length === 0 || state.index >= state.routes.length) {
      return state;
    }

    const childActiveRoute = state.routes[state.index];
    return getActiveRouteState(childActiveRoute);
  };

  const routeActive = getActiveRouteState(navigation.state).routeName === route;

  return (
    <View style={styles.container}>
      <TouchableNativeFeedback
        underlayColor="transparent"
        onPress={() => navigation.navigate(route)}
      >
        <View style={{ ...styles.inner }}>
          <FontAwesomeIcon
            style={({ ...styles.content, ...routeActive && styles.contentActive })}
            size={30}
            icon={icon}
          />
          <Text
            style={({ ...styles.title, ...styles.content, ...routeActive && styles.contentActive })}
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
    marginBottom: 20,
    borderRadius: 20,
    height: 60,
    overflow: 'hidden'
  },
  'container:last-child': {
    marginBottom: 0
  },
  containerActive: {
    color: Colors.green
  },
  inner: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.grey
  },
  title: {
    fontSize: 18,
    marginLeft: 10,
  },
  content: {
    fontWeight: '600',
    color: Colors.blackGreenish
  },
  contentActive: {
    color: Colors.green
  }
});
