import axios from "axios";

const getProducts = async () => {
	const respons = await axios.get("https://fakestoreapi.com/products/");
	const data = respons.data;
	return data;
};
export default getProducts;
