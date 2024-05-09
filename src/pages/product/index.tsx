import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
	const [products, setProducts] = useState([]);
	const { push } = useRouter();
	// menggunakan swr
	const { data, error, isLoading } = useSWR("/api/product", fetcher);

	// menggunakan fetch
	// useEffect(() => {
	// 	fetch("/api/data")
	// 		.then((res) => res.json())
	// 		.then((response) => {
	// 			setProducts(response.data);
	// 			console.log(response.data);
	// 		});
	// }, []);
	return (
		<div>
			<ProductView products={isLoading ? [] : data?.data} />
		</div>
	);
};

export default ProductPage;
