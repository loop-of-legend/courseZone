import React, { useState } from "react";
import { useCartContext } from "../context/cart_context";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import { MdClear } from "react-icons/md";
import Course from "../components/Course";
import {
  PYTHON,
  WEB_DEVELOPMENT,
  DATA_SCIENCE,
  AWS,
  DESIGN,
  MARKETING,
} from "../utils/constants";
import courses from "../utils/data";
import Footer from "../components/footer";

import { MDBCard, MDBCardBody, MDBCardImage } from "mdb-react-ui-kit";

const CartPage = () => {
  const [activeTab, setActiveTab] = useState(AWS);
  const {
    cart: cartItems,
    total_items,
    total_amount,
    clearCart,
  } = useCartContext();

   

  if (cartItems.length < 1) {
    return (
      <NotFoundWrapper>
        <div className="container">No items found in the cart.</div>
      </NotFoundWrapper>
    );
  }

  return (
    <CartWrapper>
      <div className="container">
        <div className="cart-pg-title">
          <h3>Shopping Cart</h3>
        </div>
        <div className="cart-grid grid">
          {/* card grid left */}
          <div className="cart-grid-left">
            <div className="flex flex-wrap flex-between">
              <div className="cart-count-info">
                <span className="fw-7 fs-18">{total_items}</span> Course in Cart
              </div>
              <button
                type="button"
                className="cart-clear-btn flex fs-15 fw-6 text"
                onClick={() => clearCart()}
              >
                <MdClear className="text-pink" />
                <span className="d-inline-block text-pink">Clear All</span>
              </button>
            </div>

            <div className="cart-items-list grid">
              {cartItems.map((cartItem) => {
                return <CartItem key={cartItem.courseID} cartItem={cartItem} />;
              })}
            </div>
          </div>
          {/* end of grid left */}
          {/* cart grid right */}
          <div className="cart-grid-right">
            <div className="cart-total">
              <span className="d-block fs-18 fw-6">Total:</span>
              <div className="cart-total-value fw-8">
                ${total_amount.toFixed(2)}
              </div>

              <button
                type="button"
                className="checkout-btn bg-orange text-white fw-6"
              >
                Checkout
              </button>
            </div>
           
            {/* Payment method div */}
            <MDBCard>
              <p>
                <strong>We accept</strong>
              </p>
              <MDBCardBody className="flex flex-wrap" style={{ gap: "0.5rem" }}>
                <MDBCardImage
                  className="me-2"
                  style={{ width: "45px" }}
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                  alt="Visa"
                />
                <MDBCardImage
                  className="me-2"
                  style={{ width: "45px" }}
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                  alt="American Express"
                />
                <MDBCardImage
                  className="me-2"
                  style={{ width: "45px" }}
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                  alt="Mastercard"
                />
                <MDBCardImage
                  className="me-2"
                  style={{ width: "45px" }}
                  src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                  alt="PayPal acceptance mark"
                />
              </MDBCardBody>
            </MDBCard>
          </div>
          {/* end of cart grid right */}
        </div>

        <div className="suggested-courses">
          <div className="suggest-title">
            <h2>You might also like</h2>
          </div>
          <div className="tabs">
            <div className="suggested-courses-list grid tabs-body">
              {courses
                .filter((course) => course.category === activeTab)
                .map((course) => (
                  <Course key={course.id} {...course} />
                ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </CartWrapper>
  );
};

// add the cart page
const NotFoundWrapper = styled.div`
  padding: 30px 0;
  font-weight: 600;
`;

const CartWrapper = styled.div`
  padding: 30px 0;
  .card-pg-title {
    padding: 20px 0 6px 0;
  }
  .cart-grid {
    row-gap: 40px;
    .cart-grid-left {
      margin-bottom: 30px;
    }

    .cart-clear-btn {
      span {
        margin-left: 6px;
      }
    }

    .cart-items-list {
      margin-top: 20px;
      row-gap: 12px;
    }
    .cart-total-value {
      font-size: 34px;
    }
    .checkout-btn {
      padding: 14px 28px;
      letter-spacing: 1px;
      margin-top: 12px;
      transition: var(--transition);
      border-radius: 1rem;
      &:hover {
        background-color: var(--clr-dark);
      }
    }
    .cart-total {
      padding-bottom: 50px;
    }

    @media screen and (min-width: 992px) {
      grid-template-columns: 70% 30%;
      column-gap: 32px;
    }
  }

  .tabs {
    margin-top: 16px;
    .tabs-head-item button {
      border: 1px solid rgba(0, 0, 0, 0.7);
      padding: 10px 13px;
      margin-right: 6px;
      transition: var(--transition);
      font-weight: 500;
      font-size: 15px;
      margin-bottom: 10px;
      border-radius: 1rem;

      &:hover {
        background-color: var(--clr-black);
        color: var(--clr-white);
      }
    }

    .tabs-body {
      margin-top: 32px;
    }

    @media screen and (min-width: 600px) {
      .tabs-body {
        display: grid;
        gap: 26px;
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media screen and (min-width: 992px) {
      .tabs-body {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media screen and (min-width: 1400px) {
      .tabs-body {
        grid-template-columns: repeat(4, 1fr);
      }
    }
  }
`;

export default CartPage;
