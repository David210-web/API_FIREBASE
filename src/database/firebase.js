const { initializeApp } = require('firebase/app')
const { getFirestore } = require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyA40y-WL5YSSeY8tRcvwj-tDtp2U0knnqg",
  authDomain: "apirest-57d12.firebaseapp.com",
  projectId: "apirest-57d12",
  storageBucket: "apirest-57d12.appspot.com",
  messagingSenderId: "797078865642",
  appId: "1:797078865642:web:9ab2e84c6b82eaeac37993"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

module.exports = firestore