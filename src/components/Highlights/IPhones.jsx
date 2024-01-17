import iPhones from "./iphones_data";
import "./Highlight.css";
import Link from "../Link/Link";
const IPhones = () => {
  return iPhones.map((iPhone) => (
    <section className={iPhone.bgImageStyle} key={iPhone.id}>
      <div className="container">
        <h2 className="bold headlineTitle">{iPhone.title}</h2>
        <div className="display-6 h4">{iPhone.description}</div>
        <Link />
      </div>
    </section>
  ));
};

export default IPhones;
