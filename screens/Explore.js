import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Dimensions} from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import categoriesList from './data/categories';
import listings from './data/listings';
import Category from '../components/Category';
import ListItem from '../components/ListItem';
import {addFavorite, removeFavorite} from '../redux/actions';
import {connect} from 'react-redux';
const { height, width } = Dimensions.get('window');

class Explore extends Component {
    state = {
        text: ''
    }
    render() {
        const {text} = this.state;
        const dataExperiences = listings.find(listing => listing.title == 'Experiences')
        const dataHomes = listings.find(listing => listing.title == 'Homes')
        const dataPopular = listings.find(listing => listing.title == 'Popular Reservations')
        return (
            <SafeAreaView style={styles.screen}>
                <View style={[styles.search, {marginHorizontal: 10}]}>
                    <FontAwesome name="search" size={20} color="grey" style={styles.icon}/>
                    <TextInput 
                        placeholder='Search'
                        placeholderTextColor="grey"
                        // onChangeText={(text) => this.getData(text)}
                        // value={text}
                        style={styles.textinput}
                    />
                </View>
                <ScrollView>
                    <Text style={styles.title}>Explore Airbnb</Text>
                    <FlatList
                        style={{marginHorizontal: 10}}
                        numColumns={3}                        
                        data={categoriesList}
                        keyExtractor={(data) => data.name}
                        renderItem={({item, index}) => <Category name={item.name} photo={item.photo} index={index} />}
                    />
                    <View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtext}>{dataExperiences.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text style={[styles.subtext, {fontSize: 15, marginRight: 10}]}>See all</Text>
                                </TouchableOpacity>
                                <Ionicons name="ios-arrow-forward" size={20} color="grey"/>
                            </View>
                        </View>   
                        <FlatList
                            style={{marginLeft: 10}}
                            horizontal
                            data={dataExperiences.listings}
                            keyExtractor={(data) => String(data.id)}
                            renderItem={({item, index}) => <ListItem 
                                photo={item.photo} title={item.title} type={item.type} priceType={item.priceType} stars={item.stars} price={item.price}
                                addFavorite={() => this.props.addFavorite(item)}
                                removeFavorite={() => this.props.removeFavorite(item)}
                            />}
                        />                  
                    </View>
                    <View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtext}>{dataHomes.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text style={[styles.subtext, {fontSize: 15, marginRight: 10}]}>See all</Text>
                                </TouchableOpacity>
                                <Ionicons name="ios-arrow-forward" size={20} color="grey"/>
                            </View>
                        </View>   
                        <FlatList
                            style={{marginLeft: 20}}
                            horizontal
                            data={dataHomes.listings}
                            keyExtractor={(data) => String(data.id)}
                            renderItem={({item, index}) => <ListItem 
                                photo={item.photo} title={item.title} type={item.type} priceType={item.priceType} stars={item.stars} price={item.price}
                                addFavorite={() => this.props.addFavorite(item)}
                                removeFavorite={() => this.props.removeFavorite(item)}
                            />}
                        />                  
                    </View>
                    <View>
                        <View style={styles.subtitle}>
                            <Text style={styles.subtext}>{dataPopular.title}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <TouchableOpacity>
                                    <Text style={[styles.subtext, {fontSize: 15, marginRight: 10}]}>See all</Text>
                                </TouchableOpacity>
                                <Ionicons name="ios-arrow-forward" size={20} color="grey"/>
                            </View>
                        </View>   
                        <FlatList
                            style={{marginLeft: 20}}
                            horizontal
                            data={dataPopular.listings}
                            keyExtractor={(data) => String(data.id)}
                            renderItem={({item, index}) => <ListItem 
                                photo={item.photo} title={item.title} type={item.type} priceType={item.priceType} stars={item.stars} price={item.price}
                                addFavorite={() => this.props.addFavorite(item)}
                                removeFavorite={() => this.props.removeFavorite(item)}
                            />}
                        />                  
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    icon: {
        flex: 1
    },
    textinput: {
        flex: 11,
        fontFamily: 'OpenSans-Light',
        fontSize: 15,
    },
    search: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 0.5,
        padding: 7,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        borderRadius: 3,
        backgroundColor: '#fff',
        elevation: 5,
    },
    title: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 25,
        marginTop: 30,
        marginBottom: 10,
        marginHorizontal: 20,
    },
    subtitle: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginVertical: 20,
        marginHorizontal: 20,
    }, 
    subtext: {
        fontFamily: 'OpenSans-Light',
        fontSize: 18,
    }
})
export default connect(null, {addFavorite, removeFavorite})(Explore)