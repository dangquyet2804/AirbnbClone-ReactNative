import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput, Alert} from 'react-native';
import logo from '../assets/logo.png';
import { EvilIcons } from '@expo/vector-icons';
import ModalTerm from '../components/ModalTerm';
import * as Facebook from 'expo-facebook';

export default class Welcome extends Component {
    static navigationOptions = {
        header: null
    }
    state = {
        isModalVisible: false
    }
    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    onPressFacebook = () => {
        console.log('Facebook')
        this.logInWithFacebook()
    }
    logInWithFacebook = async () =>  {
        try {
            const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync('483303662531117', {
            permissions: ['public_profile'],
            });
            if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
            // console.log(token)
            this.props.navigation.navigate('HomeStack')
            } else {
            // type === 'cancel'
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#008087', paddingHorizontal: 20}}>
                <SafeAreaView style={{flex: 1}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('LogIn')}>
                            <Text style={[styles.text, {marginTop: 10}]}>Log In</Text>
                        </TouchableOpacity>
                        <Image 
                            source={logo}
                            style={styles.logo}
                        />
                        <Text style={styles.welcome}>Welcome to Airbnb.</Text>
                    </View>
                    <View style={styles.center}>
                        <TouchableOpacity onPress={this.onPressFacebook} style={styles.facebook}>
                            <EvilIcons name="sc-facebook" size={25} color="#008087" style={styles.icon}/>
                            <Text style={[styles.text, {color: '#008087'}]}>Continue with Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  onPress={() => this.props.navigation.navigate('SignUp')} style={styles.create}>
                            <Text style={[styles.text, {color: '#fff'}]}>Create an Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity>
                            <Text style={[styles.text, {textAlign: 'left', marginTop: 20}]}>More options</Text>
                        </TouchableOpacity>
                        <Text style={[styles.text, {textAlign: 'left', marginTop: 30}]}>By tapping Continue, Create Account or More options,</Text>
                        <View style={{flexDirection: 'row',}}>
                            <Text style={styles.terms}>I agree to Airbnb's </Text>
                            <TouchableOpacity onPress={this.toggleModal}>
                                <Text style={styles.termsUndeline}>Terms of Service,</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection: 'row',}}>
                            <TouchableOpacity>
                                <Text style={styles.termsUndeline}>Payments Terms of Service, Privacy Policy,</Text>
                            </TouchableOpacity>
                            <Text style={styles.terms}>and</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.termsUndeline}>Nondiscrimination Policy</Text>
                        </TouchableOpacity>
                        <ModalTerm isModalVisible={this.state.isModalVisible} toggleModal={this.toggleModal}/>
                    </View>
                </SafeAreaView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    logo: {
        width: 60,
        height: 60,
    },
    header: {
        justifyContent: 'space-between',
        flex: 1
    },
    text: {
        textAlign: 'right',
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    welcome: {
        color: '#fff',
        fontFamily: 'OpenSans-Light',
        fontSize: 32
    },
    center: {
        flex: 0.5,
        marginVertical: 30,
        justifyContent: 'center',
    },
    facebook: {
        backgroundColor: '#fff',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
    },
    icon: {
        position: 'absolute',
        left: 30
    },
    create: {
        backgroundColor: '#008087',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        borderColor: '#fff',
        borderWidth: 1,
        marginTop: 15,
    },
    terms: {
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
    },
    termsUndeline: {
        color: '#fff',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
        textDecorationLine: 'underline'
    }
})
