import React from "react";
import { RiSearchLine } from "react-icons/ri";

const SearchBar = () => {
  return (
    <section className="search__wrap">
      <div className="search__inner">
        <article className="search__icon__box">
          <img
            className="search__icon"
            src="../assets/img/lime.png"
            alt="라임"
          />
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
      </div>
    </section>
  );
};

export default SearchBar;
