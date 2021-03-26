import React from 'react';
import { View, Text } from 'react-native';

export default class ComDetail extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const {item}=this.props.route.params;
        return(
            <View style={{ height: '100%', width: '100%'}}>
                <View style={{ flexDirection: 'row', backgroundColor: '#55b9f3', width: '100%', height: '15%', alignSelf: 'center' }}>
                    <View style={{ marginTop: 10}}>
                        <Text style={{ fontSize: 20, marginLeft: 12, marginRight: 10 }}>Committe Name</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
                            {/* {this.props.c_name} */}
                            {item.c_name}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 20}}>
                        <Text style={{ fontSize: 20, marginLeft: 12, marginRight: 10 }}> Duration</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
                            {item.duration}
                        </Text>
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 20}}>
                        <Text style={{ fontSize: 20, marginLeft: 12, marginRight: 10 }}>Type</Text>
                        <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>
                            {item.c_type}
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 25, padding: 15 }}>Members: </Text>
                    <Text>{item.members_info}</Text>
                </View>
            </View>
        )
    }
}