import React, {useState,useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity, TextInput,Image, TouchableHighlight} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {OPENWEATHER_KEY} from '@env';
import axios from "axios";

import close from './img/close.png';
import search from './img/search.png';
import thermometer from './img/thermometer.png';
import wind from './img/wind.png';
import {ImageBackground} from "react-native-web";
import * as url from "url";



export const Weather = () => {
    const [year, month, date] = [new Date().getFullYear(), new Date().getMonth()+1,new Date().getDate()];
    const today = `${year}년 ${month}월 ${date}일`

    const [search, setSearch] = useState('Seoul');

    const [weather, setWeather] = useState({
        loc: 'Seoul',
        country: 'KR',
        temp: 0,
        desc: '-',
        icon: '-',
    });

    const searchWeather = () => {
        const apiKey = OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${weather.loc}&appid=${apiKey}`;

        axios.get(URL).then(response => {
            response = response.data;
            console.log(response);

            setWeather({
                loc: response.name,
                country: response.sys.country,
                // temp: Math.round(response.main.temp - 273.15),
                temp: response.main.temp,
                desc: response.weather[0].description,
                icon: `http://openweathermap.com/img/w/${response.weather[0].icon}.png`,
            })
        });
        return weather;
    }

    const pressDel = () => {
        setWeather({
            loc : '',
        })
    }

    useEffect(() => {
        searchWeather();
    }, []);

    return <>
        <SafeAreaView>
            <View style={styles.weatherInput}>
                <TextInput placeholder={"지역을 입력해주세요"} onChangeText={value => setWeather({loc : value})} defaultValue={weather.loc} />
                <Image style={{height:30,width:30,resizeMode:'contain'}} onClick={() => {searchWeather()}} source={require('./img/search.png')}/>
                </View>

            <View style={styles.mainWeather}>
                <Text>{today}</Text>
                <Text>{weather.loc}, {weather.country}</Text>
                <Image style={{height:'100%',width:'100%',resizeMode:'contain'}} source={{uri: weather.icon}}/>
                <Text>{weather.desc}</Text>
                <Text>{weather.temp}</Text>
            </View>

            <View style={styles.temperatures}>

            </View>

            <View style={styles.wind}>

            </View>
            </SafeAreaView>
    </>
}

export default Weather;

const styles = StyleSheet.create({
    weatherInput : {
        flexDirection:"row",
        alignItems:'center',
        // justifyContent: 'space-between',
    },
    mainWeather : {

    },
    temperatures : {

    },
    wind : {

    },
})