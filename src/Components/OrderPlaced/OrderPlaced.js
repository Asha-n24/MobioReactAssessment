
import React, { Fragment} from "react";
import order from '../../Images/order.png'
import "./OrderPlaced.css";


function OrderPlaced() {

    return (
        <Fragment>
            <div className='container'>
                <div className="Ordercard">
                    <div className='text-center'>
                        <img src={order} className='orderimage' alt="order" />
                        <div className="ordertitle">Your Order is Completed!</div>
                        <div className="ordersubtitle">You will be receiving a conformation mail with Order Details.</div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default OrderPlaced;
