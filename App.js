import React from 'react'
import HomeContainer from './Screens/Home/HomeContainer'
import { View, Text, FlatList, SectionList } from 'react-native'

const App = () => {






  const Products = [
    {
      id: 1,
      name: 'Product 1'
    },
    {
      id: 2,
      name: 'Product 2'
    },
    {
      id: 3,
      name: 'Product 3'
    },
    {
      id: 4,
      name: 'Product 4'
    },
    {
      id: 5,
      name: 'Product 5'
    },
    {
      id: 6,
      name: 'Product 6'
    },
    {
      id: 7,
      name: 'Product 7'
    },
    {
      id: 8,
      name: 'Product 8'
    },
    {
      id: 9,
      name: 'Product 9'
    },

  ];

  const Boots = [
    {
      belongsToPruduct: 1,
      name: 'Boost 1'
    },
    {
      belongsToPruduct: 2,
      name: 'Boost 2'
    },
    {
      belongsToPruduct: 3,
      name: 'Boost 3'
    },
    {
      belongsToPruduct: 4,
      name: 'Boost 4'
    }
  ];
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
  var productss = [];
  var bootss = [];

  var i;
  for (i = 0; i < Products.length; i++) {
    let n = getRandomInt(1, 3)
    productss.push(Products.slice(i++, i + n))
  }

  for (i = 0; i < Boots.length; i++) {
    bootss.push(Boots.slice(i++,i+1))
  }
console.log(bootss)

  
  return (

    <View>

<SectionList
  sections={[ // heterogeneous rendering between sections
    {data: productss, key: Math.random(), renderItem: ({item}) =><View> {item.map((it) => {<Text>{it.name}</Text>})}</View>}
  ]}
/>
             
    </View>
  )
}

export default App