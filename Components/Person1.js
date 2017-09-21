import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
export default class Person1  extends PureComponent {
  
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