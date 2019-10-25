import React, {useState, useEffect} from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import PointsTypes from '../../constants/PointsTypes';
import PointsInfo, { PointInfoSizes } from '../PointsInfo';
import Button, { ButtonSizes, ButtonColors } from '../Button';

export default function CityHeader({savings}) {

  return (
    <View style={styles.container}>
      <PointsInfo
        value={savings?.carbon}
        size={PointInfoSizes.big}
        type={PointsTypes.leaves}
        style={styles.point}
      />
      <PointsInfo
        value={savings?.water}
        size={PointInfoSizes.big}
        type={PointsTypes.water}
        style={styles.point}
      />
      <PointsInfo
        value={savings?.plastic}
        size={PointInfoSizes.big}
        type={PointsTypes.pollution}
        style={styles.point}
      />
      <Button
        text="?"
        size={ButtonSizes.circleSmall}
        color={ButtonColors.greyGreenish}
        style={styles.pointsButton}
      />
    </View>
  );
}

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100% - 133'
  },
  point: {
    width: '33%',
    marginRight: 10
  },
  pointsButton: {
    borderRadius: 40
  }
});
