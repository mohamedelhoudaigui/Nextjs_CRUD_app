import React from "react";
import styles from "./css/Button.module.css";

const ButtonComponent = ({label, type}) => {
  return (
	
	<button
		className={styles.Button}
		type={type}
	>
		{label}
	</button>
  );
}

export default ButtonComponent;