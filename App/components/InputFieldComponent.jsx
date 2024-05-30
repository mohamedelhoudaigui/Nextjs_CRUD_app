import React from "react";
import styles from "./css/InputField.module.css";

const  InputField = ({label, type, name, placeholder, value, onChange}) => {
  return (
	<div className={styles.InputField}>
		<label className={styles.label} htmlFor={name}>{label}</label>
		<input
			id={name}
			type={type}
			name={name}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={styles.input}
		/>
	</div>
  );
}

export default InputField;