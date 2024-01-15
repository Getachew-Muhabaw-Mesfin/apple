import Link from "../Link/Link";

 const Highlight = () => {
  return (
   <section className="second-hightlight-wrapper py-5">
      <div className="container">
        <div className="new-alert">New</div>

        <div className="title-wraper bold black">MacBook Air</div>

        <div className="description-wrapper black">
          Twice the speed. Twice the storage.
        </div>

        <div className="price-wrapper grey">From $999.</div>
        <Link/>

      </div>
    </section>
  )
}


const Highlights = () => {
  return (
   <Highlight/>
  );
};

export default Highlights;
