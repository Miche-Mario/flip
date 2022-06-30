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



<<<<<<< HEAD
const pro = Products.reduce((resultArray, item, index) => { 
=======
const result = Products.reduce((resultArray, item, index) => { 
>>>>>>> 887e619a801084241e68d3d8aec90d305bb52fc5
  const chunkIndex = Math.floor(index/perChunk)

  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [] // start a new chunk
  }

  resultArray[chunkIndex].push(item)
<<<<<<< HEAD

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




=======
>>>>>>> 887e619a801084241e68d3d8aec90d305bb52fc5

  return resultArray
}, [])
console.log(pr)

const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = Products.map(sweetItem => {
    return sweetItem * 2
})

console.log(sweeterArray)
  
const pr = result.map((item)=>  {return item})
  
  return (

    <View>
<<<<<<< HEAD
      <HomeContainer/>
=======
      <FlatList
        data={pr}
        
        renderItem = {({ item }) => {
          
          return (
            <View>
              <Text >{item.name}</Text>
                <View >
                  {
                    Supervisors.map((supervisor) => <Text key={Math.random()} >{supervisor.name}</Text>)
                  }
                </View>
            </View>
          )
        }}
      />
>>>>>>> 887e619a801084241e68d3d8aec90d305bb52fc5
    </View>
  )
}

export default App