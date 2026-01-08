import styles from "./button.module.scss";

type ButtonProps = {
	children?: React.ReactNode;
	onClick?: () => void;
	variant: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, variant }) => {
	return (
		<button
			onClick={onClick}
			className={
				variant === "login"
					? styles.login
					: variant === "register"
					? styles.register
					: styles.default
			}
		>
			{children}
		</button>
	);
};

export default Button;
