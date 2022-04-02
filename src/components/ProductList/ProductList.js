import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { updateProductList } from "../../store/reducer";

import ProductItem from "./ProductItem";


function ProductList() {
    
  const dispatch = useDispatch();
  const loading = useSelector(main => main.ui.loadingList);
  const productList = useSelector( main => main.productList);

  useEffect(() => {
    dispatch(updateProductList(false));  
  }, []);
  
  if(loading) return <div className="loading-wrapper"><ClipLoader size={100}></ClipLoader></div>;

  return (
    <div className="product-list">
      {productList.map((product, index) => (
        <ProductItem key={index} product={product}/>
      ))}
    </div>
    );
  }
  
export default ProductList;
  