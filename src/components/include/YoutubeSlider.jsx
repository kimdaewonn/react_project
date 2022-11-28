import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

const YoutubeConts = () => {
  return (
    <section className="youtube__wrap">
      <div className="youtube__inner">
        <article className="youtube__box1">
          <h2>
            <span>쉐프</span> 추천
          </h2>
          <div className="youtube__icon">
            <ul>
              <li>
                <img src="/assets/youtube01.png" alt="이미지1" />
              </li>
              <li>
                <img src="/assets/youtube02.png" alt="이미지2" />
              </li>
              <li>
                <img src="/assets/youtube03.png" alt="이미지3" />
              </li>
              <li>
                <img src="/assets/youtube04.png" alt="이미지4" />
              </li>
              <li>
                <img src="/assets/youtube05.png" alt="이미지5" />
              </li>
              <li>
                <img src="/assets/youtube06.png" alt="이미지6" />
              </li>
            </ul>
            <button className="youtube__left"></button>
            <button className="youtube__right"></button>
          </div>
        </article>
        <article className="youtube__box2">
          <h3>
            화제의 <span>TV레시피</span>
          </h3>
          <div className="youtube__page">
            <ul>
              <li>
                <img src="/assets/youtubepage01.jpg" alt="" />
                <h4>유병재가 만든 찜닭!</h4>
              </li>
              <li>
                <img src="/assets/youtubepage02.jpg" alt="" />
                <h4>콩국수가 싫으면 잣국수</h4>
              </li>
              <li>
                <img src="/assets/youtubepage03.jpg" alt="" />
                <h4>백종원의 아스파라거스토마토구이&아스어쩌고저쩌구</h4>
              </li>
              <li>
                <img src="/assets/youtubepage04.jpg" alt="" />
                <h4>초간단 야식! 수미네 반찬에서 이연복 셰프어쩌고저쩌구</h4>
              </li>
              <li>
                <img src="/assets/youtubepage05.jpg" alt="" />
                <h4>다른 반찬 필요없음! 다시마쌈장~백종원어쩌고저쩌구</h4>
              </li>
              <li>
                <img src="/assets/youtubepage06.jpg" alt="" />
                <h4>초간단 김치!!! 대파김치</h4>
              </li>
              <li>
                <img src="/assets/youtubepage07.jpg" alt="" />
                <h4>백종원의 양송이칠리탕수 만들기~</h4>
              </li>
              <li>
                <img src="/assets/youtubepage08.jpg" alt="" />
                <h4>나혼자산다에 나왔던 와인과 잘 어울리는어쩌고저쩌구</h4>
              </li>
              <li>
                <img src="/assets/youtubepage09.jpg" alt="" />
                <h4>수미네반찬 오징어 조림 만들기~</h4>
              </li>
              <li>
                <img src="/assets/youtubepage10.jpg" alt="" />
                <h4>극강의 고소함! 콩수프로 파스타 만들자~</h4>
              </li>
              <li>
                <img src="/assets/youtubepage11.jpg" alt="" />
                <h4>브런치 메뉴로 굿굿 만남의 광장에서 나온어쩌고저쩌구</h4>
              </li>
              <li>
                <img src="/assets/youtubepage12.jpg" alt="" />
                <h4>감자 없는 감튀?! 편스톨랑 한지혜의 무어쩌고저쩌구</h4>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default YoutubeConts;
