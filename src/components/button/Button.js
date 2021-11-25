import React from 'react';

import {Text, Dimensions, TouchableHighlight} from 'react-native';
import style from './style';

export default props => {
  const stylesButton = [style.button];

  if (props.double) {
    stylesButton.push(style.buttonDouble);
  }
  if (props.triple) {
    stylesButton.push(style.buttonTriple);
  }
  if (props.operation) {
    stylesButton.push(style.operationButton);
  }
  return (
    <>
      <TouchableHighlight onPress={() => props.onClick(props.label)}>
        <Text style={stylesButton}>{props.label}</Text>
      </TouchableHighlight>
    </>
  );
};
