import React from 'react';
import { View, Text, Modal, TextInput, Alert, TouchableOpacity } from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Counter from "react-native-counters";

export default class NotificationCardStyle1 extends React.Component{

    constructor(props){
        super(props);
        this.state={
            check_modal: false,
          }
    }

    onChange(number, type) {
        console.log(number, type) // 1, + or -

      }

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
                            height: 110,
                            // ...include most of View/Layout styles
                        }}
                        >
                            <View>
                                <View style={{ marginLeft: '5%', marginTop: '3%'}}>
                                    <Text style={{ fontSize: 18, fontStyle: 'italic', fontWeight: '500'}}>Notification Alert !!!</Text>
                                    <View>
                                        <Text style={{ fontSize: 20, color: 'blue'}}>User 1 Added You to this Committe</Text>
                                        <View style={{flexDirection: 'row', width: '100%', marginTop: '2%' }}>
                                            <View style={{ width: '50%', height: '100%'}}>
                                                <TouchableOpacity style={{ marginLeft: '30%', marginTop: '3%', backgroundColor: '#55b9f3',borderRadius: 20, height: '55%', width: '70%'}}
                                                onPress={() => this.setState({check_modal: true})}>
                                                    <Text
                                                    style={{ alignSelf: 'center', alignItems: 'center', marginTop: '3%', fontSize: 20, fontWeight: 'bold', color: '#e0e5ec'}}
                                                    >
                                                    Accept</Text>
                                                </TouchableOpacity>
                                                <Modal visible={this.state.check_modal} transparent={true}>
                                                    <View style={{backgroundColor: '#e0e5ec', borderColor: '#55b9f3', borderWidth: 3, marginTop: '40%', height: '25%', width: '80%', alignSelf: 'flex-end', marginRight: '10%', borderRadius: 15}}>
                                                        <View style={{ alignItems: 'center', alignSelf: 'center'}}>
                                                            <TouchableOpacity onPress={() => this.setState({check_modal: false})} style={{ alignSelf: 'flex-end', marginTop: '1%'}} >
                                                                <AntDesign name="close" size={24} color="red" />
                                                            </TouchableOpacity>
                                                            <Text style={{ marginLeft: '5%', fontSize: 20, color: '#55b9f3', fontWeight: 'bold'}}
                                                            >Number of Committees You Own</Text>
                                                        </View>
                                                        <View style={{ alignSelf: 'center', alignItems: 'center', marginTop: '2%'}}>
                                                            <Counter start={1} onChange={this.onChange.bind(this)} />
                                                        </View>
                                                        <View style={{ width: '85%', alignItems: 'center', alignSelf: 'center', marginTop: '2%', }}>
                                                            <TouchableOpacity style={{ borderRadius: 50,  borderColor: 'red', borderWidth: 2, height: '52%', width: '18%', alignItems: 'center'}}>
                                                                <MaterialCommunityIcons name="checkbox-marked-circle" size={32} color="#55b9f3" />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </Modal>
                                            </View>
                                            <View style={{ width: '50%', height: '100%'}}>
                                                <TouchableOpacity style={{ marginLeft: '10%', marginTop: '3%', borderColor: '#55b9f3', borderWidth: 2, borderRadius: 20, height: '58%', width: '70%'}}>
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