import search from "../../assets/images/logos/search-icon-sm.png";
import applLogo from "../../assets/images/logos/logo-sm.png";
import cart from "../../assets/images/logos/cart-sm.png";
import "./Navbar.css";

const naveItems = [
  {
    id: 1,
    text: "Store",
    link: "https://www.apple.com/us/shop/goto/store",
  },
  {
    id: 2,
    text: "Mac",
    link: "https://www.apple.com/mac/",
  },
  {
    id: 3,
    text: "iPad",
    link: "https://www.apple.com/iPad/",
  },
  {
    id: 4,
    text: "iPhone",
    link: "https://www.apple.com/iphone/",
  },
  {
    id: 5,
    text: "Watch",
    link: "https://www.apple.com/watch/",
  },
  {
    id: 6,
    text: "Vision",
    link: "https://www.apple.com/apple-vision-pro/",
  },
  {
    id: 7,
    text: "AirPods",
    link: "https://www.apple.com/airpods/",
  },
  {
    id: 8,
    text: "TV & Home",
    link: "https://www.apple.com/tv-home/",
  },
  {
    id: 9,
    text: "Entertainment",
    link: "https://www.apple.com/entertainment/",
  },
  {
    id: 10,
    text: "Accessories",
    link: "https://www.apple.com/us/shop/goto/buy_accessories",
  },
  {
    id: 11,
    text: "Support",
    link: "https://support.apple.com/?cid=gn-ols-home-hp-tab",
  },
];

const NaveBar = () => {
  return (
    // TODO: Working on Reusablity of List and Pass text and Link As Object
    <div className="nav-wrapper fixed-top bg-dark ">
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
          <a className="navbar-brand mx-auto" href="www.apple.com">
            <img src={applLogo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              {naveItems.map((naveItem, i) => (
                <li className="nav-item" key={i}>
                  <a
                    className="nav-link js-scroll-trigger"
                    href={naveItem.link}
                  >
                    {naveItem.text}
                  </a>
                </li>
              ))}
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={search} />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/cart/">
                  <img src={cart} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NaveBar;
