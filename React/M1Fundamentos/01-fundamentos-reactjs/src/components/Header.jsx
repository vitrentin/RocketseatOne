import styles from "./Header.module.css";
import igniteLogo from "../assets/igniteLogo.svg";
console.log(igniteLogo);
export function Header() {
  return (
    <div>
      <header className={styles.header}>
        <img src={igniteLogo} alt="Logotipo do Ignite" />
        {/* <strong>Iginite Feed</strong> */}
      </header>
    </div>
  );
}
