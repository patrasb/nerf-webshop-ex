import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList/ProductList";
import ProductModal from "./components/ProductModal/ProductModal";

function App() {
  return (
    <div className="page">
      <Header/>
      <ProductList/>
      <ProductModal/>
      <Footer/>
    </div>
  );
}

export default App;
