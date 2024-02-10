import React, { FunctionComponent } from "react";
import styles from "./separator.module.css";
interface Props {
  height?: string;
  line?: string;
}
const Separator: FunctionComponent<Props> = ({ height, line }) => {
  return (
    <span
      style={{ height: height ? height : "",display:"block" }}
      className={line ? styles.separator : ""}
    ></span>
  );
};

export default Separator;
