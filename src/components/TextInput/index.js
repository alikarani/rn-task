/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { TextInput } from 'react-native';
import styles from './styles';

const TextInputWrapper = props => {
    return (
        <TextInput
            style={styles.input}
            onChangeText={props?.onChangeText}
            value={props?.text}
            placeholder="Search"
        />
    );
};
export default TextInputWrapper;
