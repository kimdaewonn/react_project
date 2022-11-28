import React from "react";

const Footer = () => {
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
            <img src="../assets/github-icon.png" alt="github" />
            <img src="../assets/twitter-icon.png" alt="twitter" />
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

export default Footer;
