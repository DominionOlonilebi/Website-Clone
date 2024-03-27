import React from "react";
import { Container, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
      {/* Navbar */}
      <div className="nav">
        <Navbar
          fixed="top"
          style={{ backgroundColor: "#fff" }}
          expand="lg"
          className="col-md-12 "
        >
          <Container>
            <Navbar.Brand href="#home ">
              <h2 className="p-2" style={{ fontSize: "30px" }}>
                <b>
                  Yummy{" "}
                  <span style={{ color: "rgb(211, 3, 3)", fontSize: "33px" }}>
                    .
                  </span>{" "}
                </b>
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav
                className="text-align-center mx-5"
                variant="underline"
                defaultActiveKey="/"
              >
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="/"
                >
                  <strong>Home</strong>{" "}
                </Nav.Link>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#about"
                >
                  <strong>About</strong>{" "}
                </Nav.Link>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#menu"
                >
                  <strong>Menu</strong>
                </Nav.Link>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#events"
                >
                  <strong>Events</strong>{" "}
                </Nav.Link>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#chefs"
                >
                  <strong>Chefs</strong>{" "}
                </Nav.Link>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#gallery"
                >
                  <strong>Gallery</strong>{" "}
                </Nav.Link>
                <NavDropdown
                  className=" fw-bold"
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  title="Dropdown"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">
                    Dropdown 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Deep Dropdown
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Dropdown 2
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Dropdown 3
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link
                  className="p-2 "
                  style={{ color: "rgb(136, 136, 136)", fontSize: "17px" }}
                  href="#contact"
                >
                  <strong>Contact</strong>{" "}
                </Nav.Link>
              </Nav>
              <Button
                className="mx-2"
                style={{
                  fontSize: "18px",
                  borderRadius: "30px",
                  padding: "5px 20px",
                  backgroundColor: "rgb(201, 2, 2)",
                  borderColor: "white",
                }}
              >
                Book a Table
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>

      {/* Background */}
      <header
        className=""
        style={{
          backgroundColor: "rgb(231, 229, 229)",
          color: "rgb(51, 51, 51)",
          border: "none",
        }}
      >
        <div className="container ">
          <div className="row">
            <div className="col-md-5 col-12 ">
              <h2
                className=" pb-4 mt-5"
                style={{ fontFamily: "cursive", color: "rgb(51, 51, 51)" }}
              >
                ENJOY YOUR HEALTHY DELICIOUS FOOD
              </h2>
              <p style={{ fontSize: "18px", color: "rgb(73, 73, 73)" }}>
                Sed autem lauda Voluptatem itaque ea consequatur eveniet. Eum
                quas beatae cumque ntium dolores. Voluptatem itaque ea
                consequatur eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <br />
              <Button
                className="px-5  mx-3 mb-3"
                style={{
                  fontSize: "18px",
                  borderRadius: "30px",
                  padding: "10px 25px",
                  backgroundColor: "rgb(201, 2, 2)",
                  borderColor: "white",
                }}
              >
                Book a Table
              </Button>
              <span className="header_btn ">
                <a
                  href="/"
                  style={{
                    fontSize: "20px",
                    color: "rgb(51, 51, 51)",
                    textDecoration: "none",
                  }}
                >
                  <b>Watch Video</b>
                </a>
              </span>
            </div>

            <div
              className="col-md-7 col-12 px-5 py-4 mt-5"
              style={{ textAlign: "end", alignItems: "end" }}
            >
              <img
                src="Images/hero-img.png"
                alt=""
                width="370px"
                height="370px"
              />
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div style={{ textAlign: "center" }}>
          <h6
            className=" mt-5 px-5 py-3"
            style={{ color: "rgb(136, 136, 136)" }}
          >
            ABOUT US
          </h6>
          <h3
            className="mb-3"
            style={{ textAlign: "center", fontFamily: "cursive" }}
          >
            LEARN MORE <span style={{ color: "rgb(201, 2, 2)" }}>ABOUT US</span>{" "}
          </h3>
          <br />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7 col-12 abt_img">
              <img src="Images/aboutme.jpg" alt="" width="94%" height="600px" />
            </div>

            <div className=" col-md-5 col-12" style={{ fontSize: "16px" }}>
              <p>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </i>
              </p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate trideta
                storacalaperda mastiro dolore eu fugiat nulla pariatur.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
              <img src="Images/about-2.jpg" alt="" width="100%" height="32%" />
            </div>
          </div>
        </div>

        {/* cards- why choose us */}
        <div
          className="container-fluid pt-5 mt-5 pb-5"
          style={{
            backgroundColor: "rgb(231, 229, 229)",
            color: "rgb(51, 51, 51)",
            borderColor: "white",
          }}
        >
          <div className="container  pb-5 pt-4">
            <div className="row justify-content-center">
              <div
                className="card col-md-3 col-12 me-4 mb-4"
                style={{
                  backgroundColor: "rgb(201, 2, 2)",
                  color: "white",
                  width: "345px",
                  height: "400px",
                  borderRadius: "0px",
                  border: "none",
                }}
              >
                <h3 className="choose_yummy py-4 mx-3">
                  <b>Why Choose Yummy?</b>
                </h3>
                <p className="yummy mx-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel necess
                  itatibus optio aditatibus optio ad corporis.
                </p>
                <Button
                  className="  mx-5"
                  style={{
                    backgroundColor: "rgba(233, 229, 229, 0.521)",
                    color: "white",
                    borderColor: "rgb(201, 2, 2)",
                    borderRadius: "30px",
                    alignItems: "center",
                  }}
                >
                  Learn More
                </Button>
              </div>

              <div
                className="card  col-md-2 col-3  me-4 my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                  height: "350px",
                }}
              >
                <h6 className="pt-5 yummys_text">
                  Corporis voluptates officia eiusmod
                </h6>
                <p className="yummys pt-2 text-secondary ">
                  Consequ untur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip Consequ untur sunt aut quasi enim
                  aliquam quae harum pariatur laboris nisi ut aliqui Conseq
                  uuntur sunt aut quasi enim aliquam quae harum pariatur laboris
                  nisi ut aliquip itatibus itatibus optio ad
                </p>
              </div>
              <div
                className="card  col-md-2 col-3  me-4 my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                  height: "350px",
                }}
              >
                <h6 className="pt-5 yummys_text">
                  Corporis voluptates officia eiusmod
                </h6>
                <p className="yummys pt-2 text-secondary ">
                  Consequ untur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip Consequ untur sunt aut quasi enim
                  aliquam quae harum pariatur laboris nisi ut aliqui Conseq
                  uuntur sunt aut quasi enim aliquam quae harum pariatur laboris
                  nisi ut aliquip itatibus itatibus optio ad
                </p>
              </div>
              <div
                className="card  col-md-2 col-3  me-4 my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                  height: "350px",
                }}
              >
                <h6 className="pt-5 yummys_text">
                  Corporis voluptates officia eiusmod
                </h6>
                <p className="yummys pt-2 text-secondary ">
                  Consequ untur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip Consequ untur sunt aut quasi enim
                  aliquam quae harum pariatur laboris nisi ut aliqui Conseq
                  uuntur sunt aut quasi enim aliquam quae harum pariatur laboris
                  nisi ut aliquip itatibus itatibus optio ad
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* An Image */}
      <section fluid className="dinning_section py-5">
        <div className="pb-5 pt-5">
          <div className="row justify-content-center">
            <div className=" col-2 mx-2">
              <h3>2850</h3>
            </div>
            <div className=" col-2 mx-2">
              <h3>1200</h3>
            </div>
            <div className=" col-2 mx-2">
              <h3>3400</h3>
            </div>
            <div className=" col-2 mx-2">
              <h3>1500</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Our menu section */}
      <section id="menu">
        <div style={{ textAlign: "center" }}>
          <p className="mt-5 " style={{ color: "grey", fontSize: "14px" }}>
            OUR MENU
          </p>
          <p
            className="display-6 menu_parag"
            style={{ fontFamily: "cursive", color: "rgb(51, 51, 51)" }}
          >
            Check Our{" "}
            <span style={{ color: "rgb(201, 2, 2)" }}>Yummy Menu</span>{" "}
          </p>
          <br />

          <section className="container mb-5">
            <div className="row justify-content-center">
              <div className=" col-2 mx-2">
                <h6>Starters</h6>
              </div>
              <div className=" col-2 mx-2">
                <h6>Breakfast</h6>
              </div>
              <div className=" col-2 mx-2">
                <h6>Lunch</h6>
              </div>
              <div className=" col-2 mx-2">
                <h6>Dinner</h6>
              </div>
            </div>
          </section>

          {/* varieties of food */}
          <div style={{ color: "grey", fontSize: "12px" }}>MENU</div>
          <div
            className="display-6 starters"
            style={{ color: "rgb(201, 2, 2)" }}
          >
            <b>Starters</b>{" "}
          </div>
        </div>
        <div className="container p-3 me-5">
          <div className="row py-3 justify-content-center">
            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-1.png" alt="" className="img-fluid" />
              <h6>
                <b>Magnam Tiste</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$5.95 </b>{" "}
              </h6>
            </div>
            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-2.png" alt="" className="img-fluid" />
              <h6>
                <b>Aut Luia</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$14.95 </b>{" "}
              </h6>
            </div>
            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-3.png" alt="" className="img-fluid" />
              <h6>
                <b>Est Eligendi</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$8.95 </b>{" "}
              </h6>
            </div>

            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-4.png" alt="" className="img-fluid" />
              <h6>
                <b>Eos Luibusdam</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$12.95 </b>{" "}
              </h6>
            </div>
            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-5.png" alt="" className="img-fluid" />
              <h6>
                <b>Eos Luibusdam</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$12.95 </b>{" "}
              </h6>
            </div>
            <div className="col-md-4 col-6 ">
              <img src="Images/menu-item-6.png" alt="" className="img-fluid" />
              <h6>
                <b>Laboriosam Direva</b>{" "}
              </h6>
              <p style={{ color: "grey", fontSize: "14px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h6 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$9.95 </b>{" "}
              </h6>
            </div>
          </div>
        </div>
        <br />
        <br /> <br />
        {/* Testimonials */}
        <section
          fluid
          className="testimonial_section py-3"
          style={{
            backgroundColor: "rgb(231, 229, 229)",
            color: "rgb(51, 51, 51)",
          }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 col-12    ">
                <br />
                <br />
                <p
                  style={{
                    color: "grey",
                    fontSize: "13px",
                    textAlign: "center",
                  }}
                >
                  TESTIMONIALS
                </p>
                <h4
                  className=""
                  style={{
                    fontFamily: "cursive",
                    color: "rgb(51, 51, 51)",
                  }}
                >
                  WHAT ARE THEY{" "}
                  <span style={{ color: "rgb(201, 2, 2)" }}>
                    SAYING ABOUT US
                  </span>{" "}
                </h4>

                <p>
                  <i>
                    Proin iaculis purus consequat sem cure digni ssim donec
                    porttitora entum suscipit rhoncus. Accusantium quam,
                    ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                    risus at semper.
                  </i>{" "}
                </p>
                <div>
                  <b>Saul Goodman</b>
                </div>
                <div style={{ color: "grey", fontSize: "16px" }}>
                  Ceo & Founder
                </div>
              </div>
              <div className="col-md-2 mt-5">
                <img
                  src="Images/testimonials-1.jpg"
                  alt=""
                  width="150px"
                  height="150px"
                  style={{ borderRadius: "50%" }}
                  className="mt-5"
                />
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>{" "}
        <br /> <br /> <br />
      </section>

      {/* Events section */}
      <section id="events ">
        <div style={{ textAlign: "center" }}>
          <p>EVENTS</p>
          <p
            style={{
              fontFamily: "cursive",
              color: "rgb(51, 51, 51)",

              textAlign: "center",
              className: "events_parag",
            }}
          >
            SHARE <span style={{ color: "rgb(201, 2, 2)" }}>YOUR MOMENTS</span>{" "}
            IN OUR RESTAURANT
          </p>
        </div>
        <br />

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4 col-7 mb-3">
              <img src="Images/myevents-1.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-4 col-7 mb-3">
              <img src="Images/myevents-2.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-4 col-7 mb-3">
              <img src="Images/myevents-3.jpg" alt="" className="img-fluid" />
            </div>
          </div>
        </div>
        <br />
        <br />
      </section>

      {/* Chef- card section */}
      <section id="chefs">
        <div
          style={{ backgroundColor: "rgb(231, 229, 229)", textAlign: "center" }}
        >
          <div className=" col-md-12 col-sm-12  pt-3">
            <div className="pt-5">CHEFS</div>
            <p
              style={{
                fontFamily: "cursive",
                color: "rgb(51, 51, 51)",
                className: "chefs_parag",
              }}
            >
              OUR <span style={{ color: "rgb(201, 2, 2)" }}>PROFESSIONAL</span>{" "}
              CHEFS
            </p>
          </div>

          <div className="container-fluid py-3">
            <div className="container mb-5">
              <div className="row justify-content-center">
                <div className=" col-md-4 col-10 ">
                  <div className="card border-0 mb-3">
                    <img
                      src="Images/mychefs-1.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "5px" }}
                    />
                    <br />
                    <h5>
                      <b>Walter White</b>
                    </h5>
                    <div style={{ color: "rgb(153, 153, 153)" }}>
                      Master Chef
                    </div>
                    <br />
                    <p
                      className="mx-4"
                      style={{ color: "rgb(103, 103, 103)", fontSize: "14px" }}
                    >
                      <i>
                        Velit aut quia fugit et et. Dolorum ea voluptate vel
                        tempore tenetur ipsa quae aut. Ipsum exercitationem iure
                        minima enim corporis et voluptate.
                      </i>{" "}
                    </p>
                    <br />
                  </div>
                </div>

                <div className=" col-md-4 col-10 ">
                  <div className="card border-0 mb-3">
                    <img
                      src="Images/mychefs-2.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "5px" }}
                    />
                    <br />
                    <h5>
                      <b>Sarah Johnson</b>
                    </h5>
                    <div style={{ color: "rgb(153, 153, 153)" }}>Patissier</div>
                    <br />
                    <p
                      className="card-text mx-4"
                      style={{ color: "rgb(103, 103, 103)", fontSize: "14px" }}
                    >
                      <i>
                        Quo esse repellendus quia id. Est eum et accusantium
                        pariatur fugit nihil minima suscipit corporis. Voluptate
                        sed quas reiciendis animi neque sapiente.
                      </i>{" "}
                    </p>
                    <br />
                  </div>
                </div>

                <div className=" col-md-4 col-10 ">
                  <div className="card border-0 mb-3">
                    <img
                      src="Images/mychefs-3.jpg"
                      alt=""
                      className="img-fluid"
                      style={{ borderRadius: "5px" }}
                    />
                    <br />
                    <h5>
                      <b>William Anderson</b>
                    </h5>
                    <div style={{ color: "rgb(153, 153, 153)" }}>Cook</div>
                    <br />
                    <p
                      className="mx-4"
                      style={{ color: "rgb(103, 103, 103)", fontSize: "14px" }}
                    >
                      <i>
                        Quo esse repellendus quia id. Est eum et accusantium
                        pariatur fugit nihil minima suscipit corporis. Voluptate
                        sed quas reiciendis animi neque sapiente.
                      </i>{" "}
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book a table */}
      <section id="book">
        <div className="container-fluid">
          <div style={{ textAlign: "center" }}>
            <h6
              className=" mt-5 px-5 py-3"
              style={{ color: "rgb(136, 136, 136)" }}
            >
              BOOK A TABLE
            </h6>
            <h3
              className="mb-3"
              style={{ textAlign: "center", fontFamily: "cursive" }}
            >
              BOOK <span style={{ color: "rgb(201, 2, 2)" }}>YOUR STAY</span>{" "}
              WITH US{" "}
            </h3>
            <br />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-4  form_div">
                <img
                  src="Images/reservation.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div
                className=" col-md-8 col-12 "
                style={{ backgroundColor: "rgb(231, 229, 229)" }}
              >
                {/* create a form */}
                <form action="" className="pt-4 pb-3 mx-4">
                  <div className="row pt-5">
                    <div className=" col-md-4 col-12 ">
                      <input
                        type="text"
                        className=" form-control border-0 mb-2"
                        placeholder="Your Name"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                    <div className="col-md-4 col-12  ">
                      <input
                        type="text"
                        className=" form-control border-0 mb-2"
                        placeholder="Your Email"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control border-0 mb-2"
                        placeholder="Your Place"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control border-0 mb-2"
                        placeholder="Date"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control border-0 mb-2"
                        placeholder="Time"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                    <div className="col-md-4 col-12">
                      <input
                        type="text"
                        className="form-control border-0 mb-2"
                        placeholder="No of people"
                        style={{
                          borderRadius: "0px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-12 ">
                      <textarea
                        type="text"
                        className="form-control pb-5 pt-2"
                        placeholder="Message"
                        style={{
                          borderRadius: "0px",
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-3" style={{ textAlign: "center" }}>
                    <Button
                      className="form-control"
                      style={{
                        fontSize: "14px",
                        borderRadius: "0px",

                        backgroundColor: "rgb(201, 2, 2)",
                        borderColor: "white",
                      }}
                    >
                      Book a Table
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />

      {/* Gallery section */}
      <section id="gallery">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(231, 229, 229)" }}
        >
          <div style={{ textAlign: "center" }}>
            <br />
            <h6 className=" mt-5 px-5 " style={{ color: "rgb(136, 136, 136)" }}>
              GALLERY
            </h6>
            <h3
              className="mb-3"
              style={{ textAlign: "center", fontFamily: "cursive" }}
            >
              CHECK <span style={{ color: "rgb(201, 2, 2)" }}>OUR GALLERY</span>
            </h3>
            <br />
          </div>
          <div className="container pb-5">
            <div className="row justify-content-center">
              <div className="col-md-2 col-6 mb-4">
                <img src="Images/gallery-7.jpg" alt="" className="img-fluid" />
              </div>

              <div className="col-md-2 col-6 mb-4">
                <img src="Images/gallery-8.jpg" alt="" className="img-fluid" />
              </div>

              <div className="col-md-2 col-6 mb-4">
                <img src="Images/gallery-1.jpg" alt="" className="img-fluid" />
              </div>

              <div className="col-md-2 col-6 mb-4">
                <img src="Images/gallery-2.jpg" alt="" className="img-fluid" />
              </div>

              <div className="col-md-2 col-12">
                <img src="Images/gallery-3.jpg" alt="" className="img-fluid" />
              </div>
            </div>
            <br />
          </div>
        </div>
      </section>

      {/* Contact us section */}
      <section id="contact">
        <div className="container">
          <div style={{ textAlign: "center" }}>
            <br />
            <h6
              className=" mt-5 px-5 pt-3"
              style={{ color: "rgb(136, 136, 136)" }}
            >
              CONTACT
            </h6>
            <h3
              className="mb-3"
              style={{ textAlign: "center", fontFamily: "cursive" }}
            >
              NEED HELP?{" "}
              <span style={{ color: "rgb(201, 2, 2)" }}>CONTACT US</span>
            </h3>
            <br />
          </div>
          <div className="row justify-content-center">
            <iframe
              title="goggle map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1701172451134!5m2!1sen!2sng"
              width="750"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div className="row justify-content-center">
            <div
              className="col-md-5 col-12  pt-3 px-5 mx-3 mb-3"
              style={{ backgroundColor: "rgb(231, 229, 229)" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Our Address</b>{" "}
              </h5>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div
              className="col-md-5 col-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Email Us</b>{" "}
              </h5>
              <p>contact@example.com</p>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div
              className="col-md-5 col-12  pt-3 px-5 mx-3 mb-3"
              style={{ backgroundColor: "rgb(231, 229, 229)" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Call Us</b>{" "}
              </h5>
              <p>+1 5589 55488 55</p>
            </div>
            <div
              className=" col-md-5 col-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Opening Hours</b>{" "}
              </h5>
              <p>Mon-Sat: 11AM - 23PM; Sunday: Closed</p>
            </div>
          </div>
          <br />
          <br />
          <br />

          {/* Contact form */}
          <div className="row">
            <div className="col-md-6 col-12 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            </div>
            <div className="col-md-6 col-12 ">
              <input
                type="text"
                className="form-control"
                placeholder="Your Email"
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-md-12 col-sm-12 ">
              <textarea
                type="text"
                className="form-control pb-5 pt-3"
                placeholder="Message"
              ></textarea>
            </div>
          </div>
          <br />
          <div className="pt-2" style={{ textAlign: "center" }}>
            <Button
              className=" mx-5"
              style={{
                fontSize: "12px",
                borderRadius: "30px",
                padding: "6px 20px",
                backgroundColor: "rgb(201, 2, 2)",
                borderColor: "white",
              }}
            >
              Send Message
            </Button>
          </div>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
      </section>

      {/* Footer section */}
      <section id="footer">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(25, 25, 26)",

            color: "#fff",
          }}
        >
          <div className="container pb-3 pt-3">
            <div className="row">
              <div className="col-md-3 col-6  ">
                <br />
                <h6>
                  <b>Address</b>
                </h6>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  A108 Adam Street
                </div>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  New York, NY 535022 - US
                </div>
              </div>
              <div className="col-md-3 col-6  ">
                <br />
                <h6>
                  <b>Reservations</b>
                </h6>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  <b>Phone:</b> +1 5589 55488 55
                </div>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  <b>Email:</b> info@ex.com
                </div>
              </div>
              <div className="col-md-3 col-6  ">
                <br />
                <h6>
                  <b>Opening Hours</b>
                </h6>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  <b>Mon-Sat: 11AM</b> - 23PM
                </div>
                <div
                  style={{ color: "rgb(136, 136, 136)" }}
                  className="footers"
                >
                  Sunday: Closed
                </div>
              </div>
              <div className="col-md-3 col-6  ">
                <br />
                <h6>
                  <b>Follow Us</b>
                </h6>
              </div>
            </div>
            <hr />
            <br />
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "rgb(136, 136, 136)", fontSize: "14px" }}>
                {" "}
                &copy; Copyright <b>Yummy.</b> All Rights Reserved
              </div>
              <div
                className="mb-3"
                style={{
                  textAlign: "center",
                  color: "rgb(136, 136, 136)",
                  fontSize: "12px",
                }}
              >
                Designed by Dominion
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
