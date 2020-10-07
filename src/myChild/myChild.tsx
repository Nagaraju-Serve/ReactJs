import React from "react";
import styles from "./myChild.module.scss";

export default class myChild extends React.Component {
  render() {
    return (
      <div className={styles.myChild}>
        <h1>Hello ):</h1>
      </div>
    );
  }
}
