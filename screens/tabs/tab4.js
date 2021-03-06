import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import { Ionicons,Fontisto } from '@expo/vector-icons';


export default class tab4 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}> {this.props.route.params.title} </Text>
                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.push('Analysis')}>
                    <Fontisto name="test-tube" size={35} color={'white'} />
                    <Ionicons style={{ position: 'absolute',left:'-45%'}} name="md-add" size={29} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    addBtn: {
        width: 70,
        height: 70,
        borderColor:'powderblue',
        borderWidth: 2,
        borderRadius: 50,
        flexDirection: 'row',
        position: 'absolute',
        bottom: 20,
        right: 13,
        backgroundColor: '#28696d',
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:25,
        fontWeight:'bold',
        marginTop:10,
    }
});
