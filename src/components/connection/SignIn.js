import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import { context } from "../../context";

const SignIn = () => {
  const { auth } = useContext(context);
  const navigate = useNavigate();
  const [authenticationError, setAuthenticationError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        setAuthenticationError(false);
        navigate("/");
      })
      .catch((error) => {
        setAuthenticationError(true);
      });
  };

  return (
    <>
      {authenticationError && <p>Problème de connexion. Réessayez.</p>}
      <form className="signInForm" onSubmit={handleSubmit}>
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

export default SignIn;
