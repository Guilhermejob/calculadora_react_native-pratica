import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from './components/button/Button';
import style from './StyleApp';
import Display from './components/display/Display';

const defaultState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default () => {
  // const [displayValue, setDisplayValue] = useState('0');

  const [initialState, setInitialState] = useState({
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0,
  });

  const adicionarDigito = n => {
    if (n === '.' && initialState.displayValue.includes('.')) {
      return 'deu ruim';
    }

    const clearDisplay =
      initialState.displayValue === '0' || initialState.clearDisplay;

    const currentValue = clearDisplay ? '' : initialState.displayValue;

    console.warn(currentValue);

    const displayValueFunc = currentValue + n;

    setInitialState({displayValue: displayValueFunc});
    setInitialState({
      clearDisplay: false,
    });

    if (n !== '.') {
      const newValue = parseFloat(displayValueFunc);
      const values = [initialState.values];
      values[initialState.current] = newValue;
      setInitialState({
        values: values,
      });
    }
    setInitialState({displayValue: displayValueFunc});
  };

  const clearMemo = () => {
    setInitialState({...defaultState});
  };

  const setOperation = operation => {
    console.warn(operation);
  };
  return (
    <SafeAreaView style={style.buttonsContainer}>
      <Display value={initialState.displayValue} />
      <View style={style.buttons}>
        <Button label="AC" triple onClick={clearMemo} />
        <Button label="/" operation onClick={setOperation} />
        <Button label="7" onClick={adicionarDigito} />
        <Button label="8" onClick={adicionarDigito} />
        <Button label="9" onClick={adicionarDigito} />
        <Button label="*" operation onClick={setOperation} />
        <Button label="4" onClick={adicionarDigito} />
        <Button label="5" onClick={adicionarDigito} />
        <Button label="6" onClick={adicionarDigito} />
        <Button label="-" operation onClick={setOperation} />
        <Button label="1" onClick={adicionarDigito} />
        <Button label="2" onClick={adicionarDigito} />
        <Button label="3" onClick={adicionarDigito} />
        <Button label="+" operation onClick={setOperation} />
        <Button label="0" double onClick={adicionarDigito} />
        <Button label="." onClick={adicionarDigito} />
        <Button label="=" operation onClick={setOperation} />
      </View>
    </SafeAreaView>
  );
};
