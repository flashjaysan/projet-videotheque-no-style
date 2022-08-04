import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { context } from "../../context";

const Navbar = () => {
  const { auth, userId } = useContext(context);
  const TITLE = "CINE CLUB";

  return (
    <div className="globalNAV">
      <img className="logo" src="../images/logo.svg" alt="logo" />
      <h1>{TITLE}</h1>
      <nav>
        <ul>
          <NavLink
            className={(nav) =>
              nav.isActive ? "navButtonActive" : "navButton"
            }
            to="/"
          >
            Accueil
          </NavLink>
          <NavLink
            className={(nav) =>
              nav.isActive ? "navButtonActive" : "navButton"
            }
            to="/favoris"
          >
            Favoris
          </NavLink>
          {userId !== null ? (
            <NavLink
              className={(nav) =>
                nav.isActive ? "navButtonActive" : "navButton"
              }
              to="/"
              onClick={() => {
                auth.signOut();
              }}
            >
              Déconnexion
            </NavLink>
          ) : (
            <NavLink
              className={(nav) =>
                nav.isActive ? "navButtonActive" : "navButton"
              }
              to="/connexion"
            >
              Connexion
            </NavLink>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
