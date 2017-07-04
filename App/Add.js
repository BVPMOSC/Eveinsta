//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button,ToastAndroid } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Kohana } from 'react-native-textinput-effects';
import * as firebase from 'firebase';
import Config from './config';
var firebaseApp;
var itemRef;

  if (!firebase.apps.length) {
        firebase.initializeApp(Config);
  }

// create a component
class AddScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Ename: '', Edisp: '', EpAndt: '',
            EregistrationUrl: '', EphotoUrl: ''
        };
        this.PushTOFirebase = this.PushTOFirebase.bind(this);

    }




    static navigationOptions = {
        title: 'Add New Event',
    };
    PushTOFirebase() {
       firebase.database().ref('/events').push(this.state);
        this.setState({Ename: '', Edisp: '', EpAndt: '',
            EregistrationUrl: '', EphotoUrl: ''});
       ToastAndroid.show('Pushed To server!', ToastAndroid.SHORT);
    }

    render() {

        return (


            <View style={[styles.card2]}>
                <View style={{ flex: 1 }}>
                    <Kohana
                        value={this.state.Ename} onChangeText={(Ename) => this.setState({ Ename })}
                        style={{ backgroundColor: '#F8F8F8' }}
                        label={'Event Name'}
                        iconClass={FontAwesomeIcon}
                        iconName={'id-badge'}
                        iconColor={'#625864'}
                        labelStyle={{ color: '#292931' }}
                        inputStyle={{ color: '#292931' }}
                    />
                    <Kohana
                        value={this.state.Edisp} onChangeText={(Edisp) => this.setState({ Edisp })}
                        style={[styles.input, { backgroundColor: '#F8F8F8' }]}
                        label={'description'}
                        iconClass={FontAwesomeIcon}
                        iconName={'phone'}
                        iconColor={'#ddd'}
                        iconColor={'#625864'}
                        labelStyle={{ color: '#292931' }}
                        inputStyle={{ color: '#292931' }}
                    />
                    <Kohana
                        value={this.state.EpAndt} onChangeText={(EpAndt) => this.setState({ EpAndt })}
                        style={[styles.input, { backgroundColor: '#F8F8F8' }]}
                        label={'Place and Timmings'}
                        iconClass={FontAwesomeIcon}
                        iconName={'building'}
                        iconColor={'#ddd'}
                        iconColor={'#625864'}
                        labelStyle={{ color: '#292931' }}
                        inputStyle={{ color: '#292931' }}
                    />
                    <Kohana
                        value={this.state.EregistrationUrl} onChangeText={(EregistrationUrl) => this.setState({ EregistrationUrl })}
                        style={[styles.input, { backgroundColor: '#F8F8F8' }]}
                        label={'Url for registration'}
                        iconClass={FontAwesomeIcon}
                        iconName={'link'}
                        iconColor={'#ddd'}
                        iconColor={'#625864'}
                        labelStyle={{ color: '#292931' }}
                        inputStyle={{ color: '#292931' }}
                    />
                    <Kohana
                        value={this.state.EphotoUrl} onChangeText={(EphotoUrl) => this.setState({ EphotoUrl })}
                        style={[styles.input, { backgroundColor: '#F8F8F8' }]}
                        label={'Photo url'}
                        iconClass={FontAwesomeIcon}
                        iconName={'link'}
                        iconColor={'#ddd'}
                        iconColor={'#625864'}
                        labelStyle={{ color: '#292931' }}
                        inputStyle={{ color: '#292931' }}
                    />
                </View>

                <Button
                    onPress={this.PushTOFirebase}
                    title="Add"
                    color="#841584"
                    accessibilityLabel="send notification"
                />
            </View>


        );
    }
}



// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 24,
        backgroundColor: 'white',
    },
    content: {
        // not cool but good enough to make all inputs visible when keyboard is active
        paddingBottom: 300,
    },
    card1: {
        paddingVertical: 16,
    },
    card2: {
        flex: 1,
        padding: 16,
        backgroundColor: '#423142'
    },
    input: {
        marginTop: 4,
    },
    title: {
        paddingBottom: 16,
        textAlign: 'center',
        color: '#F8F8F8',
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.8,
    },
});

//make this component available to the app
export default AddScreen;
