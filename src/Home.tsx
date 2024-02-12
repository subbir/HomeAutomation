import React from 'react';
import type {PropsWithChildren} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppLauncher';

import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Image,
  TouchableHighlight,
  Text,
  ScrollView
} from 'react-native';

type SectionProps = PropsWithChildren<{
  title: string,
  colorDec:string,
  fontSizeDec: number,
}>;

const switchBoard = [
  {
    stat:true,
    switchVersion:"Switch 1.1",
    switchLocation:"Living Room"
  },
  {
    stat:false,
    switchVersion:"Switch 1.2",
    switchLocation:"Living Room"
  },
  {
    stat:true,
    switchVersion:"Switch 1.3",
    switchLocation:"Living Room"
  },
  {
    stat:false,
    switchVersion:"Switch 1.4",
    switchLocation:"Living Room"
  },
  {
    stat:true,
    switchVersion:"Switch 2.1",
    switchLocation:"Living Room"
  },
  {
    stat:false,
    switchVersion:"Switch 2.2",
    switchLocation:"Living Room"
  },
  {
    stat:true,
    switchVersion:"Switch 2.4",
    switchLocation:"Living Room"
  },
  {
    stat:false,
    switchVersion:"Switch 2.5",
    switchLocation:"Living Room"
  }
  
];

function Section({children, title, colorDec, fontSizeDec}: SectionProps): React.JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[styles.sectionTitle, {color:colorDec, fontSize:fontSizeDec}]}>
        {title}
      </Text>
      {children}
    </View>
  );
}
type Props = NativeStackScreenProps<RootStackParams, 'HomeStack'>;
function HomeScreen(): React.JSX.Element {
    return (
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.infoContainer}>
          <View>
            <TouchableHighlight onPress={() => sheildfunction()}>
              <View style={{flex:1}}>
                <Image style={styles.image} source={require('../assets/sheild.png')} />
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.subContainer}>
            <TouchableHighlight onPress={() => globefunction()}>
                <View style={{flex:1}}>
                  <Image style={styles.image} source={require('../assets/globe.png')} />
                </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => notificationfunction()}>  
              <View style={{flex:1}}>
                <Image style={styles.image} source={require('../assets/notification.png')} />
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => calendarfunction()}>  
              <View style={{flex:1}}>
                <Image style={styles.image} source={require('../assets/calendar.png')} />
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View style={[styles.regularContainer, {marginTop:20, alignItems: 'center'}]}>
          <Image style={[styles.image, {height:20, width:20}]} source={require('../assets/greendot.png')} />
          <Section title="LATESTAPPTESTING" fontSizeDec={26} colorDec='#FFFFFF'/>
        </View>
        <View style={[styles.regularContainer, {marginTop:20, width:'100%'}]}>
          
          <View style={styles.subContainerColumn}>
            <Section title='Kūatpalli' fontSizeDec={18} colorDec='#FFFFFF'/>
            <Section title='22 ºC' fontSizeDec={50} colorDec='#FFFFFF'/>
            <View style={styles.regularContainer}>
              <Image style={[styles.image, {height:20, width:20}]} source={require('../assets/humidity.png')} />
              <Section title='94%' fontSizeDec={20} colorDec='#FFFFFF'/>
            </View>
          </View>
          
          <View style={[styles.subContainerColumn, {width:"40%", justifyContent:"center", alignContent:"center"}]}>
            <Image style={[styles.image, {height:110, width:62, alignSelf:"center"}]} source={require('../assets/clouds.png')} />
            <Section title='overcasts clouds' fontSizeDec={15} colorDec='#FFFFFF'/>
          </View>

        </View>

        <View style={[styles.subContainerColumn, {width:"100%"}]}>
          <View style={[styles.infoContainer, {marginTop:40, height:40, display:"flex", alignItems:"center"}]}>
            <Section title='Favorite scenes' fontSizeDec={18} colorDec='#FFFFFF'/>
            <TouchableHighlight onPress={() => addScenefunction()}>
                    <View style={{flex:1}}>
                      <Image style={styles.image} source={require('../assets/add.png')} />
                    </View>
            </TouchableHighlight>
          </View>
          <ScrollView style={[styles.regularContainer, {height:80}]}>

          </ScrollView>
        </View>

        <View style={[styles.subContainerColumn, {width:"100%"}]}>
          <View style={[styles.infoContainer, {marginTop:40, height:40, display:"flex", alignItems:"center"}]}>
            <Section title='Favorite devices' fontSizeDec={18} colorDec='#FFFFFF'/>
            <View style={[styles.subContainer, {width:"20%"}]}>
              <TouchableHighlight onPress={() => addGearhButtonfunction()}>
                      <View style={{flex:1}}>
                        <Image style={styles.image} source={require('../assets/gear.png')} />
                      </View>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => addSwitchButtonfunction()}>
                      <View style={{flex:1}}>
                        <Image style={styles.image} source={require('../assets/add.png')} />
                      </View>
              </TouchableHighlight>
            </View>
          </View>
          
            <View style={{flex: 1, flexDirection:'row', flexWrap:"wrap", justifyContent:"space-evenly"}}>
            {
              switchBoard.map((v, index) => (
                  <TouchableHighlight style={styles.switchMainContainerColumn} onPress={() => switchButtonfunction(index)}>
                    <View>
                        <View style={[styles.infoContainer, {paddingLeft:5, paddingRight:10}]}>
                          <Image style={[styles.image, {borderColor:"#272729", height:40, width:40}]} source={require('../assets/bulb.png')} />
                          <Section title={v.stat? "On": "Off"} fontSizeDec={20} colorDec='#FFFFFF' />
                        </View>
                        <View style={[styles.subContainerColumn, {paddingLeft:5, paddingRight:10, marginTop:13, height:"auto"}]}>
                          <Section title={v.switchVersion} fontSizeDec={15} colorDec='#FFFFFF'/>
                          <Section title={v.switchLocation} fontSizeDec={15} colorDec='#FFFFFF'/>
                        </View>
                    </View>
                  </TouchableHighlight>
                )
              )
            }
            </View>
          
        </View>
      </SafeAreaView>
    );
}

