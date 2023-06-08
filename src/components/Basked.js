 
import{useNavigate} from "react-router-dom";

const Basked = () => {
	const navigate = useNavigate();
	const  backToProducts = () => {
		navigate("/Products")
	}
	return (
		 
			<main>
				<div className="baxket">
				<h1>yo product add to basket</h1>
				<button onClick={backToProducts}>Back to products</button>
				</div>
			</main>
			 
	);
};

export default Basked;
