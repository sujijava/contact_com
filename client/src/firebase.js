import firebase from 'firebase/app'
import 'firebase/auth'

var app = firebase.initializeApp({
  apiKey: 'AIzaSyB62-TofAYhzpwESEJjjLIkwxq_thSnDZc',
  authDomain: 'ink-blot-tech-exer.firebaseapp.com',
  databaseURL: 'https://ink-blot-tech-exer-default-rtdb.firebaseio.com',
  projectId: 'ink-blot-tech-exer',
  storageBucket: 'ink-blot-tech-exer.appspot.com',
  messagingSenderId: '260119403014',
  appId: '1:260119403014:web:3fc08af28d5f0458890187',
})

export const auth = app.auth()
export default app
