import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { context } from "./context";

import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Favoris from "./pages/Favoris";
import DetailsFilm from "./pages/DetailsFilm";

const firebaseConfig = {
  apiKey: "AIzaSyAhfMviuWeWqdPQAwAJ_5wE_fZK_oRrNrM",
  authDomain: "videotheque-perso.firebaseapp.com",
  projectId: "videotheque-perso",
  storageBucket: "videotheque-perso.appspot.com",
  messagingSenderId: "591632957401",
  appId: "1:591632957401:web:2e06475160459ae9f963c8",
};

initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

const App = () => {
  const [userId, setUserId] = useState(null);

  auth.onAuthStateChanged((user) => {
    setUserId(user ? user.uid : null);
  });

  return (
    <context.Provider value={{ auth, db, userId }}>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Accueil />} />
          <Route exact path="/" element={<Accueil />} />
          <Route exact path="/favoris" element={<Favoris />} />
          <Route exact path="/connexion" element={<Connexion />} />
          <Route exact path="/detailsfilm/:movieId" element={<DetailsFilm />} />
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
};

export default App;
