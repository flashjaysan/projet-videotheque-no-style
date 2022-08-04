import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { context } from "../../context";

const Nav = () => {
  const { auth, userId } = useContext(context);

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={(nav) =>
              nav.isActive ? "navButtonActive" : "navButton"
            }
            to="/"
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            className={(nav) =>
              nav.isActive ? "navButtonActive" : "navButton"
            }
            to="/favoris"
          >
            Favoris
          </NavLink>
        </li>
        <li>
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
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
