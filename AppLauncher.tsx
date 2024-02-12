//Tabs
import HomeScreen from './src/Home';
import PageOneScreen from './src/PageOne';
import PageTwoScreen from './src/PageTwo';
import PageThreeScreen from './src/PageThree';
import PageFourScreen from './src/PageFour';

//Icons
import HomeIcon from './icons/HomeIcon';
import PageOneIcon from './icons/PageOneIcon';
import PageTwoIcon from './icons/PageTwoIcon';
import PageThreeIcon from './icons/PageThreeIcon';
import PageFourIcon from './icons/PageFourIcon';

//React
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type RootStackParams = {
  HomeStack:undefined;
  PageOneStack:undefined;
  PageTwoStack:undefined;
  PageThreeStack:undefined;
  PageFourStack:undefined;
};
const RootStack = createBottomTabNavigator<RootStackParams>();



//Tab Nav Stack Def For Home
export type HomeStackParams = {
  Home: undefined;
  Homes: {
    name: string;
  };
};
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const HomeScreenStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={{
      headerShown: false,
    }}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
    </HomeStack.Navigator>
  );
};
//End of Tab Nav Stack Def For Home

//Tab Nav Stack Def For PageOne
export type PageOneStackParams = {
  PageOne: undefined;
  PageOnes: {
    name: string;
  };
};
const PageOneStack = createNativeStackNavigator<PageOneStackParams>();
const PageOneScreenStack = () => {
  return (
    <PageOneStack.Navigator initialRouteName="PageOne" screenOptions={{
      headerShown: false,
    }}>
      <PageOneStack.Screen name="PageOne" component={PageOneScreen} />
    </PageOneStack.Navigator>
  );
};
//End of Tab Nav Stack Def For PageOne

//Tab Nav Stack Def For PageTwo
export type PageTwoStackParams = {
  PageTwo: undefined;
  PageTwos: {
    name: string;
  };
};
const PageTwoStack = createNativeStackNavigator<PageTwoStackParams>();
const PageTwoScreenStack = () => {
  return (
    <PageTwoStack.Navigator initialRouteName="PageTwo" screenOptions={{
      headerShown: false,
    }}>
      <PageTwoStack.Screen name="PageTwo" component={PageTwoScreen} />
    </PageTwoStack.Navigator>
  );
};
//End of Tab Nav Stack Def For PageTwo

//Tab Nav Stack Def For PageThree
export type PageThreeStackParams = {
  PageThree: undefined;
  PageThrees: {
    name: string;
  };
};
const PageThreeStack = createNativeStackNavigator<PageThreeStackParams>();
const PageThreeScreenStack = () => {
  return (
    <PageThreeStack.Navigator initialRouteName="PageThree" screenOptions={{
      headerShown: false,
    }}>
      <PageThreeStack.Screen name="PageThree" component={PageThreeScreen} />
    </PageThreeStack.Navigator>
  );
};
//End of Tab Nav Stack Def For PageThree

//Tab Nav Stack Def For PageFour
export type PageFourStackParams = {
  PageFour: undefined;
  PageFours: {
    name: string;
  };
};
const PageFourStack = createNativeStackNavigator<PageFourStackParams>();
const PageFourScreenStack = () => {
  return (
    <PageFourStack.Navigator initialRouteName="PageFour" screenOptions={{
      headerShown: false,
    }}>
      <PageFourStack.Screen name="PageFour" component={PageFourScreen} />
    </PageFourStack.Navigator>
  );
};
//End of Tab Nav Stack Def For PageFour

function App(): React.JSX.Element {
  const NavigationControllerTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'black',
      
    },
  };

  return (
    <NavigationContainer theme={NavigationControllerTheme}>
      <RootStack.Navigator initialRouteName="HomeStack" screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor:'#FFFFFF',
        tabBarInactiveTintColor:'#727272',
        tabBarStyle: {backgroundColor:'#141414'},
        tabBarShowLabel:false
      })}>
        <RootStack.Screen name="HomeStack" component={HomeScreenStack} options={{
          tabBarIcon: ({ color, size }) => <HomeIcon color={color} size={size} />,
        }} />
        <RootStack.Screen name="PageOneStack" component={PageOneScreenStack} options={{
          tabBarIcon: ({ color, size }) => <PageOneIcon color={color} size={size} />,
        }} />
        <RootStack.Screen name="PageTwoStack" component={PageTwoScreenStack} options={{
          tabBarIcon: ({ color, size }) => <PageTwoIcon color={color} size={size} />,
        }} />
        <RootStack.Screen name="PageThreeStack" component={PageThreeScreenStack} options={{
          tabBarIcon: ({ color, size }) => <PageThreeIcon color={color} size={size} />,
        }} />
        <RootStack.Screen name="PageFourStack" component={PageFourScreenStack} options={{
          tabBarIcon: ({ color, size }) => <PageFourIcon color={color} size={size} />,
        }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;