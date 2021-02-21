import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import * as axios from "react-native";

export const Weather = async() => {
    const apiKey =process.env.REACT_APP_OPENWEATHER_KEY;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`;

    console.log(URL);

    fetch(URL).then(result => {
        // result = result.data;
        console.log(result);
        console.log('Seoul',result.response);
    });

    // const data = await axios.get(URL);
    // console.log(data);

    return <>
        <Text>Weather</Text>
    </>
}

export default Weather;