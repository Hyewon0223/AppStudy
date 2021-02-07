import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            {/* <TouchableOpacity> : 터치 이벤트를 사용할 수 있는 View */}
            {/* <Button>은 각 플랫폼에 따라 네이티브 버튼이 다르기 때문에 UI 조절이 제한적이고 일관성이 없게 됨*/}
            <TouchableOpacity onPressOut={onToggle(id)}>
                {checked ? (
                    <View style={styles.completeCircle}>
                        <Icon name="circledowno" size={30} color="#3143e8" />
                    </View>
                ) : (
                    <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text
                style={[
                    styles.text,
                    checked ? styles.strikeText : styles.unstrikeText,
                ]}>
                {textValue}
            {/* 입력창에 텍스트를 입력해 ADD버튼을 눌러 추가하면 리스트에 아이템이 추가됨 */}
            </Text>
            <View style={styles.buttons}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={onRemove(id)}>
                        <Icon name="delete" size={30} color="#e33057" />
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttons: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;
