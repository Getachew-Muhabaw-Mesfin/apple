import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:5000/api/v1/products/${productId}`)
      .then((response) => {
        setProduct(response.data.product);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productId]);

  return (
    <div className="container mt-5 pt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.product_img} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1 className="mb-4">{product.product_name}</h1>
          <p className="lead">{product.product_brief_description}</p>
          <p className="font-weight-bold">
            Starting at {product.starting_price}
          </p>
          <p>{product.price_range}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
