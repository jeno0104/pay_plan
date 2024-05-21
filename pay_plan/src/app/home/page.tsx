import Image from "next/image";
import style from "./MainHome.module.css";

export default function MainHome() {
  return (
    <div className={style.container}>
      <div className={style.title}>
        <div className={style.titleText}>PAY PLAN</div>
      </div>
      <div className={style.battery}>
        <Image src="/battery.png" width={200} height={100} alt="battery" />
        <p className={style.goalText}>목표 금액의 00%를 사용했어요!</p>

        <p className={style.goalText}>남은 일수: 3일 / 7일</p>
        <p className={style.goalText}>잔액: 12,000원/30,000원</p>
      </div>
    </div>
  );
}
