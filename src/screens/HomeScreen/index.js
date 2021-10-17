/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    StatusBar,
    Text,
    View,
    FlatList,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';
import UserModal from '../../components/modal';
import styles from './styles';
import TextInputWrapper from '../../components/TextInput'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, searchUser } from '../../redux/actions/usersActions';
const HomeScreen = () => {
    const [userInfo, setUserInfo] = useState({});
    const [showPopUp, setShowPopUp] = useState(false);
    const dispatch = useDispatch()
    const users = useSelector(state => state.usersReducer.users);
    const [text, onChangeText] = React.useState("");
    const searchText = (text) => {
        onChangeText(text)
        async function fetchData() {
            await dispatch(searchUser(text));
        }
        if (text.trim('')) {
            fetchData();
        }
        // setTimeout(() => { console.log('search',text) }, 1000);
    }
    useEffect(() => {
        async function fetchData() {
            await dispatch(getUsers());
        }
        fetchData();
    }, []);


    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={[styles.listItem, { borderBottomColor: index == users.length - 1 ? 'transparent' : 'grey', borderBottomWidth: index == users.length - 1 ? 0 : 2 }]} onPress={() => { setUserInfo(item); setShowPopUp(true) }}>
                <Image source={{ uri: item?.avatar_url }} style={styles.image} />
                <Text style={styles.title}>{item?.login.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.safeAreaView}>
            <StatusBar barStyle='dark-content' />
            <UserModal
                visible={showPopUp}
                userInfo={userInfo}
                setVisibility={() => setShowPopUp(false)}
            />

            <View style={styles.container}>
                <Text style={styles.heading}>Github Users</Text>
                <TextInputWrapper
                    onChangeText={searchText}
                    value={text}
                />
                <FlatList
                    data={users}
                    renderItem={(item, index) => renderItem(item, index)}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;
