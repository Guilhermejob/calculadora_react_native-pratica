import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from './components/button/Button';
import style from './StyleApp';
import Display from './components/display/Display';

export default () => {
  const [displayValue, setDisplayValue] = useState(0);

  const adicionarDigito = n => {
    setDisplayValue(n);
  };

  const clearMemo = () => {
    setDisplayValue('0');
  };

  const setOperation = operation => {
    console.warn(operation);
  };
  return (
    <View style={style.buttonsContainer}>
      <Display value={displayValue} />
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
    </View>
  );
};
