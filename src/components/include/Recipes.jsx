import React from "react";

const Recipes = () => {
  return (
    <section className="recipes__wrap">
      <div className="recipes__inner">
        <div className="recipes__box">
          <img src="../assets/noodles.png" alt="국수" />
          <h2>콩국수가 싫다면 잣국수</h2>
          <p>
            시원한 여름국수요리!콩국수의 콩비린내 때문에 싫어하는 분들도 있죠?!
            잣을 <br></br>
            갈아 만들면 고소하지만, 비린내는 Nope더위 날려버리는 시원한 여름국수{" "}
            <br></br>
            만들고 시원한 여름 보내세요!
          </p>
          <div className="ong">
            <span>1인분</span>
            <span>20분</span>
            <span>초급</span>
          </div>
          <div className="chong">
            <div className="box_row1">
              <div className="box1">
                <div>잣</div>
                <div>150g</div>
              </div>
              <div className="box2">
                <div>닭 육수</div>
                <div>2+1/2종이컵</div>
              </div>
            </div>
            <div className="box_row2">
              <div className="box3">
                <div>소면</div>
                <div>1인분</div>
              </div>
              <div className="box4">
                <div>오이</div>
                <div>1/3개</div>
              </div>
            </div>
            <div className="box_row3">
              <div className="box5">
                <div>소금</div>
                <div>약간</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
