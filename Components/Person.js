import React, { Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
//event property
export default class Person  extends Component {
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
  

  //pure compornent 
  // pure comporent 1 dạng sử lý thông minh khi trước khi nội dung được render lại thì nó sẽ kiểm trả 
  // nếu ko thay doi no' sẽ giữ nguyên và không làm gì hết
  const styles = StyleSheet.create({
    //tạo class
    personTexColor:{
      color:'#35c'
    },
    personBgColor:{
      color:"#fff",
      backgroundColor:"#090"
    }
   });
   