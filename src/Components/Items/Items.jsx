import React, { Fragment, useContext } from "react"
import { Table, Row } from "reactstrap";
import { BiTrash } from "react-icons/bi";
import { cartContext } from "../context/cartContext";
import { Link } from 'react-router-dom';
import $ from 'jquery';
import "../Cart/Cart.css";


function Items() {
    const { cartItems, onAdd, onDecrease, onremove } = useContext(cartContext);
    const Amount = cartItems
        ?.map((item) => item.Price * item.Count)
        .reduce((prev, curr) => prev + curr, 0);

    return (
        <div>   {cartItems.length > 0 ?
            <div className="cart-summary">

                <table id="example" class="sortable"

                >
                    <thead>
                        <tr>
                            <th  >Category</th>
                            <th >Product</th>
                            <th>Product Image</th>
                            <th>Quantity</th>
                            <th >Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    {cartItems.length > 0 &&
                        cartItems.map((item) => {
                            return <tbody>
                                <tr>
                                    <td sorttable_customkey="category">{item.CategoryName}</td>
                                    <td sorttable_customkey="category">{item.ProductName}</td>
                                    <td>
                                        <img
                                            src={item.ProductImage}
                                            alt="img"
                                            width="70"
                                            height="50"
                                            className="img-avatar"
                                        />
                                    </td>

                                    <td>
                                        <button className="dec-btn" onClick={() => onDecrease(item)}>-</button>
                                        {item.Count}
                                        <button className="inc-btn" onClick={() => onAdd(item)}>+</button>
                                    </td>
                                    <td sorttable_customkey="category">$ {item.Count * item.Price}</td>
                                    <td>
                                        <BiTrash size="25px" className="trash-icon" onClick={() => onremove(item)} />
                                    </td>
                                </tr>
                            </tbody>
                        })}
                </table>

                <div className="bill-part">
                    <Row className="row-part">
                        <div style={{ textAlign: "center", fontWeight: "700", fontSize: "18px" }}>Grand Total : $  {Amount} </div>

                    </Row>
                </div>

            </div>
            :
            <Fragment>

                <h3 style={{ textAlign: 'center', padding: '1rem', boxShadow: '-1px 5px 20px -8px #ddd', borderRadius: '0.5rem', fontWeight: 400, fontSize: "1rem" }}>No Cart Item Found
                    <Link to={`/`}> click here </Link> Continue shopping.</h3>
            </Fragment>
        }</div>


    )

}
export default Items;
