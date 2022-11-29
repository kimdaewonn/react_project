import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <section className="header__wrap">
      <article className="header__inner">
        <h1>
          RECIPES
          <span className="header__box"></span>
        </h1>
        <div className="header__mune">
          <ul>
            <li className="header__icon">
              <img src="../assets/orange-one.png" alt="오렌지" />
              오늘의 레시피
            </li>
            {/* <li>
            <Link to="Main">
              <button>main</button>
            </Link>
          </li> */}
            <li>
              <Link to="class">
                <button>CLASSIFICATION</button>
              </Link>
            </li>
            <li>
              <Link to="ranking">
                <button>RANKING</button>
              </Link>
            </li>
            <li>
              <Link to="youtube">
                <button>YOUTUBE</button>
              </Link>
            </li>
            {/* <li>
            <Link to="recipes">
              <button>Recipes</button>
            </Link>
          </li> */}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Header;
