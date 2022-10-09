import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { Text, View } from "react-native";


  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Authorization status:", authStatus);
      await getFcmToken();
    }
  }

  const getFcmToken = async () => {
    let fcmToken = await AsyncStorage.getItem("fcmToken");
    console.log("Old Fcm Token:", fcmToken);
    if (!fcmToken) {
      try {
        const fcmToken = await messaging().getToken();
        if (fcmToken) {
          console.log("New generated fcmToken:", fcmToken);
          await AsyncStorage.setItem("fcmToken", fcmToken);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const notificationServices = () => {
    messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });
    messaging().onMessage(async remoteMessage => {
      console.log('Notification in foreground:' ,remoteMessage);
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification caused app to open from quit state:',
            remoteMessage.notification,
          );
        }
      });
  }

  export {requestUserPermission , notificationServices};
