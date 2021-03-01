import React, {useState,useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button, TouchableOpacity, TextInput,Image, TouchableHighlight, InputAccessoryView} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {OPENWEATHER_KEY} from '@env';
import axios from "axios";

export const Weather = () => {
    let id = 1;

    const fontsLoaded = useFonts({
        'NotoSansKR-Black' : require('../assets/fonts/NotoSansKR-Black.otf'),
        'NotoSansKR-Bold' : require('../assets/fonts/NotoSansKR-Bold.otf'),
        'NotoSansKR-Regular' : require('../assets/fonts/NotoSansKR-Regular.otf'),
    });
    const [year, month, date] = [new Date().getFullYear(), new Date().getMonth()+1,new Date().getDate()];
    const today = `${year}년 ${month}월 ${date}일`;
    const [search, setSearch] = useState('Seoul');
    const [weather, setWeather] = useState({
        loc: '-',
        country: '-',
        temp: '-',
        desc: '-',
        icon: '-',
        hum: '-',
        feels_like: '-',
        temp_max: '-',
        temp_min: '-',
        wind_speed: '-',
        wind_deg: '-',
    });

    const searchWeather = (local) => {
        const apiKey = OPENWEATHER_KEY;
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${apiKey}`;

        axios.get(URL).then(response => {
            response = response.data;
            console.log(response);

            setWeather({
                loc: response.name,
                country: response.sys.country,
                temp: Math.round(response.main.temp - 273.15)+'℃',
                desc: response.weather[0].description,
                icon: `http://openweathermap.com/img/w/${response.weather[0].icon}.png`,
                hum: response.main.humidity+'%',
                feels_like: Math.round(response.main.feels_like - 273.15)+'℃',
                temp_max: Math.round(response.main.temp_max - 273.15)+'℃',
                temp_min: Math.round(response.main.temp_min - 273.15)+'℃',
                wind_speed: response.wind.speed+'m/s',
                wind_deg: response.wind.deg,
            })
        });
        return weather;
    }

    useEffect(() => {
        searchWeather(search);
    }, []);

    return <>
        <SafeAreaView style={{flexDirection:"column", alignItems:'center'}}>
            <View style={weatherStyle.weatherInput}>
                <TextInput style={weatherStyle.input} inputAccessoryViewID={'Done'} placeholder={"지역을 입력해주세요"} onChangeText={value => setSearch(value)} defaultValue={search} />
                <InputAccessoryView nativeID={'Done'}>
                    <View style={{backgroundColor : 'white'}}>
                    <Button
                        onPress={() => {searchWeather(search)}}
                        title="Done"
                    />
                    </View>
                </InputAccessoryView>
                <TouchableOpacity style={weatherStyle.search} onPress={() => {searchWeather(search)}}>
                    <Image style={{height:30,width:30,resizeMode:'contain'}} source={require('./img/search.png')}/>
                </TouchableOpacity>
            </View>

            <View style={weatherStyle.mainWeather}>
                <Text style={{marginTop:13,fontFamily:'NotoSansKR-Regular',fontSize:20}}>{today}</Text>
                <Text style={{fontFamily: 'NotoSansKR-Black',fontSize:40,fontStyle: 'italic'}}>{weather.loc}, {weather.country}</Text>
                <Image style={{alignItems:'center',height:90,width:90,resizeMode:'contain'}} source={{uri: weather.icon}}/>
                <Text style={weatherStyle.font1}>{weather.desc}</Text>
                <Text style={weatherStyle.font1}>{weather.temp}</Text>
            </View>

            <View style={weatherStyle.temperatures}>
                <Image style={{marginLeft:40,height:83,width:83,resizeMode:'contain'}} source={require('./img/thermometer.png')}/>
                <View style={{marginLeft:20}}>
                    <Text style={weatherStyle.font2}>습도 {weather.hum}</Text>
                    <Text style={weatherStyle.font2}>체감온도 {weather.feels_like}</Text>
                    <Text style={weatherStyle.font2}>최고기온 {weather.temp_max}</Text>
                    <Text style={weatherStyle.font2}>최저기온 {weather.temp_min}</Text>
                </View>

            </View>

            <View style={weatherStyle.wind}>
                <Image style={{marginLeft:40,height:62,width:83,resizeMode:'stretch'}} source={require('./img/wind.png')}/>
                <View style={{marginLeft:20}}>
                    <Text style={weatherStyle.font2}>풍향 {weather.wind_deg}</Text>
                    <Text style={weatherStyle.font2}>풍속 {weather.wind_speed}</Text>
                </View>
            </View>
        </SafeAreaView>

    </>
}

export default Weather;

const weatherStyle = StyleSheet.create({
    weatherInput : {
        flexDirection:"row",
        alignItems:'center',
        justifyContent: 'center',
        width : 310,
        height : 45,
        borderColor : 'black',
        marginTop:30,
    },
    input : {
        width : 270,
        height : 45,
        borderWidth : 1,
        borderColor : 'black',
        fontFamily : 'NotoSansKR-Regular',
        fontSize : 30,
    },
    search : {
        marginLeft:10,
    },
    mainWeather : {
        width : 312,
        height : 262,
        borderWidth : 1,
        borderColor : 'black',

        flexDirection:"column",
        alignItems:'center',
        marginTop:15,
    },
    temperatures : {
        flexDirection:"row",
        alignItems:'center',

        width : 312,
        height : 121,
        borderWidth : 1,
        borderColor : 'black',

        fontFamily : 'NotoSansKR-Bold',
        fontSize : 20,
        marginTop:15,

    },
    wind : {
        flexDirection:"row",
        alignItems:'center',

        width : 312,
        height : 76,
        borderWidth : 1,
        borderColor : 'black',

        fontFamily : 'NotoSansKR-Bold',
        fontSize : 20,
        marginTop:15,
    },
    font1 : {
        fontFamily:'NotoSansKR-Regular',
        fontSize:20,
    },
    font2 : {
        fontFamily:'NotoSansKR-Bold',
        fontSize:15,
    },
})