import Link from "../Link/Link";

const products = [
  {
    id: 1,
    title: "This is title",
    description: "This is description",
    price: "234",
    bgImage: "../../assets/home/actors.jpg",
  },
  {
    id: 2,
    title: "This is title",
    description: "This is description",
    price: "234",
    bgImage: "../../assets/home/actors.jpg",
  },
  {
    id: 3,
    title: "This is title",
    description: "This is description",
    price: "234",
    bgImage: "../../assets/home/actors.jpg",
  },
  {
    id: 4,
    title: "This is title",
    description: "This is description",
    price: "234",
    bgImage: "../../assets/home/actors.jpg",
  },
];

const GridProduct = () => {
  return (
    <section className="container-fluid">
      <div className="row row-cols-2 g-3">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img
                src={product.bgImage}
                className="card-img-top"
                alt="Hollywood Sign on The Hill"
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <Link />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridProduct;
