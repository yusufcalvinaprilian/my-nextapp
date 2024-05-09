import { ProductType } from "@/types/product.type";
import styles from "./Detail.module.scss";

const DetailProduct = ({ product }: {product: ProductType}) => {
	return (
		<>
			<h1 className={styles.title}>Detail Product</h1>
			<div className={styles.productDetail}>
				<div className={styles.productDetail__image}>
					<img src={product.image} alt={product.name} />
				</div>
				<div className={styles.productDetail__name}>{product.name}</div>
				<div className={styles.productDetail__category}>{product.category}</div>
				<div className={styles.productDetail__price}>
					{product.price &&
						product.price.toLocaleString("id-ID", {
							style: "currency",
							currency: "IDR",
						})}
				</div>
			</div>
		</>
	);
};

export default DetailProduct;
