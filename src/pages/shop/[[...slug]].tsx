import { useRouter } from "next/router";

const ShopProductPage = () => {
	const { query } = useRouter();
	return (
		<div>
			<h1>Detail Product Page</h1>
			<p>Shop : {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
		</div>
	);
};

export default ShopProductPage;
