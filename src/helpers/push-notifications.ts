/*
* As mentioned on the readme, I like to abstract libraries.
* If I ever need to replace OneSignal with another service,
* I just need to come here and update this file. The rest of the App
* will continue working my exposed methods.
*/
import OneSignal from 'react-native-onesignal';
import {ONESIGNAL_APP_ID} from '@env';

export function init(user) {
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(ONESIGNAL_APP_ID);
  OneSignal.promptForPushNotificationsWithUserResponse(accepted => {
    if (accepted) {
      OneSignal.setExternalUserId(user?.uuid);
    }
  });
}

export function onNotificationReceivedHandler(callback) {
  OneSignal.setNotificationWillShowInForegroundHandler(callback);
}

export function onNotificationOpenedHandler(callback) {
  OneSignal.setNotificationOpenedHandler(callback);
}

export async function getDeviceState() {
  return OneSignal.getDeviceState();
}

export function disablePushes(disable) {
  OneSignal.disablePush(disable);
}