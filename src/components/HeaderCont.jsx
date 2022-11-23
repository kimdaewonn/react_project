import React from "react";

import Orange from "./assets/img/orange-one.png";

const HeaderCont = () => {
  return (
    <section className="header__wrap">
      <article className="header__inner">
        <h1>
          RECIPES
          <span className="header__box"></span>
        </h1>
        <div class="header__mune">
          <ul>
            <li className="header__icon">
              <img src={Orange} alt="라임" />
              오늘의 레시피
            </li>
            <li>CLASSIFICATION</li>
            <li>RANKING</li>
            <li>YOUTUBE</li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default HeaderCont;
