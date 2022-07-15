import { Icon } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { View, Text, Image,  StyleSheet, TextInput, TouchableWithoutFeedback, ScrollView, FlatList } from 'react-native'
import { COLORS, FONTS, SIZES } from '../Constants'
import Swiper from 'react-native-swiper/src'

const Header = () => {

  const [bannerData, setBannerData] = useState([])
  const rubrique = [
    {image: require('../assets/nouveaute.png'), label: "Les nouveautés"},
      {image: require('../assets/special.png'), label: "Les bonnes affaires"},
      {image: require('../assets/bonneaffaire.png'), label: "Spécial Afrique"},
  ]

  const category = [
    {image: require('../assets/nouveaute.png'), label: "Les nouveautés"},
      {image: require('../assets/special.png'), label: "Les bonnes affaires"},
      {image: require('../assets/bonneaffaire.png'), label: "Spécial Afrique"},
      {image: require('../assets/bonneaffaire.png'), label: "Spécial Afrique"},
  ]

  useEffect(() =>  {
    setBannerData([
      require('../assets/slide2.png'),
      require('../assets/slide1.png'),
      require('../assets/slide3.png'),
      require('../assets/slide4.png'),
    ])
   
    return () => {
      setBannerData([])
    }
  }, [])
  return (
    <ScrollView >
      <View style={{flex: 1}}>

   
      <Text style={styles.title}>Bienvenue sur Flip</Text>

      <TouchableWithoutFeedback>
        <View style={styles.SearchArea} >
          <Icon
            style={styles.searchIcon}
            type='material'
            name='search'
            color={COLORS.grey3}
            size={32}
          />
          <Text style={{ fontSize: SIZES.h3, fontFamily: FONTS.body2, color: COLORS.grey2, marginLeft: 6 }}>je cherche un article, un membre</Text>
        </View>
      </TouchableWithoutFeedback>
 
    <View style={styles.swiper}>
        <Swiper
          showsButtons={false}
          autoplay={true}
          autoplayTimeout={4}
          style={{height: SIZES.height /5}}
        >
          {bannerData.map((item) => {
            return(
              <Image
                key={item}
                resizeMode="contain"
                source={ item}
                style={styles.imageBanner}
              />
            )
          })}
        </Swiper>
      </View>
      

      <View style={styles.rubrique}>
        {rubrique.map((item, index) =>  {
          return (
          <View key={Math.random()} style={{flex: 1, flexDirection: 'column'}}>
          <Image
            style={styles.rubriqueSource}
            source={item.image}
          />
          <View style={styles.rubriqueText}>
          <Text style={styles.rubriqueTextText}>{item.label}</Text>
          </View>

          </View>
       
       )})}
       
      </View>
    </View>

    <View style={styles.category}>
      <View style={styles.categoryTitle}>
        <Text style={styles.categoryTitleTitle}>Je recherche par catégorie</Text>
      </View>
        <FlatList
          data={category}
          horizontal
          renderItem={ ({item}) =>  
           (
          <View key={Math.random()} style={{flex: 1, flexDirection: 'column'}}>
          <Image
            style={styles.rubriqueSource}
            source={item.image}
          />
          <View style={styles.rubriqueText}>
          <Text style={styles.rubriqueTextText}>{item.label}</Text>
          </View>

          </View>
       
       )}
       />
       
      </View>
   
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  title: {
    fontSize: SIZES.h1,
    fontFamily: FONTS.flip,
    color: COLORS.primary,
    padding: 10
  },


  SearchArea: {
    marginTop: 10,
    width: SIZES.width - 20,
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey5,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },

  searchIcon: {
    fontSize: 24,
    padding: 5,

  },
  swiper: {
    width: SIZES.width,
    alignItems: "center",
    marginTop: 10,
  },
  imageBanner: {
    height: SIZES.height/5,
    width: SIZES.width - 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  rubrique: {
    flex: 1,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: SIZES.width - 20,
    marginHorizontal: 10,

  },
  rubriqueSource: {
    width: 120,
    borderRadius: 150 / 2,
    height: 120
  },
  rubriqueText: {
    alignItems: 'center',
    margin: 3,
    flex: 1
  },
  rubriqueTextText: {
    textAlign: 'center',
    fontSize: SIZES.h4,
    fontFamily: FONTS.flip,
    color: COLORS.primary,

  },
  category: {
    flex: 1,
    marginTop: 20,
    marginHorizontal: 10,

  },
  categoryTitle: {
    marginHorizontal: 10
  },
  categoryTitleTitle: {
    fontFamily: FONTS.flip2,
    fontSize: SIZES.h1,
    color: 'black'
  }
})
export default Header