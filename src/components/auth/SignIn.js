import React, { Component } from "react";
import {
  View, Text, TextInput,
  TouchableOpacity,
  Platform, StyleSheet
} from "react-native";

class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };

  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.view}>
        <Text style={styles.header}>Please Sign In</Text>

        <Text>Email:</Text>
        <TextInput value={email}
                   onChangeText={this.setEmail}
                   keyboardType='email-address'
                   style={styles.input}/>

        <Text>Password:</Text>
        <TextInput value={password}
                   onChangeText={this.setPassword}
                   style={styles.input}
                   secureTextEntry/>
        <TouchableOpacity onPress={this.signIn}>
          <Text>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }

  signIn = () => {
    console.log("-----", "signIn", this.state);
  };

  setPassword = password => this.setState({ password });
  setEmail = email => this.setState({ email });
}

const styles = StyleSheet.create({
  view:{
    // borderWidth: 2,
    // borderColor: '#f00',
    padding: 20
  },
  header: {
    fontSize: 20,
    fontWeight: "bold"
  },
  input: {
    ...Platform.select({
      ios: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      },
      android: {
        borderBottomColor: "#ccc",
        borderBottomWidth: 1
      }
    })
  }
});

export default SignIn;