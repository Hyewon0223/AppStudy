import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from "./ToDoList/components/TodoInsert";
import TodoList from "./ToDoList/components/TodoList";

const App = () => {
    const [todos, setTodos] = useState([]);

    // 목록 추가
    const addTodo = text => {
        setTodos([
            ...todos,
            {id: Math.random().toString(), textValue: text, checked: false},
        ]);
    };

    // 목록 제거
    const onRemove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // 목록 완료 체크
    const onToggle = id => e => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo,
            ),
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Hello Todolist</Text>
            <View style={styles.card}>
                <TodoInsert onAddTodo={addTodo}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3143e8',
    },
    appTitle: {
        color: '#fff',
        fontSize: 36,
        marginTop: 30,
        marginBottom: 30,
        fontWeight: '300',
        textAlign: 'center',
        backgroundColor: '#3143e8',
    },
    card: {
        backgroundColor: '#fff',
        flex: 1,
        borderTopLeftRadius: 10, // to provide rounded corners
        borderTopRightRadius: 10, // to provide rounded corners
        marginLeft: 10,
        marginRight: 10,
    },
    input: {
        padding: 20,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
        fontSize: 24,
        marginLeft: 20,
    },
});

export default App;
