import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';

export default class NotificationCardStyle2 extends React.Component{

    render(){
        return(
            <View>
                <ScrollView>
                    <View style={{ alignSelf: 'center', alignItems: 'center', width: '95%', marginTop: '5%'}}>
                        <Shadow
                        style={{
                            shadowOffset: {width: 10, height: 10},
                            shadowOpacity: 1,
                            shadowColor: "black",
                            shadowRadius: 20,
                            borderRadius: 20,
                            backgroundColor: '#e0e5ec',
                            width: 345,
                            height: 200,
                            // ...include most of View/Layout styles
                        }}
                        >
                            <View>
                                <View style={{ marginLeft: '5%', marginTop: '3%'}}>
                                    <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: '500'}}>Notification Alert !!!</Text>
                                    <View>
                                        <Text style={{ fontSize: 20, color: 'blue'}}>Bidding Started For:</Text>
                                        <View>
                                            <Text style={{ fontSize: 22, color: '#55b9f3', fontWeight: 'bold'}}>My Savings</Text>
                                        </View>
                                        <View style={{ alignSelf: 'center', alignItems: 'center', backgroundColor: '#55b9f3', width: '60%', borderRadius: 25, height: '22%', marginTop: '2%'}}>
                                            <TextInput style={{ marginTop: '2%', fontSize: 20, fontWeight: '900'}} keyboardType={"number-pad"} placeholder="Enter Bid Amount" placeholderTextColor= {'white'} />
                                        </View>
                                        <View style={{flexDirection: 'row', width: '100%', marginTop: '2%' }}>
                                            <View style={{ width: '50%', height: '75%'}}>
                                                <TouchableOpacity style={{ marginLeft: '30%', marginTop: '3%', backgroundColor: '#55b9f3',borderRadius: 20, height: '55%', width: '70%'}}>
                                                    <Text
                                                    style={{ alignSelf: 'center', alignItems: 'center', marginTop: '3%', fontSize: 20, fontWeight: 'bold', color: '#e0e5ec'}}
                                                    >
                                                    Bid</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ width: '50%', height: '100%'}}>
                                                <TouchableOpacity style={{ marginLeft: '10%', marginTop: '3%', borderColor: '#55b9f3', borderWidth: 2, borderRadius: 20, height: '35%', width: '70%'}}>
                                                    <Text
                                                    style={{ alignSelf: 'center', alignItems: 'center', fontSize: 20, fontWeight: 'bold', color: 'red'}}
                                                    >Reject</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </Shadow>
                        </View>
                        {/* .................... */}
                        {/* ------------------------------ */}
                </ScrollView>
            </View>
        )
    }
}