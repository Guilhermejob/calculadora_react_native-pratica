import React from 'react';
import {Text, View} from 'react-native';
import style from './style';

export default props => {
  return (
    <>
      <View style={style.display}>
        <Text style={style.displayValue} numberOfLines={1}>
          {props.value}
        </Text>
      </View>
    </>
  );
};
