import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons,FontAwesome } from '@expo/vector-icons';


export default class tab1 extends Component {
    render() {
        console.log(this.props);

        return (
            <View style={styles.container}>

                <Text style={styles.title}> {this.props.route.params.title} </Text>
                <View style={styles.addBtn}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Appotmnt')}>
                    <FontAwesome style={{paddingLeft:10}} name='calendar' size={38} color='white' />
                    <Ionicons style={{ position: 'absolute',left:'-20%'}} name="md-add" size={29} color="white" />
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
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10,
    }
});

