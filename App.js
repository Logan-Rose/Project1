import React from 'react';
import { StyleSheet, Text, View, Button, Vibration } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

class App extends React.Component {
  constructor(props){
    super(props)
    this.start = [
      {min: 0, sec: 10},
      {min: 0, sec: 30}
    ]
    this.cycle = 0
    this.state = {
      time: {min: this.start[0].min, sec:this.start[0].sec}
    }
  }
  time(){
    if(this.state.time.sec < 10){
      return this.state.time.min + ":0" + this.state.time.sec
    }else{
      return this.state.time.min + ":" + this.state.time.sec
    }
  }
  picktime(){
    let x = showMode('time');
  }
  
  decrement(){
    if(this.state.time.sec === 0 && this.state.time.min === 0){
      clearInterval(this.timer)
      Vibration.vibrate(1500)
      this.count = this.count+1
      this.reset()
      this.countDown()
    }else if(this.state.time.sec === 0){
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
    clearInterval(this.timer)
    this.timer = setInterval(()=> this.decrement(), 1000 )
  }

  pause(){
    clearInterval(this.timer)
  }
  reset(){
    clearInterval(this.timer)
    if(this.cycle % 2 == 1){
      this.setState({time: {
        min: this.start[1].min,
        sec: this.start[1].sec
      }})
    }else {      
      this.setState({time: {
      min: this.start[0].min,
      sec: this.start[0].sec
      }})
    }
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style = {styles.timer}>{this.time()}</Text>
        <View style={styles.buttons}>
          <Button onPress= {() => this.countDown()} title="Play"/>
          <Button onPress= {() => this.pause()} title="Pause"/>
          <Button onPress= {() => this.reset()} title="Reset"/>
        </View>
        <View style={styles.setTimes}>
          <Button title="Set Work Time"/>
          <Button title="Set Break Time"/>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  timer:{
    fontSize:40
  },
  buttons:{
    flexDirection:'row'
  },
  setTimes:{
    padding:25
  }
});

export default App