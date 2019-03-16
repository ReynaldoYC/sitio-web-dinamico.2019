import firebase from 'firebase/app'

const config = {
    apiKey: "AIzaSyCnNOZxIU6H6j4_CiU0xLd5JW68ulnXsR8",
    authDomain: "edproyect-c2892.firebaseapp.com",
    databaseURL: "https://edproyect-c2892.firebaseio.com",
    projectId: "edproyect-c2892",
    storageBucket: "edproyect-c2892.appspot.com",
    messagingSenderId: "302633112624"
}
const init = () => firebase.initializeApp(config)

init()