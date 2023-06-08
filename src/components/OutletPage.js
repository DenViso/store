import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const OutletPage = () => {
	return (
		<div className="wrapper">
			<Header/>
			<Outlet/>
			<Footer/>
		</div>
	);
};

export default OutletPage;
