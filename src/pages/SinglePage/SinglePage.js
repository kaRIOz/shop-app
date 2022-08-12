import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./singlepage.css";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading/Loading";

import {
  setSingleProducts,
  addItem,
  minItem,
} from "../../components/redux/actions/ProductAction";

function SinglePage() {
  const [loading, setLoading] = React.useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  const { image, title, category, price, description, rating } = product;

  const fetchDataSinglePage = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();

      dispatch(setSingleProducts(data));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    if (id && !id == "") fetchDataSinglePage();
  }, [id]);

  const addProduct = (product) => {
    dispatch(addItem(product));
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }
  return (
    <section>
      <article className="single-page-item">
        <div className="single-page-info">
          <h1 className="single-page-title">{title}</h1>

          <h3>description:</h3>
          <p className="single-page-description">{description}</p>
          <span className="single-page-price">price: $ {price}</span>
          <p className="single-page-category">category: {category}</p>

          <div className="btns">
            <button className="btn add_btn" onClick={() => addProduct(product)}>
              add to budget
            </button>
          </div>
        </div>

        <div className="single-container-img">
          <img src={image} alt={title} className="single-page-img" />
        </div>
      </article>
    </section>
  );
}

export default SinglePage;
