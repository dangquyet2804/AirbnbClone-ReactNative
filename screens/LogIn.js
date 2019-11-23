import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput, Alert} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class Login extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        email: '',
        password: '',
        err: '',
        isHiden: true
    }
    handleLogIn = () => {
        const {email, password, err} = this.state;
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(userCredentials => {
                Alert.alert('LogIn Sucess')
                this.props.navigation.navigate('HomeStack')
            })
        .catch(err => this.setState({err: err.message}))
    }
    render() {
        const {isHiden, email, password, err} = this.state;
        return (
            <View style={{flex: 1, backgroundColor: '#008087', paddingHorizontal: 20}}>
                <SafeAreaView style={{flex: 1}}>
                    <KeyboardAvoidingView  behavior="padding" enabled style={{flex: 1}}>
                        <View style={{flex: 1}}>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Welcome')}>
                                    <MaterialIcons name="keyboard-arrow-left" size={40} color="#fff"/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Forget')}>
                                    <Text style={styles.text}>Forgot Password </Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.welcome}>Log In</Text>
                            <View>
                                <Text style={styles.label}>EMAIL ADDRESS</Text>
                                <TextInput 
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    keyboardType="email-address"
                                    onChangeText={(email) => this.setState({email})}
                                    value={email}
                                />
                            </View>
                            <View style={{marginTop: 30}}>
                                <View style={{flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                                    <Text style={styles.label}>PASSWORD</Text>
                                    <TouchableOpacity onPress={() => this.setState({isHiden: !isHiden})}>
                                        <Text style={styles.text}>Show</Text>
                                    </TouchableOpacity>
                                </View>
                                <TextInput 
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                    secureTextEntry={isHiden}
                                    onChangeText={(password) => this.setState({password})}
                                    value={password}
                                />
                            </View>
                            <Text style={styles.err}>{err}</Text>
                        </View>
                        <View style={{flex: 1}}>
                            <TouchableOpacity style={styles.button} onPress={this.handleLogIn}>
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
    },
    err: {
        color: '#f45905',
        fontFamily: 'OpenSans-Bold',
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 20,
    }
})
