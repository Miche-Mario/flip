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
import DressingCard from '../../Components/DressingCard'
import { SIZES } from '../../Constants'

const ActuDressingProducts = (props) => {
    const { item } = props

  return (
    <TouchableOpacity >
        <View >
            <DressingCard {...item}/>
        </View>
        
    </TouchableOpacity>
  )
}

export default ActuDressingProducts