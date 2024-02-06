import search from "../../assets/images/logos/search-icon-sm.png";
import applLogo from "../../assets/images/logos/logo-sm.png";
import cart from "../../assets/images/logos/cart-sm.png";
import "./Navbar.css";
import AddProduct from "../admin/AddProduct";
import {Link} from "react-router-dom"

const naveItems = [
  {
    id: 1,
    text: "Store",
    link: "store",
  },
  {
    id: 2,
    text: "Mac",
    link: "mac",
  },
  {
    id: 3,
    text: "iPad",
    link: "ipad",
  },
  {
    id: 4,
    text: "iPhone",
    link: "iphones",
  },
  {
    id: 5,
    text: "Watch",
    link: "watch",
  },
  {
    id: 6,
    text: "Vision",
    link: "visionPro",
  },
  {
    id: 7,
    text: "AirPods",
    link: "airpods",
  },
  {
    id: 8,
    text: "TV & Home",
    link: "tv",
  },
  {
    id: 9,
    text: "Entertainment",
    link: "entertainment",
  },
  {
    id: 10,
    text: "Accessories",
    link: "accessories",
  },
  {
    id: 11,
    text: "Support",
    link: "support",
  },
];

const NaveBar = () => {
  return (
    // TODO: Working on Reusablity of List and Pass text and Link As Object
    <div className="nav-wrapper fixed-top bg-dark text-center ">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <Link className="navbar-brand mx-auto" to="www.apple.com">
            <img src={applLogo} />
          </Link>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {naveItems.map((naveItem, i) => (
                <li className="nav-item" key={i}>
                  <Link
                    className="nav-link js-scroll-trigger"
                    to={naveItem.link}
                  >
                    {naveItem.text}
                  </Link>
                </li>
              ))}
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/search/">
                  <img src={search} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link js-scroll-trigger" to="/cart/">
                  <img src={cart} />
                </Link>
              </li>
              <AddProduct/>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NaveBar;
