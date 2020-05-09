import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      time: {min:5, sec:20}
    }
  }
  time(){
    if(this.state.time.sec < 10){
      return this.state.time.min + ":0" + this.state.time.sec
    }else{
      return this.state.time.min + ":" + this.state.time.sec
    }
  }
  
  decrement(){
    if(this.state.time.sec === 0){
      this.setState({time: {
        min: this.state.time.min - 1, 
        sec: 59
      }})
    } else{
    this.setState({time: {
      min: this.state.time.min, 
      sec: this.state.time.sec -1
    }})}
  }

  countDown(){
    this.timer = setInterval(()=> this.decrement(), 1000 )
  }

  pause(){
    clearInterval(this.timer)
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style = {styles.timer}>{this.time()}</Text>
        <View style={styles.buttons}>
          <Button onPress= {() => this.countDown()} style = {styles.button} title="Play"/>
          <Button onPress= {() => this.pause()} style = {styles.button} title="Pause"/>
          <Button style = {styles.button} title="Reset"/>
        </View>
      </View>
    );
  }
}


class Timer{
  constructor(){
    this.min = 5
    this.sec = 0
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    fontSize:40
  },
  buttons:{
    backgroundColor: 'red',
    flexDirection:'row'
  },
  button :{

  }
});

export default App