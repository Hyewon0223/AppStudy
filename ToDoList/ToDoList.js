import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    // todos : 할 일 목록의 현재 상태를 나타냄
    // setTodos : todos를 업데이트 해주는 함수

    // useState 인자로 초기 상태값을 받음
    // number, string, array 등이 인자값으로 들어갈 수 있음

    // 할 일 목록 객체를 담을 배열이 필요하므로 빈 배열을 인자값으로 넣음
    // 배열에 두 개의 값을 넣어 반환
    // 1. 상태값, 함수 호출시 입력한 인수가 초기값으로 사용
    // 2. 상태값을 변경할 수 있는 함수

   // 목록 추가 : 사용자가 입력한 텍스트를 인자로 받아 새로운 todo 객체를 생성
    const addTodo = text => {
        setTodos([
            ...todos,
            // 기존 할 일 목록은 현재 상태를 나타내는 todos를 이용해 그대로 가져옴
            {id: Math.random().toString(), textValue: text, checked: false},
            // id : [number]각 목록의 고유 아이디 - 랜덤 생성,
            // textValue : [String]목록 내용 - 사용자가 입력한 텍스트,
            // checked : [boolean]완료 여부(true : 완료, false : 미완료) - 기본값 : false
        ]);
        // setTodos : 이전에 있던 목록은 그대로 유지하면서 새로운 목록을 추가한 배열 생성
    };

    // 목록 제거 : 할 일 목록을 삭제하는 함수
    const onRemove = id => e => {
        setTodos(todos.filter(todo => todo.id !== id));
        // setTodos를 사용해 상태를 업데이트 해줌
        // 각 아이템의 고유 id를 받아와 해당 아이디를 가진 아이템 객체만 제거하고 새로운 배열을 만드는 함수
    };

    // 목록 완료 체크 : 할 일 목록에 완료 체크 표시를 하는 기능
    // 각 목록의 왼쪽에 파란색 토글 버튼을 누르면 체크, 한 번 더 누르면 체크 해제
    // onToggle : 아이템의 id를 받아와서 해당하는 아이템의 checked 속성값을 반대로 변경
    const onToggle = id => e => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? {...todo, checked: !todo.checked} : todo,
            ),
        );
    };

    return (
        // <SafeAreaView> : 상태바 영역과 겹칠 때 영역을 제한.
        <SafeAreaView style={styles.container}>
            <Text style={styles.appTitle}>Hello Todolist</Text>
            <View style={styles.card}>
                <TodoInsert onAddTodo={addTodo}/>
                <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
                {/* todos : 할 일 목록의 객체가 담긴 배열 */}
                {/* TodoList에서 TodoListItem으로 전달 할 때 : 배열에 담긴 객체 하나하나를 전달해야 함 */}
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

export default ToDoList;
