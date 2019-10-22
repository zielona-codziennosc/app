import Color from 'color';
import Colors from '../../constants/Colors';

export const ButtonColors = {
  white: {
    color: Color(Colors.green).alpha(0.75),
    backgroundColor: Colors.white
  },
  greyGreenish: {
    color: Colors.blackGreenish,
    backgroundColor: Color(Colors.green).alpha(0.125),
  },
  transparentGrey: {
    color: Color(Colors.blackGreenish).alpha(0.5),
    backgroundColor: 'transparent'
  },
  green: {
    color: Colors.white,
    backgroundColor: Colors.green
  }
};

export const ButtonSizes = {
  small: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  big: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  fullSmall: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
  },
  circleSmall: {
    height: 47,
    width: 47,
  }
};
