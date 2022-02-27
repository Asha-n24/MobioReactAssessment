
import React, { Fragment, useContext, useState } from "react";
import { Col, Row, } from "reactstrap";
import { TextInput } from "../Common/forms/inputField";
import { FaUserCircle,FaAddressCard,FaMailBulk } from "react-icons/fa";

import "./Address.css";
import { cartContext } from "../context/cartContext";


function Address() {
  const { cartItems } = useContext(cartContext);
  const [Cod, setCod] = useState(false);
  const Amount = cartItems
    ?.map((item) => item.Price * item.Count)
    .reduce((prev, curr) => prev + curr, 0);

  const CheckboxValue = (e) => {

    if (e.target.checked) {
      setCod(true);
      cartItems.map((value, index) => {
        value.Payment = "CashonDelivery"
      });
     

    } else {
      setCod(false)
      cartItems.map((value, index) => {
        value.Payment = "none"
      });
  

    }
  }
  return (
    <Fragment>
      <div className='container'>
        <div className="addresscard">
          <Row>
            <Col sm={6}>
              <div className='add-title'>Billing Address</div>
              <form>
                <Row>
                  <Col sm={6}><TextInput className="gog"
                    placeholder="First Name"
                    icon={<FaUserCircle color="green" size="18px" />}
                    required={true}
                    field="firstName"  />
                  </Col>
                  <Col sm={6}><TextInput class="form-control" placeholder='Last Name' 
                   icon={<FaUserCircle color="green" size="18px" />}
                   required={true}
                   field="lastName" />
                  </Col>
                </Row>
                <Row className="mt-4 mb-2">
                  <Col sm={12}><TextInput type='email' class="form-control" placeholder='Email' 
                   icon={<FaMailBulk color="green" size="18px" />}
                   required={true}
                   field="email" /></Col>
                </Row>
                <Row className="mt-4 mb-2">
                  <Col sm={12}><TextInput class="form-control" placeholder='Address'
                   icon={<FaAddressCard color="green" size="18px" />}
                   required={true}
                   field="address"  /></Col>
                </Row>

              </form>
            </Col>
            <Col sm={1}>
              <div className="verticalline"></div>
            </Col>
            <Col sm={5}>
              <div className='add-title'>Payment Method</div>
              <div className="cod mt-4"><input type="checkbox" id="checkboxOne" value="Cash on Delivery"
                onChange={(e) => CheckboxValue(e)} /><label className="checktitle" for="checkboxOne">Cash on Delivery</label></div>
              {Cod === true && Amount != 0 && <div className="findiv">${Amount}</div>}
            </Col>
          </Row>
        </div>
      </div>
    </Fragment>
  );
}

export default Address;
