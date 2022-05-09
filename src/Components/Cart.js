import React, { useState } from "react";
import './Cart.css';
import Items from './Items.js';
import { products } from './Products';
const Cart = () => {

    const [item, setItem] = useState(products);

     

    return (
        <>
        <header>
            <div className="continue-shopping">
                <img src = "./Images/arrow.jpg" alt="arrow" className="arrow-icon"/>
                <h3>continue shopping</h3>
            </div>

            <div className="cart-icon">
                <img src="./Images/cart.jpg" alt="cart" />
                <p>7</p>
            </div>
        </header>

        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items"> You have <span className="total-items-count">7</span> items in Shopping Cart </p>

            <div className="cart-items">

                <div className="cart-items-container">
                     
                    {
                    item.map((curItem) => {
                        return <Items keys={ curItem.id }  {...curItem}/>
                    })
                    } 
                   
                    
                </div>
            </div>

            <div className="card-total">
                <h3> Cart Total <span>22000rs</span></h3>
                <button>Checkout</button>
            </div>
        </section>
        </>
    )
}

export default Cart;