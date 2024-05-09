import { fetcher } from "@/lib/swr/fetcher";
import { useRouter } from "next/router";
import useSWR from "swr";
import DetailProduct from "@/views/DetailProduct";


const DetailProductPage = () => {
	const { query } = useRouter();

	const { data, error, isLoading } = useSWR(`/api/product/${query.product}`, fetcher);

	console.log(data);
	return (
		<div>
			{/* <p>product : {query.product}</p> */}
			<DetailProduct product={isLoading ? [] : data.data} />
		</div>
	);
};

export default DetailProductPage;

export async function getServerSideProps({
	params,
}: {
	params: { product: string };
}) {
	// fetch data
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/${params.product}`);
	const response = await res.json();
	return {
		props: {
			product: response.data,
		},
	};
}
