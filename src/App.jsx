import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState, useEffect} from 'react'
import About from "./components/About";
import Basked from "./components/Basked";
import Contacts from "./components/Contacts";
import Main from "./components/Main";
import Products from "./components/Products";
import Error from "./components/Error";
import getProducts from "./axios/getProducts";
import OutletPage from "./components/OutletPage";


function App() {
  const [products, setProducts] = useState([]);

const getAxiosProducts = async() => {
  const res = await getProducts();
  setProducts(res);
};

useEffect(() => {
  getAxiosProducts();
}, []);

console.log(products);
	return (
		
			<BrowserRouter>
				<Routes>
          <Route path="/" element={<OutletPage />} >
            <Route index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/products" element={<Products products={products}/>} />
            <Route path="/basked" element={<Basked />} />
            <Route path="*" element={<Error />} />
          </Route>	
        </Routes>
			</BrowserRouter>
		
	);
}

export default App;
