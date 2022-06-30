import React, { useEffect, useState } from 'react'
import  { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
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


  const Dressing = [
    {
      id: 1,
      name: "boost 1",
    },
    {
      id: 2,
      name: "boost 2"
    },
    {
      id: 3,
      name: "boost 3"
    },
    {
      id: 4,
      name: "boost 4"
    },
    {
      id: 5,
      name: "boost 5"
    },
    {
      id: 6,
      name: "boost 6"
    },
    {
      id: 7,
      name: "boost 7"
    },
    {
      id: 8,
      name: "boost 8"
    },
    {
      id: 9,
      name: "boost 9"
    }
  ]


  const chunkSize = 2;
  const chunk =[]
for (let i = 0; i < Dressing.length; i += chunkSize) {
    chunk.push(Dressing.slice(i, i + chunkSize));
    // do whatever
  
}
console.log(chunk)



  return (
    <ScrollView>
      <Text>Fil d'actualité</Text>
      
    </ScrollView>
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