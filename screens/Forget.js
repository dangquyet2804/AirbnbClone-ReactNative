import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default class Forget extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        isHiden: true
    }
    render() {
        const {isHiden} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#008087', paddingHorizontal: 20}}>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView  behavior="padding" enabled style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
                                    <MaterialIcons name="keyboard-arrow-left" size={40} color="#fff"/>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.welcome}>Forget your password?</Text>
                            <View>
                                <Text style={styles.label}>EMAIL ADDRESS</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    // onChangeText={(email) => this.setState({email})}
                                    // value={email}
                                />
                            </View>
                        </View>
                        <View style={{flex: 1}}>
                            <TouchableOpacity style={styles.button}>
                                <MaterialIcons name="keyboard-arrow-right" size={40} color="#008087"/>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    welcome: {
        color: '#fff',
        fontFamily: 'OpenSans-Light',
        fontSize: 32,
        marginVertical: 50,
    },
    label: {
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 17,
        marginBottom: 10,
    },
    textInput: {
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        paddingVertical: 10,
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    button: {
        backgroundColor: '#34999F',
        width: 70,
        height: 70,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 10
    }
})
