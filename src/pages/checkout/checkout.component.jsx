import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

// imort {} from '../../cart/cart-selectors';

import './checkout.styles.scss'

const CheckoutPage = () => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span className="">
                    Product
               </span>
            </div>
            <div className="header-block">
                <span className="">
                    Description
               </span>
            </div>
            <div className="header-block">
                <span className="">
                    Quantity
               </span>
            </div>
            <div className="header-block">
                <span className="">
                    Price
               </span>
            </div>
            <div className="header-block">
                <span className="">
                    Remove
               </span>
            </div>
        </div>
    </div>
)
// const mapStateToProps = createStructuredSelector({
//     cartItems: selectCartItems,
//     total: selectCartTotal
// });

export default connect()(CheckoutPage);