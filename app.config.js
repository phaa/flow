import 'dotenv/config'

export default {
  "expo": {
    "name": "flow",
    "slug": "flow",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ],
    "android": {
      "package": "com.ifrn.flow",
      "versionCode": 1
    },
    "extra": {
      firebaseApiKey: process.env.FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.FIREBASE_APP_ID
    }
  }
}
