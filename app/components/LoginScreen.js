import React,{Component} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet
} from 'react-native';

class LoginScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }



  render() {
    const{navigation}=this.props;
    return(

    <View   style={{
      flex: 1,
      alignSelf: 'stretch',
      width: undefined,
      height: undefined
    }}>
    <Text style={styles.text}>اسم المستخدم أو الايميل</Text>
    <TextInput
       style={{height: 40, borderColor: 'gray', borderWidth: 1}}
       onChangeText={(text) => this.setState({text})}
       value={this.state.email}
     />
     <Text style={styles.text}>كلمة المرور</Text>
     <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.password}
      />
    <Button title='تسجيل دخول' onPress={()=>navigation.navigate('LaunchApp')}></Button>
    </View>

    );
  }

}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'thesans'
  }
});

export default LoginScreen;
