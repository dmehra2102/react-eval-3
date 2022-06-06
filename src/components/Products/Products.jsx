// import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Product.css";

const Products = () => {
      const [prod, setProd] = useState([]);
      useEffect(() => {
           fetch("http://localhost:8080/products").then((res)=> res.json()).then((data)=> setProd(data));
      }, []);

      return (
            <div className="style-product-div">
                  {prod.map((el) => {
                        return <Product produc={el} />;
                  })}
            </div>
      );
};

export default Products;
