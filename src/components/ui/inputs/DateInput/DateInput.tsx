import { InputHTMLAttributes, ReactNode } from "react";
import styles from "./DateInput.module.scss";

type DateProps = InputHTMLAttributes<HTMLInputElement> & {
	label?: string;
};

export function DateInput({ label, id, className, ...rest }: DateProps) {
	return (
		<div className={styles.container}>
			{label && id && <label htmlFor={id}>{label}</label>}
				<input type="date" id={id} className={styles.input} {...rest} />
		</div>
	);
}
