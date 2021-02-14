import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import {Condition} from "./Condition";
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';
import {Rows, Table} from "react-native-table-component";

const value = [0,0,0,0,0,0,0,0,0];
const choose_X = [0,0,0,0,0,0,0,0,0];
const choose_O = [0,0,0,0,0,0,0,0,0];

export const TicTacToe = (props) => {
    let fontsLoaded = useFonts({
        'Gaegu-Bold' : require('../assets/fonts/Gaegu-Bold.ttf'),
    });

    let result = '';
    let finish = false;

    const makeBtn = (idx) => {
        return <Button style={styles.tile} title={value[idx]===0? '': value[idx]===1? 'X':'O'} onPress={() => {btnClick(idx)}}/>
    }

    const state = {
        tableData : [
            [<Button title={value[0]===0? '': value[0]===1? 'X':'O'} onPress={() => {btnClick(0)}}/>,
                <Button title={value[1]===0? '': value[1]===1? 'X':'O'} onPress={() => {btnClick(1)}}/>,
                    <Button title={value[2]===0? '': value[2]===1? 'X':'O'} onPress={() => {btnClick(2)}}/>],
            [<Button title={value[3]===0? '': value[3]===1? 'X':'O'} onPress={() => {btnClick(3)}}/>,
                <Button title={value[4]===0? '': value[4]===1? 'X':'O'} onPress={() => {btnClick(4)}}/>,
                    <Button title={value[5]===0? '': value[5]===1? 'X':'O'} onPress={() => {btnClick(5)}}/>],
            [<Button title={value[6]===0? '': value[6]===1? 'X':'O'} onPress={() => {btnClick(6)}}/>,
                <Button title={value[7]===0? '': value[7]===1? 'X':'O'} onPress={() => {btnClick(7)}}/>,
                    <Button title={value[8]===0? '': value[8]===1? 'X':'O'} onPress={() => {btnClick(8)}}/>],
        ]
    }

    const [user, setUser] = useState({
        player : '다음은 X의 차례입니다',
        count : 0,
        gameOver: false,
    })

    const btnClick = (idx) => {
        if (!user.gameOver){
            if (value[idx] === 0){
                console.log("어떤 칸을 눌렀나요?");
                // user X = 1, user O = 2를 부여
                if (user.count % 2 === 0){
                    value[idx] = 1;
                    choose_X[idx] = 1;

                    result = Condition(user.count, choose_X);
                    if (result === '승리') {
                        result = `축하합니다! X가 승리했습니다!`;
                        finish = true;
                    }
                    else if (result === '무승부') {
                        result = "무승부입니다...아쉽네요...!";
                        finish = true;
                    }
                    else result = '다음은 O의 차례입니다'

                    setUser({
                        player : result,
                        count : user.count+1,
                        gameOver : finish,
                    })
                }

                else{
                    value[idx] = 2;
                    choose_O[idx] = 1;

                    result = Condition(user.count, choose_O);
                    if (result === '승리') {
                        result = `축하합니다! O가 승리했습니다!`;
                        finish = true;
                    }
                    else if (result === '무승부') {
                        result = "무승부입니다...아쉽네요...!";
                        finish = true;
                    }
                    else result = '다음은 X의 차례입니다'

                    setUser({
                        player : result,
                        count : user.count+1,
                        gameOver : finish,
                    })
                }
                console.log(user.count, "번째: ", user.player,"가 ", idx, "번째 칸을 눌렀습니다!");
            }
            else{
                console.log(idx,"번째 칸은 이미 누르셨습니다ㅜ-ㅜ");
                setUser({
                    player : '이미 누르셨습니다ㅜ-ㅜ',
                    count : user.count,
                    gameOver : finish,
                })
            }
        }
        else {
            alert("게임이 종료되었습니다!");
            result = '';
            finish = false;
        }
    }

    const btnReset = () => {
        console.log("reset");
        for (let i=0;i<9;i++){
            value[i] = 0;
            choose_X[i] = 0;
            choose_O[i] = 0;
        }
        setUser({
            player : '다음은 X의 차례입니다',
            count : 0,
            gameOver: false,
        })
    }

    if (!fontsLoaded){
        return <AppLoading/>
    }

    return <>
        <SafeAreaView>
            <Text style={styles.state}>{user.player}</Text>
            <View style={styles.board}>
                <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
                    <Rows data = {state.tableData} style={styles.tableRow} textStyle={styles.text}/>
                </Table>
            </View>
            <Button style={styles.resetBtn} title={"RESET"} onPress={btnReset}/>
        </SafeAreaView>
    </>
}

const styles = StyleSheet.create({
    state: {
        marginTop : 30,
        textAlign: 'center',
        fontSize : 30,
        fontFamily : 'Gaegu-Bold',
    },
    board : {
        marginTop : 40,
    },
    tableRow : {
        height : 150,
        fontSize : 100,
        fontFamily: 'Gaegu-Bold',
    },
    resetBtn : {
        marginTop : 20,
        fontSize : 20,
        fontFamily: 'Gaegu-Bold',
    },
    text: {

    },
});
export default TicTacToe;
