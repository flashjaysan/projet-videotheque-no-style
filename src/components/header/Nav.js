import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { context } from "../../context";

const Nav = () => {
  const { auth, userId } = useContext(context);

  return (
    <section class="navbar-section">
      <NavLink
        className={(nav) => "nav-item m-1 text-light " + (nav.isActive ? "active" : "")}
        to="/"
      >
        Accueil
      </NavLink>
      <NavLink
        className={(nav) => "nav-item m-1 text-light " + (nav.isActive ? "active" : "")}
        to="/favoris"
      >
        Favoris
      </NavLink>
      {userId !== null ? (
        <NavLink
          className={(nav) => "nav-item m-1 text-light " + (nav.isActive ? "active" : "")}
          to="/"
          onClick={() => {
            auth.signOut();
          }}
        >
          Déconnexion
        </NavLink>
      ) : (
        <NavLink
          className={(nav) => "nav-item m-1 text-light " + (nav.isActive ? "active" : "")}
          to="/connexion"
        >
          Connexion
        </NavLink>
      )}
    </section>
  );
};

export default Nav;
