import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, name, price } = product;

    const navigate = useNavigate();

    return (
        <div>
            <div><h2>Ürün Detayı</h2></div>
            <hr />
            <h3>İsim: {name}</h3>
            <h3>Fiyat: {price} TL</h3>
            <button onClick={() => navigate("/product-details/" + id)}>Detaya git</button>
        </div>
    )
}

export default Product