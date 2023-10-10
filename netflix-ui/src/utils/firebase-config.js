import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDLajx3xi4f7BivKBO4hCTitcx1KDb3CJs",
  authDomain: "react-netflix-clone-fdebe.firebaseapp.com",
  projectId: "react-netflix-clone-fdebe",
  storageBucket: "react-netflix-clone-fdebe.appspot.com",
  messagingSenderId: "169071140710",
  appId: "1:169071140710:web:711ed824528055598272a7",
  measurementId: "G-V0V2GN1RPR"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
