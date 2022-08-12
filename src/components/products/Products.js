import React, { useEffect, useState } from "react";
import "./products.css";
import Loading from "../loading/Loading";

import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const url = "https://fakestoreapi.com/products";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const config = {
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    setLoading(true);
    try {
      const res = await fetch(url, config);
      const data = await res.json();

      setData(data);
      setFilter(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  const filterProduct = (category) => {
    const newItem = data.filter((item) => item.category === category);
    setFilter(newItem);
  };

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  const ShowFilter = () => {
    return (
      <>
        <div className="filter-btns" style={{ textAlign: "center" }}>
          <button
            className="filter-btn"
            onClick={() => filterProduct("jewelery")}
          >
            jewelery
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("electronics")}
          >
            electronic
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("women's clothing")}
          >
            women's clothing
          </button>
          <button
            className="filter-btn"
            onClick={() => filterProduct("men's clothing")}
          >
            men's clothing
          </button>
          <button className="filter-btn" onClick={() => setFilter(data)}>
            All
          </button>
        </div>
        <section className="products">
          {filter.map((item) => {
            const { id, title, image, price, category, rating } = item;
            return (
              <article className="product" key={id}>
                <div className="header-single-item">
                  <img src={image} alt={title} className="single-item-img" />
                  <Link to={`/product/${id}`}>
                    <button className="single-btn-item">more & buy</button>
                  </Link>
                </div>
                <div className="single-item-info">
                  <h3 className="single-item-title">
                    {title.substring(0, 30)}...
                  </h3>
                  <span className="single-item-price">$ {price}</span>
                  <span className="single-item-gender">{category}</span>
                  <p className="single-item-rate">
                    <FaStar style={{ marginBottom: "0.2rem" }} />
                    {rating.rate}
                  </p>
                </div>
              </article>
            );
          })}
        </section>
      </>
    );
  };

  return (
    <>
      <div className="banner"></div>
      <h1 className="product-title">محصولات</h1>
      {loading ? <Loading /> : <ShowFilter />}
    </>
  );
}

export default Products;
