import Watch9 from "../../assets/images/logos/promo_logo_apple_watch_series_9_large.png";
import WatchUltera from "../../assets/images/logos/promo_logo_apple_watch_ultra2__large.png";
import MacBook from "../../assets/images/logos/mackbook_log.jpg";
import Fitness from "../../assets/images/logos/promo_logo_fitness_large.png";
import ApplCard from "../../assets/images/logos/logo_card_large.png";
import TradeIn from "../../assets/../assets/images/logos/logo_tradein__large.png";
import "./GridProduct.css";
const products = [
  {
    id: 1,
    icon: Watch9,
    description: "Smart. Brighter.Mightier",
    bgImageWithStyle: "apple_watch9_series commen-style",
    url: "https://www.apple.com/apple-watch-series-9/",
  },
  {
    id: 2,
    icon: WatchUltera,
    description: "Next level adventure",
    bgImageWithStyle: "watchUltra2 commen-style",
    url: "https://www.apple.com/apple-watch-ultra-2/",
  },
  {
    id: 3,
    icon: MacBook,
    description: "Mind-blowing. Head-turning",
    bgImageWithStyle: "mackBookPro commen-style",
    url: "https://www.apple.com/macbook-pro/",
  },
  {
    id: 4,
    icon: Fitness,
    description:
      "From HIIT to Yoga. From 5 to 45 minutes. \n There's Something For everyone",
    bgImageWithStyle: "fitness commen-style",
    url: "https://www.apple.com/apple-fitness-plus/",
  },
  {
    id: 5,
    icon: ApplCard,
    description: "Get up to 3% Daily Cash back \n with every Purchase",
    bgImageWithStyle: "appleCard commen-style",
    url: "https://www.apple.com/apple-card/",
  },
  {
    id: 6,
    icon: TradeIn,
    description:
      "Get $180-$620 in credit when \n you trade in iPhone 11 or Higher.",
    bgImageWithStyle: "tradein commen-style",
    url: "https://www.apple.com/us/shop/goto/trade_in",
  },
];
export default products;
