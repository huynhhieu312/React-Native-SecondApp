import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
let number = 10;
console.log('Number ='  + number );
console.log({name : 'a',age : 1});
// loại component:
//1 stateless component
const welcomeText =<Text>Phát cá tra</Text>
//Stateful component ;
class Welcome extends Component {
  render(){
      return(
        <Text>Welcome {this.props.name} </Text> 
      )
  }
}
//event property
class Person  extends Component {
  render(){
    return (
      <TouchableOpacity>
          <View>
            <Text>Name : {this.props.name }, liked: { this.props.liked }</Text>
         </View>
      </TouchableOpacity>
    )
  }
}
export default class SecondApp extends Component {
  render() {
    return (


      <View style={styles.container}> 
        {welcomeText}
        <Welcome name="ho chi minh City"  />
         <Person name="Khang" liked={ 100 }  />
         <Person name="Hieu" liked={ 50 }  />
         <Person name="Hung" liked={ 30 }  />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SecondApp', () => SecondApp);
