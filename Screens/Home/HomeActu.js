import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ActivityIndicator,
    FlatList,
    TouchableOpacity, 
    Touchable,
    ScrollView
} from 'react-native'
import ProductsCard from '../../Components/ProductsCard'
import { SIZES } from '../../Constants'

const HomeActu = (props) => {
    const { item } = props

  return (
    <TouchableOpacity >
        <View >
            <ProductsCard {...item}/>
        </View>
        
    </TouchableOpacity>
  )
}

export default HomeActu