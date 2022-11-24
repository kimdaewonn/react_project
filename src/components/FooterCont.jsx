import React from "react";

import Github from "../assets/img/github-icon.png";
import Twitter from "../assets/img/twitter-icon.png";

const FooterCont = () => {
  return (
    <section className="footer__wrap">
      <article className="footer__inner">
        <div className="footer__left">
          <div className="header__more">
            <span className="header__box"></span>
            <h2>MORE</h2>
          </div>
        </div>

        <div className="footer__right">
          <div className="footer__icon">
            <img src={Github} alt="github" />
            <img src={Twitter} alt="twitter" />
            <div className="desc">
              © RECIPES VIDEOS AND PHOTOS <br />
              COPYRIGHT 2022.
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default FooterCont;
