import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

import PointsTypes from '../../constants/PointsTypes';
import PointsInfo, { PointInfoSizes } from '../PointsInfo';
import Button, { ButtonSizes, ButtonColors } from '../Button';

export default function CityHeader({savings}) {

  return (
    <View style={styles.container}>
      <Text>Gdyby każdy z Twoich sąsiadów żył do tej pory jak ty, każdy z Was oszczędziłby planecie Ziemi...</Text>
      <PointsInfo
        value={formatLabelAndValue("water", savings?.water)}
        size={PointInfoSizes.big}
        type={PointsTypes.water}
        style={styles.point}
      />
      <PointsInfo
        value={formatLabelAndValue("plastic", savings?.plastic)}
        size={PointInfoSizes.big}
        type={PointsTypes.pollution}
        style={styles.point}
      />
      <Text>A Wy wszyscy razem...</Text>
      <PointsInfo
        value={formatLabelAndValue("carbon", savings?.carbon)}
        size={PointInfoSizes.big}
        type={PointsTypes.leaves}
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

const formatLabelAndValue = (type, value) => {
  switch(type) {
    case "carbon": return `${trailingZeroes(value/1000000)} tysięcy ton CO2`;
    case "water": return `${trailingZeroes(value>1000?value/1000:value)} ${value>1000?"tyś.":""} litr. wody`;
    case "plastic": return `${value} kg. plastiku`;
  }
};

const trailingZeroes = number => Number(number.toFixed(2));

const styles = EStyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%'
  },
  point: {
    width: '100%',
    marginTop: 2,
    marginBottom: 2,
    marginRight: 10
  },
  pointsButton: {
    borderRadius: 40
  }
});
