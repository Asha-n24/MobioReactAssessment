
import _ from "lodash";
import React, { useContext, Fragment } from "react";
import { Col, Container, Row } from "reactstrap";
import * as IosIcons from "react-icons/io";
import Card from '../Common/Card'
import { productdata } from '../data'
import './Products.css';
import { cartContext } from "../context/cartContext";
import Header from '../Header/Header'
import { AddNotification } from "../Common/forms/notification"

function Products(props) {
    const { onAdd, cartItems } = useContext(cartContext);
    const[openNotification , setopenNotification]=React.useState(false)
    const[loading , setloading]=React.useState(true)
    const[isModalOpen , setisModalOpen]=React.useState(true)

    const ProceedItems = () => {
        if (localStorage.getItem("userName") == null) {
            setopenNotification(true)
            setloading(false)
            setisModalOpen(false)
          

        } else if (localStorage.getItem("userName") != null) {
            props.history.push({
                pathname: `/cart`,
            });
        }
    }
    const Amount = cartItems
        ?.map((item) => item.Price)
        .reduce((prev, curr) => prev + curr, 0);
    return (
        <Fragment>
            <Header />
            <AddNotification
                    visible={openNotification}
                    variant= "warning"
                    message={`Please Login for Checkout`}
                    onClose={() => setopenNotification(false)}
                />
            <div className={cartItems.length > 0 && 'overflowdiv'}>
                <Container id="containerpadding">
                    <div className="ptitle">
                        <h5 className="catprotilte">Products</h5>
                    </div>
                    <Row>
                        {props.history.location.state.ProductDetails.Products.map((p, i) => {

                            return <Col md={3} sm={12} className='mt-4'>
                                <Card
                                    prodname={p.ProductName}
                                    fixprice={p.productSellingPrice}
                                    offerprice={p.Price}
                                    prodcount={"/ Kg"}
                                    imgsource={p.ProductImage}
                                >
                                    {p.Offer === "Y" && <div class="">
                                        <div class="ribbon">
                                            <span>
                                                {" "}
                                                {p.OfferPrice}{" "}
                                                % OFF
                                            </span>
                                        </div>
                                    </div>}
                                    <div className="row text-center">
                                        <div className="col-md-12">
                                            <div className=" heart-cover-div">
                                                <div className="heart-div">
                                                    <input
                                                        id={`toggle-heart${i}`}
                                                        className="toggle-heart"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        for={`toggle-heart${i}`}
                                                        onClick={() => this.wishlistloginCheck(p)}
                                                        className="hrt-lbl"
                                                        aria-label="like"
                                                        title="Add To Wishlist"
                                                    >
                                                        ❤{" "}
                                                    </label>
                                                </div>
                                                <div className="cart-div">
                                                    <input
                                                        id={`toggle-cart${i}`}
                                                        className="toggle-cart"
                                                        type="checkbox"
                                                    />
                                                    <label
                                                        for={`toggle-cart${i}`}
                                                        className="cart-lbl"
                                                        title="Add To Cart"
                                                        onClick={() => onAdd(p)}
                                                    >
                                                        {" "}
                                                        <IosIcons.IoMdCart />{" "}
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        })
                        }
                    </Row>
                </Container>
            </div>
            {cartItems.length > 0 && <Row style={{ width: "100%" }}>
                <div className="proceeddiv">
                    <div className='disdiv'>
                        <Col sm={6} className='btnleft'>
                            $ {Amount}
                        </Col>
                        <Col sm={6} className='btnright' onClick={ProceedItems}>
                            <button type="button" class="btn btn-lg btn-success" >Proceed</button>
                        </Col>
                    </div>
                </div>
            </Row>}
        </Fragment>
    );
}

export default (Products);
