import Barcode from "react-barcode";
import React, { useState } from "react";
import styles from "./App.module.css";

export default function IndexPage() {
  const [bar, setBar] = useState("");

  function handleChange(e) {
    setBar(e.target.value);
  }
  return (
    <div className={styles.app}>
      <h1 className={styles.text}>Next Barcode Demo</h1>.
      <Barcode value={bar ? bar : "generate code"} lineColor="black" />
      <input
        placeholder="Generate barcode"
        type="text"
        className={styles.textbox}
        onChange={handleChange}
      />
    </div>
  );
}
