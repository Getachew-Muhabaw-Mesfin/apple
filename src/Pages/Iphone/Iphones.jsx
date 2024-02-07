import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./iphoneStyle.css";

const Iphones = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/v1/products")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log(products);

  return (
    <div>
      <section className="internal-page-wrapper top-100">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold">Iphones</div>
              <div className="brief-description">
                The best for the brightest.
              </div>
            </div>
          </div>
          {products?.map((product, i) => (
            <div
              key={product.product_url}
              className="row justify-content-center text-center product-holder h-100 top-100 bottom-100"
            >
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  i % 2 == 0 ? "2" : "1"
                }`}
              >
                <div className="product-title">{product.product_name}</div>
                <div className="product-brief">
                  {product.product_brief_description}
                </div>
                <div className="starting-price">{`Starting at ${product.starting_price}`}</div>
                <div className="monthly-price">{product.price_range}</div>
                <div className="links-wrapper">
                  <ul>
                    <li>
                      <Link to={`/iphone/${product.product_id}`}>
                        Learn more
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`col-sm-12 col-md-6 my-auto order-${
                  i % 2 == 0 ? "1" : "2"
                }`}
              >
                <div className="product-image">
                  <img src={product.product_img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Iphones;
