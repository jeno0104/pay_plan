"use client";

import Image from "next/image";
import style from "./MainHome.module.css";
import Footer from "../footer/page";
import { useState } from "react";
import Wallet from "../wallet/page";
import Chart from "../chart/page";
import People from "../people/page";

export default function MainHome() {
  const [content, setContent] = useState<string>("home");
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.titleText}>PAY PLAN</div>
      </div>
      <div>
        {content === "home" ? (
          <div className={style.home}>
            <div className={style.battery}>
              <Image
                src="/battery.png"
                width={200}
                height={100}
                alt="battery"
              />
              <div className={style.information}>
                <div>
                  <p className={style.goalText}>
                    목표 금액의 00%를 사용했어요!
                  </p>
                </div>
                <div>
                  <p className={style.goalText}>남은 일수: 3일 / 7일</p>
                  <p className={style.goalText}>잔액: 12,000원/30,000원</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {content === "wallet" ? <Wallet /> : ""}
        {content === "chart" ? <Chart /> : ""}
        {content === "people" ? <People /> : ""}
      </div>

      <Footer content={content} setContent={setContent} />
    </div>
  );
}
