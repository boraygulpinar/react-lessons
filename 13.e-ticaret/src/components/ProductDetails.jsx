import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";


function ProductDetails() {

    const { id } = useParams();
    const { products, selectedProduct } = useSelector((store) => store.product)
    const { price, image, title, description, } = selectedProduct;
    const [count, setCount] = useState(0);
    const dispatch = useDispatch();

    const increment = () => {
        setCount(count + 1)
    }

    const decrement = () => {
        setCount(count - 1)
    }

    const addBasket = () => {
        const payload = {
            id,
            price,
            image,
            title,
            description,
            count
        }

        dispatch(addToBasket(payload))
    }

    useEffect(() => {
        getProductById();
    }, [])

    const getProductById = () => {
        products && products.map((product) => {
            if (product.id == id) {
                dispatch(setSelectedProduct(product))
            }
        })

    }
    console.log(products);
    return (
        <div style={{ marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <div style={{ marginRight: "50px" }}>
                <img src={image} width={300} height={500} alt="" />
            </div>
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
                <h1>{price} $</h1>

                <div style={{ display: "flex", alignItems: "center" }}>
                    <CiSquarePlus onClick={increment} style={{ fontSize: "40px", marginRight: "15px" }} />
                    <span onClick={addBasket} style={{ fontSize: "35px" }}>{count}</span>
                    <CiSquareMinus onClick={decrement} style={{ fontSize: "40px", marginLeft: "15px" }} />
                </div>

                <div>
                    <button style={{ marginTop: "20px", border: "none", borderRadius: "5px", fontSize: "20px", backgroundColor: "brown", color: "#fff", padding: "10px" }}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails