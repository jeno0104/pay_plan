import Image from "next/image";
import style from "./footer.module.css";
import Link from "next/link";

export default function Footer({ content, setContent }) {
  return (
    <div className={style.container}>
      <div className={style.footer}>
        <button className={style.btn} onClick={() => setContent("home")}>
          {content === "home" ? (
            <Image src={"/home_on.png"} alt="" width={20} height={20} />
          ) : (
            <Image src={"/home_off.png"} alt="" width={20} height={20} />
          )}
        </button>
        <button className={style.btn} onClick={() => setContent("wallet")}>
          {content === "wallet" ? (
            <Image src={"/wallet_on.png"} alt="" width={20} height={20} />
          ) : (
            <Image src={"/wallet_off.png"} alt="" width={20} height={20} />
          )}
        </button>
        <button className={style.btn} onClick={() => setContent("chart")}>
          {content === "chart" ? (
            <Image src={"/chart_on.png"} alt="" width={20} height={20} />
          ) : (
            <Image src={"/chart_off.png"} alt="" width={20} height={20} />
          )}
        </button>
        <button className={style.btn} onClick={() => setContent("people")}>
          {content === "people" ? (
            <Image src={"/people_on.png"} alt="" width={20} height={20} />
          ) : (
            <Image src={"/people_off.png"} alt="" width={20} height={20} />
          )}
        </button>
      </div>
    </div>
  );
}
