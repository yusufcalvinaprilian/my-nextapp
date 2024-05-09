import styles from "@/styles/404.module.scss";
import Image from "next/image";
const Custom404 = () => {
	return (
		<div className={styles.error}>
			<Image src="/error-img.png" alt="error image" width={600} height={600} />
			<h1>404 - Page Not Found 👻</h1>
		</div>
	);
};

export default Custom404;
