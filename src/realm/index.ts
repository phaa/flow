import Realm from 'realm';
// Returns the shared instance of the Realm app.
export function getRealmApp() {
   const appId = 'react-native-app-amqes'; // Set App ID here.
   const appConfig = {
     id: appId,
     timeout: 10000,
   };
  return new Realm.App(appConfig);
}