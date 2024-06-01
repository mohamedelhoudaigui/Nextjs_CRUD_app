import React from "react";
import styles from "./css/Button.module.css";
import FormComponent from "./FormComponent";

const ButtonComponent = ({label, type, mode}) => {
	const [showForm, setShowForm] = React.useState(false);
	const handleClick = () => {
		setShowForm(!showForm);
	}
  return (
	<div>
		<button
			className={styles.Button}
			type={type}
			onClick={handleClick}
		>
			{label}
		</button>
		{showForm && (
			<FormComponent mode={mode}/>
		)}
	</div>
  );
}

export default ButtonComponent;