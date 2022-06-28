import React, { useEffect, useState } from 'react'
import  { Text, View, StyleSheet, FlatList } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../Constants/index'
const data = require('../../assets/data/products.json')
import HomeActu from './HomeActu'
const ProductsContainer = () => {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
    return () => {
      setProducts([])
    }
  }, [])

  return (
    <View>
      <Text>Fil d'actualité</Text>
      <FlatList
        numColumns={2}
        data={products}
        renderItem={({item}) =>  <HomeActu item={item} key={item.id}
        />}
        keyExtractor={item => item.name}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: SIZES.h1,
    fontFamily: FONTS.flip,
    color: "red"
  }
})
export default ProductsContainer