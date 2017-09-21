import React, { Component,PureComponent } from 'react';
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
        <Text style={ styles.personTexColor }  >Welcome {this.props.name} </Text> 
      )
  }
}
//event property
class Person  extends Component {
  // gọi hàm dựng contructor()
  constructor(props){
    super(props);
    this.state = props;
    //state va props ;
    //avoid uppdating state and props directly;
    //state có setState of mind  được thay đổi dữ liệu 
  }
//Tạo function
  onTouch(){
       this.setState({liked: this.state.liked + 1 });
  }

  render(){
     console.log('re-render');
    return (
        
      <TouchableOpacity onPress={this.onTouch.bind(this)}>
          <View>
     
           <Text style={[ styles.personTexColor , styles.personBgColor,{...this.props.personstyle} ]}>Name : {this.state.name }, liked: { this.state.liked }</Text>
         </View>
      </TouchableOpacity>
    )
  }
}

class Person1  extends PureComponent {
  
  constructor(props){
    super(props);
    this.state = props;
     }

  onTouch(){
       this.setState({liked: this.state.liked + 1 });
  }
  shouldComponentUpdate(){
    return true;
  }
  render(){
     console.log('re-render');
    return (
        //thay đổi style = props;
      <TouchableOpacity onPress={this.onTouch.bind(this)}>
          <View>
            
           <Text style={[styles.personTexColor,{color:this.props.textcolor} ]} >Name : {this.state.name }, liked: { this.state.liked }</Text>
        
         </View>
      </TouchableOpacity>
    )
  }
}
//pure compornent 
// pure comporent 1 dạng sử lý thông minh khi trước khi nội dung được render lại thì nó sẽ kiểm trả 
// nếu ko thay doi no' sẽ giữ nguyên và không làm gì hết

export default class SecondApp extends Component {
  render() {
    return (


      <View style={styles.container}> 
        {welcomeText}
        <Welcome name="ho chi minh City"  />
         <Person name="Khang" liked={ 100 }  />
         <Person name="Hieu" liked={ 50 } personstyle ={{color:'#7e1f8f'}}  />
         <Person name="Hung" liked={ 30 } personstyle ={{color:'#7e1f8f'}}  />
         
          <Person1 name="per1" liked={ 30 }  textcolor ="red" />
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
 //tạo class
 personTexColor:{
   color:'#35c'
 },
 personBgColor:{
   color:"#fff",
   backgroundColor:"#090"
 },
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
