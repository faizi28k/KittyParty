import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TextInput, Button } from 'react-native';
import {  FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View
            style={{
            height: '60%',
            width: '99%',
            alignSelf: 'center',
            marginTop: 5,
            borderRadius: 40,
            backgroundColor: '#55b9f3',
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
            shadowOpacity: 'black',
            shadowOffset: {
            width: 50,
            height: 50,
            },
            elevation: 6,
            }}>
                <View style={styles.fields}>
                    <View style={styles.TextBox}>
                    <FontAwesome5 style={{marginLeft: 20}} name="user-tag" size={24} color="#55b9f3" />
                      <TextInput placeholder="User Name" placeholderTextColor={'black'} style={{ marginLeft: 10, justifyContent: 'center', width: '75%', fontSize: 20}} />
                    </View>
                </View>
                <View style={styles.fields}>
                    <View style={styles.TextBox}>
                    <FontAwesome style={{marginLeft: 20}} name="mobile-phone" size={35} color="#55b9f3" />
                      <TextInput placeholder="Contact Number" placeholderTextColor={'black'} style={{ marginLeft: 10, justifyContent: 'center', width: '75%', fontSize: 20}} />
                    </View>
                </View>
                <TouchableOpacity>
                    <View style={styles.btnStyle}>
                        <Text style={{marginLeft: 40, fontSize: 25, color: '#55b9f3', fontWeight: 'bold'}}>Create Account</Text>
                    </View>
                </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#c7cbd1',
    },
    TextBox: {
      backgroundColor: '#c7cbd1',
      borderRadius: 20,
      width: 260,
      height: 40,
      alignSelf: 'center',
      alignItems: 'center',
      fontSize: 25,
      flexDirection: 'row',
      marginTop: 20,
    },
    btnStyle: {
      backgroundColor: '#c7cbd1',
      borderRadius: 20,
      width: 220,
      height: 45,
      alignSelf: 'center',
      alignItems: 'center',
      fontSize: 25,
      flexDirection: 'row',
      marginTop: 25,
    },
    fields: {
      alignItems: 'center',
    },
  });
  