import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASlGp15z9vCJGonA_xBh8wdYh_Bys2-B4",
  authDomain: "hotstar-clone-e9407.firebaseapp.com",
  projectId: "hotstar-clone-e9407",
  storageBucket: "hotstar-clone-e9407.appspot.com",
  messagingSenderId: "43328769908",
  appId: "1:43328769908:web:9efd50b31ff68ad77f2621",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
