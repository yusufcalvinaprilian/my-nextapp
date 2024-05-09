import Link from "next/link";
import styles from "./Register.module.scss";
import { useRouter } from "next/router";
import { useState } from "react";
const RegisterView = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");
	const { push } = useRouter();
	const handleSubmit = async (event: any) => {
		event.preventDefault();
		setError("");
		setIsLoading(true);
		const data = {
			fullname: event.target.fullname.value,
			email: event.target.email.value,
			password: event.target.password.value,
		};
		const result = await fetch("/api/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (result.status === 200) {
			event.target.reset();
			setIsLoading(false);
			push("/auth/login");
		} else {
			setIsLoading(false);
			setError(result.status === 400 ? "Email already exist" : "");
		}
	};
	return (
		<div className={styles.register}>
			<h1 className={styles.register__title}>Register</h1>
			{error && <p className={styles.register__error}>{error}</p>}
			<div className={styles.register__form}>
				<form onSubmit={handleSubmit}>
					{/* fullname */}
					<div className={styles.register__form__item}>
						<label htmlFor="fullname" className={styles.register__form__item__label}>
							Fullname
						</label>
						<input type="text" id="fullname" name="fullname" placeholder="fullname" className={styles.register__form__item__input} />
					</div>
					{/* email */}
					<div className={styles.register__form__item}>
						<label htmlFor="email" className={styles.register__form__item__label}>
							Email
						</label>
						<input type="text" id="email" name="email" placeholder="email" className={styles.register__form__item__input} />
					</div>
					{/* password */}
					<div className={styles.register__form__item}>
						<label htmlFor="password" className={styles.register__form__item__label}>
							Password
						</label>
						<input type="password" id="password" name="password" placeholder="password" className={styles.register__form__item__input} />
					</div>
					<button type="submit" className={styles.register__form__item__button} disabled={isLoading}>
						{isLoading ? "Loading..." : "Register"}
					</button>
				</form>
			</div>
			<p className={styles.register__link}>
				Already have an account? You can <Link href="/auth/login">sign in here</Link>
			</p>
		</div>
	);
};

export default RegisterView;
