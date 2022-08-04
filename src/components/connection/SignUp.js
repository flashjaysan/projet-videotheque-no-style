import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

import { context } from "../../context";

const SignUp = () => {
  const { auth, db } = useContext(context);
  const navigate = useNavigate();
  const [accountCreationError, setAccountCreationError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const setNicknameInFirestore = async (nickname, userId) => {
      const usersCollection = collection(db, "users");
      addDoc(usersCollection, {
        favorite_movies_ids: [],
        is_admin: false,
        nickname: nickname,
        user_id: userId,
      });
    };

    const email = e.target.email.value;
    const password = e.target.password.value;
    const nickname = e.target.nickname.value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setAccountCreationError(false);
        setNicknameInFirestore(nickname, userCredentials.user.uid);
        navigate("/");
      })
      .catch((error) => {
        setAccountCreationError(true);
      });
  };

  return (
    <>
      {accountCreationError && (
        <p>Erreur lors de la création de compte. Veuillez réessayer.</p>
      )}
      <form className="sign" onSubmit={handleSubmit}>
        <input type="text" name="nickname" placeholder="PSEUDO" required />
        <input type="email" name="email" placeholder="EMAIL" required />
        <input
          type="password"
          name="password"
          placeholder="MOT DE PASSE"
          required
        />
        <input type="submit" value="VALIDER" />
      </form>
    </>
  );
};

export default SignUp;
