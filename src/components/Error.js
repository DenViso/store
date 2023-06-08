
import { useNavigate } from "react-router-dom";
const Error = () => {
	const navigate = useNavigate();
	const backToHome = () => {
		navigate("/");
	}
	return (
		
			<div className="error">
				<h1>Error 404</h1>
				<p>The page you are looking for does not exist</p>
				<button onClick={backToHome}>Back to home page </button>
			</div>
			
	);
};

export default Error;
