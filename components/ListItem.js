import React, {Component} from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

class ListItem extends Component {
    state = {
        fav: true
    }
    onPressAddFav = () => {
        this.setState({
            fav: false
        })
        this.props.addFavorite()
    }
    onPressRemoveFav = () => {
        this.setState({
            fav: true
        })
        this.props.removeFavorite()
    }
    render() {
        const {photo, type, title, price, priceType, stars} = this.props;
        const {fav} = this.state
        return (
            <View style={styles.container}>
                <Image 
                    source={photo}
                    style={{ width: '100%', height: '50%', borderRadius: 5}}
                />
                <View style={{height: '50%'}}>
                    <Text style={styles.type}>{type}</Text>
                    <Text style={styles.type} numberOfLines={2}>{title}</Text>
                    <Text style={styles.price}>${price} per person</Text>
                    <View style={styles.rating}>
                        <StarRating 
                            rating={stars > 5 || stars === 0 ? 5 : 4} 
                            disabled={false}
                            maxStars={5}
                            fullStar={'star'}
                            starSize={14}
                            halfStarColor={'#00918e'}
                            fullStarColor={'#00918e'}
                            emptyStarColor={'#00918e'}
                        />
                        <Text style={[styles.type, {fontSize: 14, marginLeft: 5, marginBottom: 5}]}>{stars}</Text>
                    </View>
                </View>
                {
                    fav ? 
                        <TouchableOpacity onPress ={this.onPressAddFav} style={styles.favor}>
                           <FontAwesome name="heart-o" size={22} color="grey"/>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity onPress ={this.onPressRemoveFav} style={styles.favor}>
                           <FontAwesome name="heart" size={22} color="red"/>
                        </TouchableOpacity>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: 160,
        height: 230,
        marginRight: 15,
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
    }
})
export default ListItem
