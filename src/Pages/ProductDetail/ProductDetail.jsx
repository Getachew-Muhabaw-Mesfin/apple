import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { GiShoppingCart } from "react-icons/gi";
import { CartContext } from "../../components/Context/CartContext";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { productId } = useParams();
  const { setCart } = useContext(CartContext);

  const handleClick = () => {
    setCart((prev) => prev + 1);
  };


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
  console.log(product);

  return (
    <Card style={{ width: "40rem" }} className="container mt-5 pt-5">
      <div className=" mt-5 pt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={product.product_img} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 text-center">
            <h1 className="mb-4 fw-bold">{product.product_name}</h1>
            <p className="lead">{product.product_brief_description}</p>
            <p className="font-weight-bold">
              Starting at {product.starting_price}
            </p>
            <p>{product.price_range}</p>
            <Button
              variant="primary"
              onClick={handleClick}
              aria-labelledby="add-product-modal-sizes-title-lg"
              size="lg"
            >
              <GiShoppingCart /> Add to Cart
            </Button>
          </div>
        </div>
      </div>
      <Card.Text className="text-black">
        {product.product_description}
      </Card.Text>
    </Card>
  );
};

export default ProductDetail;
