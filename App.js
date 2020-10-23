import React,{useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'
import store from './src/store'
import { Provider } from 'react-redux'

export default function App() {
  let [idReady,setIsReady] = useState(false)
  if(!idReady){
    return <AppLoading
      onFinish={()=>setIsReady(true)}
      onError={(e)=>console.log(e)}
      startAsync={bootstrap}
    />
  }
  return(
  <Provider store={store}>
    <AppNavigation/>
  </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
