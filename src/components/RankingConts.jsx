import React from "react";

import { RiSearchLine } from "react-icons/ri";

import lime from "./assets/img/lime.png";

import star from "./assets/img/star.png";

import Rectangle01 from "./assets/img/Rectangle01.png";
import Rectangle02 from "./assets/img/Rectangle02.png";
import Rectangle03 from "./assets/img/Rectangle03.png";
import Rectangle04 from "./assets/img/Rectangle04.png";
import Rectangle05 from "./assets/img/Rectangle05.png";
import Rectangle06 from "./assets/img/Rectangle06.png";
import Rectangle07 from "./assets/img/Rectangle07.png";
import Rectangle08 from "./assets/img/Rectangle08.png";

const RankingConts = () => {
  return (
    <section className="ranking__wrap">
      <div className="ranking__inner">
        <article className="ranking__icon__box">
          <img className="ranking__icon" src={lime} alt="라임" />
          <div className="search">
            <label className="glass" htmlFor="searchInput">
              <RiSearchLine />
            </label>
            <input
              type="text"
              id="searchInput"
              className="input__search"
              placeholder="검색하세요!"
              title="검색"
            />
          </div>
        </article>
        <article className="ranking__main">
          <span>EXPERIENCE THE BEST CHOICE</span>
          <h1>BEST RECIPES</h1>
          <div className="ranking__desc">
            <div className="ranking__table">
              <ul>
                <li>
                  <img src={Rectangle01} alt="음식사진" />
                  <h2>Perfect Pizza Crust</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle02} alt="음식사진" />
                  <h2>Classic Fried Chiken</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle03} alt="음식사진" />
                  <h2>The Best Hamburger</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle04} alt="음식사진" />
                  <h2>Tiktok Ramen</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle05} alt="음식사진" />
                  <h2>Perfect Pizza Crust</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle06} alt="음식사진" />
                  <h2>Classic Fried Chiken</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle07} alt="음식사진" />
                  <h2>The Best Hamburger</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={Rectangle08} alt="음식사진" />
                  <h2>Tiktok Ramen</h2>
                  <span>
                    <img src={star} alt="별 아이콘" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <div className="footer__wrap"></div>
    </section>
  );
};

export default RankingConts;
