
import Link from "../Link/Link";
import Watch9 from "../../assets/images/logos/promo_logo_apple_watch_series_9_large.png";
import WatchUltera from "../../assets/images/logos/promo_logo_apple_watch_ultra2__large.png";
import MacBook from "../../assets/images/logos/mackbook_log.jpg";
import Fitness from "../../assets/images/logos/promo_logo_fitness_large.png";
import ApplCard from "../../assets/images/logos/logo_card_large.png";
import TradeIn from "../../assets/../assets/images/logos/logo_tradein__large.png";

const promos = [
  {
    id: 1,
    icon: Watch9,
    description: "Smart. Brighter.Mightier",
    bgImage: "",
  },
  {
    id: 2,
    icon: WatchUltera,
    description: "Next level adventure",
    bgImage: "",
  },
  {
    id: 3,
    icon: MacBook,
    description: "Mind-blowing. Head-turning",
    bgImage: "",
  },
  {
    id: 4,
    icon: Fitness,
    description:
      "From HIIT to Yoga. From 5 to 45 minutes. There's Something For everyone",
    bgImage: "",
  },
  {
    id: 5,
    icon: ApplCard,
    description: "Get up to 3% Daily Cash back with every Purchase",
    bgImage: "",
  },
  {
    id: 6,
    icon: TradeIn,
    description:
      "Get $180-$620 in credit when you trade in iPhone 11 or Higher.",
    bgImage: "",
  },
];

const GridProduct = () => {
  return (
    <div className="container">
      <div className="row">
        {promos.map((product, id) => (
          <div
            key={id}
            className={`right-side-wrapper ${product.bgImage} col-sm-12 col-md-6`}
          >
            <div className="right-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={product.icon} alt="logo" />
                </div>
              </div>
              <div className="description-wraper">
                {product.description}
                <br />
              </div>
              <Link />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridProduct;

// import Link from "../Link/Link";
// import Watch9 from "../../assets/images/logos/promo_logo_apple_watch_series_9_large.png";
// import WatchUltera from "../../assets/images/logos/promo_logo_apple_watch_ultra2__large.png";
// import MacBook from "../../assets/images/logos/mackbook_log.jpg";
// import Fitness from "../../assets/images/logos/promo_logo_fitness_large.png";
// import ApplCard from "../../assets/images/logos/logo_card_large.png";
// import TradeIn from "../../assets/../assets/images/logos/logo_tradein__large.png";
// const promos = [
//   {
//     id: 1,
//     icon: Watch9,
//     description: "Smart. Brighter.Mightier",
//     bgImage: "",
//   },
//   {
//     id: 2,
//     icon: WatchUltera,
//     description: "Next level adventure",
//     bgImage: "",
//   },
//   {
//     id: 3,
//     icon: MacBook,
//     description: "Mind-blowing. Head-turning",
//     bgImage: "",
//   },
//   {
//     id: 4,
//     icon: Fitness,
//     description:
//       "From HIIT to Yoga. From 5 to 45 minutes. There's Something Form everyone",
//     bgImage: "",
//   },
//   {
//     id: 5,
//     icon: ApplCard,
//     description: "Get up to 3% Daily Cash back with every Purchase",
//     bgImage: "",
//   },
//   {
//     id: 6,
//     icon: TradeIn,
//     description:
//       "Get $180-$620 in credit when you trade in iPhone 11 or Higher.",
//     bgImage: "",
//   },
// ];
// console.log(promos);
// const GridProduct = () => {
//   return promos.map((product, id) => (
//     <div
//       key={id}
//       className={`right-side-wrapper ${product.bgImage} col-sm-12 col-md-6`}
//     >
//       <div className="right-side-container">
//         <div className="top-logo-wrapper">
//           <div className="logo-wrapper">
//             <img src={product.icon} />
//           </div>
//         </div>
//         <div className="description-wraper">
//           {product.description}
//           <br />
//         </div>
//         <Link />
//       </div>
//     </div>
//   ));
// };

// export default GridProduct;



