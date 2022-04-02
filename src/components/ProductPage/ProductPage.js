import { useEffect, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import { useDispatch, useSelector } from "react-redux";
import { removeSelectedProduct } from "../../store/reducer";
import CommentSection from "./CommentSection";


function ProductPage() {
  const dispatch = useDispatch();
  const product = useSelector( state => state.selectedProduct);
  const [images, setImages] = useState(null);

  const goBackToProductList = () => {
    dispatch(removeSelectedProduct());
  }
  
  useEffect(() => {
    let images = product.images;
    let imageObjects = [];

    images.forEach( image => {
      imageObjects.push({
        original: image.original,
        thumbnail: image.thumb,
        originalHeight: 500,
        originalClass: "product-image"
      });
    });

    setImages(imageObjects);
  }, [product]);
    return (
      <div className="product-page">
          <div className="back-button" onClick={goBackToProductList}>
            <p>Back</p>
          </div>
          <div className="product-information">
            <div className="title">{product.title}</div>
            <div className="images-and-info">
              <div className="gallery-wrapper">
                {images ? <ReactImageGallery 
                  items={images}
                  showFullscreenButton={false}
                  showPlayButton={false}
                /> : null }
              </div>
              <div className="info-wrapper">
                <div className="price"> <span>Price: </span> {product.price} </div>
                <div className="description"> <span> Description: </span> <br/> {product.description} </div>
                <div className="specifications"> <span> Specifications: </span> <br/> {product.specification} </div>
              </div>
            </div>
            <CommentSection product={product}/>
          </div>
      </div>
    );
  }
  
export default ProductPage;
  
