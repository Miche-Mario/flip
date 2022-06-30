import React from 'react'
import {
    StyleSheet,
    View,
    Image,
    Text,
    Button
} from 'react-native'
import { Icon } from "@rneui/themed";
import { COLORS, FONTS, SIZES } from '../Constants'

const ProductsCard = (props) => {
    const { name, price, image, countInStock } = props
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{marginLeft: 8}}>
                    <Image
                        style={styles.profileImage}
                        source={require('../assets/profile.png')}
                    />
                </View>
                <View>
                    <Text style={styles.profileName}>{name}shop</Text>
                </View>
            </View>
            <View style={{flex:1,elevation: 0, borderRadius:10, marginTop: 5}}>
                <View>
                    <Image
                        style={styles.productImage}
                        source={{uri: image}}
                    />
                </View>
                <View style={{ marginTop: 3,flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View style={{marginLeft: 8}}>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                    <View style={{marginRight: 8,flexDirection: 'row', }}>
                        <Icon
                            name='favorite-border'
                            type='material'
                            color='lightgray'
                            size={21}
                        />
                        <Text style={styles.favoris}>30</Text>
                    </View>
                </View>
                <View style={{marginLeft: 8, marginTop:-2}}>
                    <Text style={{fontFamily: FONTS.body3, fontSize: SIZES.h6}}>{name}</Text>
                </View>
                <View style={{marginLeft: 8, marginTop:-2}}>
                    <Text style={{fontFamily: FONTS.body3, fontSize: SIZES.h6, color:"gray"}}>M / 38 / 10</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: SIZES.width / 2 - 12,
        height: SIZES.height / 2,
        padding: 0,
       
        marginTop: 15,
        marginBottom: 0,
        
        marginLeft: 8
      
        

    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 150 / 2
    },
    profileName: {
        marginTop: 3,
        marginLeft: 8,
        fontFamily: FONTS.body3,
        fontSize: SIZES.h6,
        color: 'gray'
    },
    productImage: {
        marginTop: 0,
        width: SIZES.width / 2 - 12,
        height: SIZES.height / 2 - 40 - 40 - 20,
    },
    card: {
        marginBottom: 10,
        height: SIZES.width / 2 - 20 - 9,
        backgroundColor: 'transparent',
        width: SIZES.width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center'
    },
    price: {
        fontSize: SIZES.h5,
        fontFamily: FONTS.body3,
        color: "#1a1a1b",
    },
    favoris: {
        color: "#535355",
        fontFamily: FONTS.body3,
        fontSize: SIZES.h5,
        marginLeft: 2
        
    }
})

export default ProductsCard