import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import React, {useState,useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import axios from 'axios';

export const Weather = () => {
    const [select, setSelect] = useState({
        value: 'Seoul',
    })

    const getValue = e => {
        const {name, value} = e.target;
        setSelect({
            ...select,
            [name]: value,
        })
    };

    const [weather, setWeather] = useState({
        loc: 'Seoul',
        country: 'KR',
        temp: 0,
        desc: '',
        icon: '',
    });

    const PressEnter = e => {
        if (e.key === 'Enter') searchWeather();
    }

    const searchWeather = () => {
        const apiKey = process.env.REACT_APP_OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`;

        axios.get(URL).then(response => {
            response = response.data;
            console.log(response);
            console.log(response.weather[0].description);

            setWeather({
                loc: response.name,
                country: response.sys.country,
                temp: Math.round(response.main.temp - 273.15),
                desc: response.weather[0].description,
                icon: `http://openweathermap.com/img/w/${response.weather[0].icon}.png`,
            })

            console.log('loc : ', weather.loc);
            console.log('country : ', weather.country);
            console.log('temp : ', weather.temp);
            console.log('desc : ', weather.desc);
            console.log('icon : ', weather.icon);

        });
    }

    useEffect(() => {
        searchWeather();
    }, []);

    return <>
        <Text>Weather</Text>
    </>
}