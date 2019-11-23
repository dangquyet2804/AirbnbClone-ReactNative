import React from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Modal from "react-native-modal";

const ModalAuth = () => {
    return (
        <Modal 
            isVisible={true}
            backdropColor="#000"
            backdropOpacity={0.6}     
        >
            <View style={styles.wrapper}>
                <ActivityIndicator size="large" color="grey" />
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
export default ModalAuth
