import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParams} from '../AppLauncher';

type Props = NativeStackScreenProps<RootStackParams, 'PageFourStack'>;

const PageFourScreen = () => {
    return (
      //To Be Implemented
      <View style={styles.container}>
          <Text style={styles.sectionTitle}>"Page Four Screen"</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      marginRight:"auto",
      marginLeft:"auto",
      marginBottom:"auto",
      marginTop:"auto"
    },
    sectionTitle: {
      fontSize: 16,
      color:'#FFFFFF'
    },
  });
  
  export default PageFourScreen;