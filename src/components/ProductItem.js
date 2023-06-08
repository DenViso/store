import {useNavigate} from "react-router-dom";

function ProductItem({product, key} ) {
	
	const navigate = useNavigate();
	
	const toBacket = () => {
		navigate("/Basked")
	}
	
	const click = () => {
		 toBacket()
	}

	return (
		<div className="product-item" key={key}>
			<h1 className="title-name">{product.title}</h1>
			<img src={product.image} alt="product" />
			<div className="product-info">
				<h4 className="category">{product.category}</h4>
				<p className="descr">{product.description}</p>
				<p className="price">{product.price}</p>
				<button onClick={() => click()}>Add to basket</button>
			</div>
		</div>
	);
}

export default ProductItem;
