import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, SafeAreaView, KeyboardAvoidingView, ImageBackground, TouchableOpacity, ScrollView, TextInput, FlatList, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import StarRating from 'react-native-star-rating';
const { height, width } = Dimensions.get('window');

class Saved extends Component {
    
    render() {
        const {tasks} = this.props;
        if (tasks.length === 0) 
        {
            return (
                <View style={{flex: 1}}>
                    <Text style={styles.saved}>Saved</Text>
                    <Text style={styles.artical}>Not everyday is filled with adventures, but you can start planning for the next one. Tap the heart on any home to start saving your favorites here.</Text>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('EXPLORE')}>
                            <Text style={styles.textbutton}>Find homes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        return (
            <View style={{flex: 1, marginTop: 10}}>
                <FlatList 
                    numColumns={2}
                    data={tasks}
                    keyExtractor={(data, index) => String(index)}
                    renderItem={({item, index}) => {
                        return (
                            <View style={[styles.container, index%2 !==0 ? {marginLeft: 10} : null]}>
                                <Image 
                                    source={item.photo}
                                    style={{ width: '100%', height: '50%', borderRadius: 10}}
                                />
                                <View style={{height: '50%'}}>
                                    <Text style={styles.type}>{item.type}</Text>
                                    <Text style={styles.type} numberOfLines={2}>{item.title}</Text>
                                    <Text style={styles.price}>${item.price} per person</Text>
                                    <View style={styles.rating}>
                                        <StarRating 
                                            rating={item.stars > 5 || item.stars === 0 ? 5 : 4} 
                                            disabled={false}
                                            maxStars={5}
                                            fullStar={'star'}
                                            starSize={14}
                                            halfStarColor={'#00918e'}
                                            fullStarColor={'#00918e'}
                                            emptyStarColor={'#00918e'}
                                        />
                                        <Text style={[styles.type, {fontSize: 14, marginLeft: 5, marginBottom: 5}]}>{item.stars}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width/2,
        height: 270
    },
    type: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 14,
        opacity: 0.7,
        marginTop: 5,
    },
    price: {
        fontFamily: 'OpenSans-Light',
        fontSize: 14,
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    favor: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    saved: {
        fontFamily: 'OpenSans-Bold',
        fontSize: 35,
        marginTop: 30,
        marginBottom: 50,
        marginLeft: 20,
    },
    artical: {
        fontFamily: 'OpenSans-Light',
        fontSize: 19.5,
        marginHorizontal: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        height: 70,
        width: '100%',
        borderTopColor: 'grey',
        borderTopWidth: 0.3,
        justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        backgroundColor: 'red',
        marginHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    textbutton: {
        textAlign: 'center',
        fontFamily: 'OpenSans-Bold',
        fontSize: 15,
        color: '#fff'
    }
})
const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, null)(Saved)
