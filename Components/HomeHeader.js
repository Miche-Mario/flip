import { Icon } from '@rneui/base'
import React, { useEffect, useState } from 'react'
import { View, Text, Image,  StyleSheet, TextInput, TouchableWithoutFeedback } from 'react-native'
import { COLORS, FONTS, SIZES } from '../Constants'
import Swiper from 'react-native-swiper/src'

const Header = () => {

  const [bannerData, setBannerData] = useState([])

  useEffect(() =>  {
    setBannerData([
      require('../assets/slide1.png'),
      require('../assets/slide2.png'),
      require('../assets/slide3.png'),
      require('../assets/slide4.png'),
    ])
    return () => {
      setBannerData([])
    }
  }, [])
  return (
    <View>

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

      <View>
        <Swiper
        showButtons={false}
          autoplay={true}
          autoplayTimeout={2}
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

    </View>
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
    width: "94%",
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.grey5,
    flexDirection: "row",
    alignItems: "center",
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

 
    borderRadius: 10,
    marginHorizontal: 20,
  },
})
export default Header