import React from "react";
import friedegg from "./assets/img/fried-egg.png";
import hotsoup from "./assets/img/hot-soup.png";
import oden from "./assets/img/oden.png";
import mando1 from "./assets/img/mando1.png";
import mando2 from "./assets/img/mando2.png";
import mando3 from "./assets/img/mando3.png";
import mando4 from "./assets/img/mando4.png";
import mando5 from "./assets/img/mando5.png";
import mando6 from "./assets/img/mando6.png";
import star from "./assets/img/star.png";

const ClassCont = () => {
  return (
    <section className="class__wrap">
      <div className="class__inner">
        <div className="class__box">
          <div className="class__bar">
            <div className="bar-t">
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={oden} alt="면/만두" />
                <div>면/만두</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
              <div className="icon_cont">
                <img src={hotsoup} alt="국/탕" />
                <div>국/탕</div>
              </div>
            </div>
            <div className="bar-b">
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
              <div className="icon_cont">
                <img src={friedegg} alt="반찬" />
                <div>반찬</div>
              </div>
            </div>
          </div>
          <h2>면/만두</h2>
          <div className="mando__inner">
            <div className="man-t">
              <div>
                <img src={mando1} alt="만두이미지1" />
                <div>비엔나 만두 강정</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src={mando2} alt="만두이미지1" />
                <div>만두강정 소스까지 다 만들기 간단간식 맥주 안주로 굿</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src={mando3} alt="만두이미지1" />
                <div>마늘종 오일 파스타 만들기</div>
                <img src={star} alt="별" />
              </div>
            </div>
            <div className="man-b">
              <div>
                <img src={mando4} alt="만두이미지1" />
                <div>간단하지만 중독성있게 맛있는 간장파스타</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src={mando5} alt="만두이미지1" />
                <div>차돌박이 파스타</div>
                <img src={star} alt="별" />
              </div>
              <div>
                <img src={mando6} alt="만두이미지1" />
                <div>깐풍만두 전분가루 없이도 맛있는 소스만들기</div>
                <img src={star} alt="별" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassCont;
