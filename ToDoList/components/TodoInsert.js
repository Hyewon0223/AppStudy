import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

const TodoInsert = ({onAddTodo}) => {
    // 사용자가 입력한 텍스트 값의 상태 관리
    const [newTodoItem, setNewTodoItem] = useState('');
    // 텍스트 값은 문자열이므로 초기 상태값 : ''
    // newTodoItem : 새로 입력한 텍스트의 상태
    // setNewTodoItem : newTodoItem을 업데이트하는 함수

    // 실시간으로 사용자가 입력한 텍스트 값의 변화를 관리하기 위한 핸들러 함수수
   const todoInputHandler = newTodo => {
        setNewTodoItem(newTodo);
    };

   // 아이템을 추가해주는 핸들러
    const addTodoHandler = () => {
        onAddTodo(newTodoItem);
        // onAddTodo : 사용자가 입력한 텍스트 값을 전달 받아 목록에 추가
        setNewTodoItem('');
        // setNewTodoItem : 입력창을 공백으로 초기화 시키는 역할을 함
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Add an item!"
                value={newTodoItem}
                onChangeText={todoInputHandler}
                // 입력창에 텍스트를 입력하면 실시간으로 입력한 텍스트 값의 상태가 업데이트 되며,
                // newTodoItem에는 텍스트 값의 최신 상태가 담긴다.
                placeholderTextColor={'#999'}
                autoCorrect={false}
            />
            <View style={styles.button}>
                <Button title={'ADD'} onPress={addTodoHandler}/>
                {/* In React, <button onClick={addTodoHandler}>ADD</button> */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
    button: {
        marginRight: 10,
    },
});

export default TodoInsert;
