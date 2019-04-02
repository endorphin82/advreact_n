import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import firebase from "firebase";
import {
  View, Text, TextInput,
  TouchableOpacity,
  Platform, StyleSheet
} from "react-native";

@inject("user")
@observer
class SignIn extends Component {
  render() {
    const { email, password } = this.props.user;
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
    const { user } = this.props;

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then((userEntity) => {
        user.user = userEntity;
        this.props.navigate("eventList");
      });
    console.log("-----", "signIn", this.state);
  };

  setPassword = password => this.props.user.password = password;
  setEmail = email => this.props.user.email = email;
}

const styles = StyleSheet.create({
  view: {
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