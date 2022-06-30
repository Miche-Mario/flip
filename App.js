import React from 'react'
import HomeContainer from './Screens/Home/HomeContainer'
import { View, Text, FlatList, SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';

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
  ];
        
   
  const Supervisors = [
    {
      belongsToPruduct: 1,
      name: 'SuperVisor 1' 
    },
    {
      belongsToPruduct: 3,
      name: 'SuperVisor 2' 
    },
    {
      belongsToPruduct: 2,
      name: 'SuperVisor 3' 
    },
    {
      belongsToPruduct: 4,
      name: 'SuperVisor 4' 
    }
  ];
  const perChunk = 2 // items per chunk    



const pro = Products.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])

const perChunkk = 1 // items per chunk

const boo = Supervisors.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunkk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)

  return resultArray
}, [])





  
  return (

    <View>
      <HomeContainer/>
    </View>
  )
}

export default App