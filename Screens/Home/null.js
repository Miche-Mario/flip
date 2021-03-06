import { TabItem } from '@rneui/base/dist/Tab/Tab.Item'
import React, { useEffect, useState } from 'react'
import  { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native'
import { COLORS, SIZES, FONTS } from '../../Constants/index'
const data = require('../../assets/data/products.json')
import ActuProductsList from './ActuProductsList'
import ActuDressingProducts from './ActuDressingProducts'
import ProductsCard from '../../Components/ProductsCard'

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
    "id": "1",
    "name": "Isabelle",
    "products": [
      {
        "image": "https://m.media-amazon.com/images/I/81Ty0JQfrcL._AC_UL1500_.jpg",
        "brand": "Givinci",
        "price": "2 500",
        "rating": 6,
        "numReviews": 0,
        "isFeatured": true,
        "size": "L / 40 / 12",
        "name": "Isabelle",
        "description": "The most hard FIFA ever",
        "countInStock": 25,
      },
      {
        "image": "https://m.media-amazon.com/images/I/71NY9YPaMhS._AC_UL1500_.jpg",
        "brand": "Fhuger",
        "price": "4 500",
        "rating": 49,
        "numReviews": 0,
        "isFeatured": true,
        "size": "XL / 10 / 2",
        "name": "Audrey",
        "description": "The most hard FIFA ever",
      },
      {
        "image": "https://www.derkanadischeladentisch.com/5624/fj%C3%A4llr%C3%A4ven-chemise-canada-shirt-femme.jpg",
        "brand": "Hiver",
        "price": "1 300",
        "rating": 14,
        "numReviews": 0,
        "isFeatured": true,
        "size": "XL / 10 / 2",
        "name": "Emma",
        "description": "The most hard FIFA ever"
      }
    ]
  },
  {
    "id": "2",
    "name": "Junior",
    "products": [
      {
        "image": "https://thumbs.dreamstime.com/b/young-sexy-woman-red-chemise-7863203.jpg",
        "brand": "Nickel",
        "price": "10 000",
        "rating": 55,
        "numReviews": null,
        "isFeatured": true,
        "size": "XL / 10 / 2",
        "name": "Sofia",
        "description": "Big Sofa for living room"
      },
      {
        "image": "https://cdn.armandthiery.fr/products_images/prod_32246/h_chemise-ajustee-minilos-per-l-uomo-BLANC-front-48.jpg",
        "brand": "Lotus",
        "price": "3 900",
        "rating": 33,
        "numReviews": null,
        "isFeatured": true,
        "size": "XL / 10 / 2",
        "name": "Adrien",
        "description": "Big Sofa for living room"
      },
      {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEz0ZHt8iJo3jXOl0Z6I8gNS3QceSDR9oB1w&usqp=CAU",
        "brand": "Porland",
        "price": "10 000",
        "rating": 14,
        "numReviews": null,
        "isFeatured": true,
        "size": "XL / 10 / 2",
        "name": "Gilbert",
        "description": "Big Sofa for living room",
      }
    ]
  }
]

  const prod = [
    {
    "image": "https://m.media-amazon.com/images/I/81Ty0JQfrcL._AC_UL1500_.jpg",
    "brand": "Givinci",
    "price": "2 500",
    "rating": 6,
    "numReviews": 0,
    "isFeatured": true,
    "size": "L / 40 / 12",
    "name": "Isabelle",
    "description": "The most hard FIFA ever",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  },{
  
    "image": "https://m.media-amazon.com/images/I/71NY9YPaMhS._AC_UL1500_.jpg",
    "brand": "Fhuger",
    "price": "4 500",
    "rating": 49,
    "numReviews": 0,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Audrey",
    "description": "The most hard FIFA ever",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  },{
    
    "image": "https://www.derkanadischeladentisch.com/5624/fj%C3%A4llr%C3%A4ven-chemise-canada-shirt-femme.jpg",
    "brand": "Hiver",
    "price": "1 300",
    "rating": 14,
    "numReviews": 0,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Emma",
    "description": "The most hard FIFA ever",
    "category": {
      "$oid": "5f15d5cdcb4a6642bddc0fe9"
    },
    "countInStock": 25,
    "__v": 0
  },{
    
    "image": "https://cdn.shopify.com/s/files/1/0357/2016/7557/products/chemise-manches-courtes-gambier-black-553606_400x.jpg?v=1652362982",
    "brand": "Amandi",
    "price": "12 340",
    "rating": 3,
    "numReviews": 0,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Francis",
    "description": "Grass Cut Machine for garden",
    "category": {
      "$oid": "5f15d5b7cb4a6642bddc0fe8"
    },
    "countInStock": 5,
    "__v": 0
  },
  {
    
    "image": "https://thumbs.dreamstime.com/b/young-sexy-woman-red-chemise-7863203.jpg",
    "brand": "Nickel",
    "price": "10 000",
    "rating": 55,
    "numReviews": null,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Sofia",
    "description": "Big Sofa for living room",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  },
  {
    
    "image": "https://cdn.armandthiery.fr/products_images/prod_32246/h_chemise-ajustee-minilos-per-l-uomo-BLANC-front-48.jpg",
    "brand": "Lotus",
    "price": "3 900",
    "rating": 33,
    "numReviews": null,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Adrien",
    "description": "Big Sofa for living room",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  },
  {
    
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEz0ZHt8iJo3jXOl0Z6I8gNS3QceSDR9oB1w&usqp=CAU",
    "brand": "Porland",
    "price": "10 000",
    "rating": 14,
    "numReviews": null,
    "isFeatured": true,
    "size": "XL / 10 / 2",
    "name": "Gilbert",
    "description": "Big Sofa for living room",
    "category": {
      "$oid": "5f15d5b2cb4a6642bddc0fe7"
    },
    "countInStock": 2,
    "__v": 0
  }
]

  let dressing = Dressing.length / 3;
  let data = []
  let d1;
  let d2;



  for(let i=0; i<Dressing.length;i++) {
    d1 = Dressing.slice(i, i++ +1)
    d2 = prod.slice(i, i + 2)

    data.push(
    
      <View style={styles.container}>
        {d2.map((it, index) =>
            <View style={styles.item}>
              <ActuProductsList key={index} item={it}/>
            </View>
        )}
      </View>
      ,

      <View style={{backgroundColor: 'white', elevation: 1, height: SIZES.height/1.5, marginBottom: 12}}>
        <View style={{alignItems: 'center', margin: 20}}>
          <Text style={{color: 'black', fontFamily: FONTS.body2, fontSize: SIZES.h2}}>Dressing en vitrine</Text>
        </View>
      
          {
            d1.map((it, index) =>
            <FlatList
                data={it.products}
                renderItem={({item}) =><ActuDressingProducts key={index} item={item}/> }
            />
            
 
      
          )}
   
      </View>
        
    
      )
  }




  return (
    <ScrollView style={{backgroundColor: 'lightgray'}}>
      <Text>Fil d'actualit??</Text>
  
    {data.map((it,index) =>it)}
 
        
      
     
      
    </ScrollView>
  )
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      backgroundColor: "white",
      marginBottom: 10  // if you want to fill rows left to right
    },
    item: {
      width: '50%' // is 50% of container width
    } , title: {
      fontSize: SIZES.h1,
      fontFamily: FONTS.flip,
      color: "red"
    },
  })

export default ProductsContainer