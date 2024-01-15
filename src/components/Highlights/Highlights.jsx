import Link from "../Link/Link";
import "./Highlight.css";

const highlights = [
  {
    id: 1,
    title: "Vision Pro",
    description: "Twice the speed. Twice the storage",
    price: "From $999.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNNSnb-uG1cTZ8n7RNEgbo37yWo5mMC9z5HaANBpL8e0D4wrDxDk2SK4ezOpekwaOzAQ&usqp=CAU",
  },
  {
    id: 2,
    title: "Vision Pro",
    description: "Twice the speed. Twice the storage",
    price: "From $999.",
    imageUrl: "../../assets/home/Apple-iPhone-15-Pro.webp",
  },
  {
    id: 3,
    title: "Vision Pro",
    description: "Twice the speed. Twice the storage",
    price: "From $999.",
    imageUrl: "../../assets/home/iphone-15.png",
  },
];

const Highlights = () => {
  return highlights.map((highlight) => (
    <section
      key={highlight.id}
      className="second-hightlight-wrapper py-5"
      // style={{ backgroundImage: `url(${highlight.imageUrl})`, height:"580px" }}
    >
      <div className="container">
        <div className="new-alert">New</div>

        <div className="title-wraper bold black">{highlight.title}</div>

        <div className="description-wrapper black">{highlight.description}</div>

        <div className="price-wrapper grey">{highlight.price}</div>
        <Link />
      </div>
    </section>
  ));
};

export default Highlights;
