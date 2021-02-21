import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import axios from 'axios';

export const Weather = async() => {
    const apiKey =process.env.REACT_APP_OPENWEATHER_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`;

    axios.get(URL).then(response => {
        console.log(response.data);
    });

    return <>
        <Text>Weather</Text>
    </>
}

export default Weather;