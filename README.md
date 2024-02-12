This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.
> This isntruction is only for iOS and Mac users. Android users, check above link to setup or run the code.

## Step 1: 

sync the project by running this command:
- git clone https://github.com/subbir/HomeAutomation.git
  
Navigate to the Folder name HomeAutomation

run this command to download react native libs and node module dependencies:
- npm install @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack react-native-safe-area-context --save


### For iOS

Navigate to ios folder
run this command: 
- pod install
  
after the pod is installed, you are ready to launch the app.

Run this command to launch the app:
npm start --clean-cache

Wait for a while if you already have launched an iOS simulator. If not, then open a new terminal window and run this command:
npm run ios
or if you want to run the code for a specific simulator and SDK version run the following command:
- npm run ios -- --simulator="iPhone 15 Pro Max (17.2)"
here iPhone 15 Pro Max is the device type and 17.2 is the SDK version


If everything is set up _correctly_, you should see your new app running in your _iOS Simulator_ shortly provided you have set up your simulator correctly.

This is one way to run your app — you can also run it directly from within Xcode respectively.


## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### OverView of the Project
