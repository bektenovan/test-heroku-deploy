import fire from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/app';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAM9cYw-7e48HE_Sd60Wzw4soipePTBcf4",
    authDomain: "react-fire-auth-a14e3.firebaseapp.com",
    projectId: "react-fire-auth-a14e3",
    storageBucket: "react-fire-auth-a14e3.appspot.com",
    messagingSenderId: "952340623279",
    appId: "1:952340623279:web:ecad6e1e1a22645c99095a"
  };

  export default fire.initializeApp(firebaseConfig);
  