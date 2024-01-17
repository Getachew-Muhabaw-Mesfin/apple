import Link from "../Link/Link";
import products from "./produt_data";
const GridProduct = () => {
  //TODO: Add style on Describtion 
  return (
    <div className="row">
      {products.map((product, id) => (
        <div
          key={id}
          className={`${product.bgImageWithStyle} col-sm-12 col-md-6`}
        >
          <div className="text-center">
            <img src={product.icon} alt="logo" />
          </div>
          <div className="text-center">
            {product.description}
            <br />
          </div>
          <Link />
        </div>
      ))}
    </div>
  );
};

export default GridProduct;

//////////////////////////Reference incase if not working  ////////////////////////
// import Watch9 from "../../assets/images/logos/promo_logo_apple_watch_series_9_large.png";
// import WatchUltera from "../../assets/images/logos/promo_logo_apple_watch_ultra2__large.png";
// import MacBook from "../../assets/images/logos/mackbook_log.jpg";
// import Fitness from "../../assets/images/logos/promo_logo_fitness_large.png";
// import ApplCard from "../../assets/images/logos/logo_card_large.png";
// import TradeIn from "../../assets/../assets/images/logos/logo_tradein__large.png";
// import "./GridProduct.css";

// const promos = [
//   {
//     id: 1,
//     icon: Watch9,
//     description: "Smart. Brighter.Mightier",
//     bgImage: "apple_watch9_series commen-style",
//   },
//   {
//     id: 2,
//     icon: WatchUltera,
//     description: "Next level adventure",
//     bgImage: "watchUltra2 commen-style",
//   },
//   {
//     id: 3,
//     icon: MacBook,
//     description: "Mind-blowing. Head-turning",
//     bgImage: "mackBookPro commen-style",
//   },
//   {
//     id: 4,
//     icon: Fitness,
//     description:
//       "From HIIT to Yoga. From 5 to 45 minutes. There's Something For everyone",
//     bgImage: "fitness commen-style",
//   },
//   {
//     id: 5,
//     icon: ApplCard,
//     description: "Get up to 3% Daily Cash back with every Purchase",
//     bgImage: "appleCard commen-style",
//   },
//   {
//     id: 6,
//     icon: TradeIn,
//     description:
//       "Get $180-$620 in credit when you trade in iPhone 11 or Higher.",
//     bgImage: "tradein commen-style",
//   },
// ];
