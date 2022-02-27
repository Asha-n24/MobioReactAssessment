
import _ from "lodash";
import React, { useContext, Fragment } from "react";
import {  Container } from "reactstrap";
import { productdata } from '../data'
import './Home.css';
import { cartContext } from "../context/cartContext";
import Banner from '../../Images/Banner.jpg'
import Banner1 from '../../Images/Banner1.png'
import Banner2 from '../../Images/Banner2.png'
import Header from '../Header/Header'


function Home(props) {
  const { cartItems } = useContext(cartContext);
  const SelectedCategory = (data) =>{
    props.history.push({
      pathname: `/products`,
      state: {
        ProductDetails: data,

      },
    });
  }
  return (
    <Fragment>
      <Header />
      <div id='home'
        className="container-fluid"
        style={{ height: "90vh", margin: "0px", padding: "0px" }}
      >
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner" style={{ height: "90vh" }}>
            <div class="carousel-item active">
              <img src={Banner} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
            </div>
            <div class="carousel-item">
              <img src={Banner1} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
            </div>
            <div class="carousel-item">
              <img src={Banner2} class="d-block w-100" alt="..." style={{ height: "90vh" }} />
            </div>
          </div>
        </div>

      </div>
      <div className="proback">
      <Container id='products'>
      <div className="all_title">
            <h5 className="cattilte">Products Catalog</h5>
          </div>

          <div className="categorycards">
            {
              productdata.length > 0 &&
              productdata?.map((category, index) => {
                return (
                  <div
                    className="categorycardsdiv"
                    onClick={() => SelectedCategory(category)}
                  >
                    <div className="cat_cardbody">
                      <div className="cat_img">
                        <img src={category.Image} alt="image" />
                      </div>
                      <div className="cat_footer">
                        <div className="catname_footer">
                          {category.CategoryName}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

          
          </div>
      </Container>
      </div>
    </Fragment>
  );
}

export default (Home);
