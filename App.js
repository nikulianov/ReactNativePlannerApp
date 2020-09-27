import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  let [idReady,setIsReady] = useState(false)
  if(!idReady){
    return <AppLoading
      onFinish={()=>setIsReady(true)}
      onError={(e)=>console.log(e)}
      startAsync={bootstrap}
    />
  }
  return <AppNavigation/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
