import React from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

const Category = ({name, photo, index}) => {
    return (
        <TouchableOpacity onPress={() => null} style={[styles.container, index%3 !== 0 ? {marginLeft: 2} : null]}>
            <Image 
                source={photo}
                style={{resizeMode: 'contain', width: '100%', height: '100%'}}
            />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        width: (width-20)/3,
        height: width/3
    }
})
export default Category
