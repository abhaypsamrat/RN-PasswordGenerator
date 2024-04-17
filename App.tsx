import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

// Form validation
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'should be max of 16 characters')
    .required('Lenght is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [number, useNumber] = useState(false);
  const [symbols, useSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    //
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