function sheildfunction() {
  //To Do For Sheild Button
  Alert.alert("Sheild Button Pressed!");
}

function globefunction() {
  //To Do For Globe Button
  Alert.alert("Globe Button Pressed!");
}

function calendarfunction() {
  //To Do For Notification Button
  Alert.alert("Calander Button Pressed!");
}

function notificationfunction() {
  //To Do For Notification Button
  Alert.alert("Notification Button Pressed!");
}

function addScenefunction() {
  //To Do For Add Scene Button
  Alert.alert("Add Scene Button Pressed!");
}

function addGearhButtonfunction() {
  //To Do For Add Scene Button
  Alert.alert("Gear Button Pressed!");
}

function addSwitchButtonfunction() {
  //To Do For Add Scene Button
  Alert.alert("Add Switch Button Pressed!");
}

function switchButtonfunction(index:number) {
  //To Do For Switch Button Press
  Alert.alert("Switch Button Pressed on Index: " + index);
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    marginLeft:15,
    marginRight:15
  },
  infoContainer: {
      marginRight:0,
      marginLeft:0,
      marginTop:10,
      width:'100%',
      flexDirection: "row",
      justifyContent: 'space-between',
      height:35,
    },
    sectionContainer: {
      marginTop: 0
    },
    sectionTitle: {
      color:'#FFFFFF',
      fontSize: 24,
      fontWeight: "600",
    },
    subContainer: {
      width:'30%',
      flexDirection: "row",
      justifyContent: 'space-between',
      height:35
    },
    subContainerColumn: {
      flexDirection: "column",
      justifyContent: 'space-between',
      height:100
    },
    image: {
      width: 30,
      height: 30,
      borderWidth: 1,
      resizeMode:"contain"
    },
    regularContainer: {
      marginRight:0,
      marginTop:10,
      width:'100%',
      flexDirection: "row"
    },
    switchMainContainerColumn: {
      width:110,
      height:100,
      marginLeft:5,
      marginTop:10,
      marginRight:10,
      flexDirection: "column",
      justifyContent: 'space-between',
      borderRadius:8,
      backgroundColor:"#272729",
    },
    switchContainer: {
      flexDirection: "row",
      justifyContent:"space-between",
      alignContent:"center"
    }
  });
  
  export default HomeScreen;