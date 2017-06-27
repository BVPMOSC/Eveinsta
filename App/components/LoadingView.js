//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
class LoadingView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.logo}>Eveinsta</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
    },
    logo:{
        fontSize: 55,
        fontFamily:'Roboto',
        fontWeight:'bold',
        color:'black'
    }
});

//make this component available to the app
export default LoadingView;
