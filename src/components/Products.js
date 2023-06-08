import ProductItem from "./ProductItem";

function Products({ products }) {
	return (
		<main>
			<h1>Products</h1>
			<div className="products">
				{products.map((product ) => {
					return <ProductItem product={product} key={product.id}/>;
				})}
			</div>
		</main>
	);
}

export default Products;
