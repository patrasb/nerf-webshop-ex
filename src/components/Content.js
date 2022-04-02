
import { useSelector } from "react-redux";
import ProductList from "./ProductList/ProductList";
import ProductPage from "./ProductPage/ProductPage";

function Content() {

    const selectedProduct = useSelector( main => main.selectedProduct);

  return (
    <div className="page-content">
      {selectedProduct ? <ProductPage/> : <ProductList/> }
    </div>
  );
}

export default Content;
