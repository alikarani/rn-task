import React, { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleUser } from '../../redux/actions/usersActions';
const UserModal = props => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.usersReducer.user);

    useEffect(() => {
        if (props?.userInfo?.url && props?.userInfo?.login) {
            async function fetchData() {
                await dispatch(getSingleUser(props?.userInfo?.login));
            }
            fetchData();
        }
    }, [props?.userInfo?.url]);

    return (
        <Modal style={styles.container}
            visible={props.visible}
            animationType="slide"
            transparent={true}
        >
            <TouchableOpacity style={styles.blurBackground} onPress={() => { props.setVisibility(false) }}>
            </TouchableOpacity>

            <View style={styles.blurView}>
                <TouchableOpacity style={styles.topContainer} onPress={() => props.setVisibility(false)}>
                    <Text>X</Text>
                </TouchableOpacity>
                <Image source={{ uri: user?.avatar_url }} style={styles.image} />
                <View style={styles.userInfoContainer}>
                    <Text>{user?.name}</Text>
                    <Text>Followers: {user?.followers}</Text>
                    <Text>Followers: {user?.following}</Text>
                    <Text>Location: {user?.location ?? 'Not Provided'}</Text>
                </View>
            </View>
        </Modal>
    );
};

export default UserModal;