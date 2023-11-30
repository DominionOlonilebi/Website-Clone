import React from "react";
import { Container, Nav, NavDropdown, Navbar, Button } from "react-bootstrap";

const Home = () => {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#fff" }}>
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

      <header
        className="py-5"
        style={{
          backgroundColor: "rgb(231, 229, 229)",
          color: "rgb(51, 51, 51)",
          border: "none",
        }}
      >
        <div className="container py-5">
          <div className="row">
            <div className="col-md-5 col-sm-12 py-5">
              <h2
                className=" py-4"
                style={{ fontFamily: "cursive", color: "rgb(51, 51, 51)" }}
              >
                ENJOY YOUR HEALTHY DELICIOUS FOOD
              </h2>
              <p style={{ fontSize: "18px", color: "rgb(73, 73, 73)" }}>
                Sed autem laudantium dolores. Voluptatem itaque ea consequatur
                eveniet. Eum quas beatae cumque eum quaerat.
              </p>
              <br />
              <Button
                className="px-5"
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
              <span className="mx-5">
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
              className="col-md-7 col-sm-12 px-5 py-4"
              style={{ textAlign: "end", alignItems: "end" }}
            >
              <img
                src="Images/hero-img.png"
                alt=""
                width="390px"
                height="390px"
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
            <div className="col-md-8 col-sm-12">
              <img src="Images/aboutme.jpg" alt="" width="94%" height="700px" />
            </div>

            <div
              className="col-lg-4 col-md-8 col-sm-12"
              style={{ fontSize: "16px" }}
            >
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

        <div
          className="container-fluid pt-5 mt-5 pb-5"
          style={{
            backgroundColor: "rgb(231, 229, 229)",
            color: "rgb(51, 51, 51)",
            borderColor: "white",
          }}
        >
          <div className="container col-10 pb-5 pt-5">
            <div className="row">
              <div
                className="card col-lg-3 col-md-12 col-sm-12 me-4"
                style={{
                  backgroundColor: "rgb(201, 2, 2)",
                  color: "white",
                  width: "345px",
                  height: "430px",
                  borderRadius: "0px",
                  border: "none",
                }}
              >
                <h2 className="py-4 mx-3">
                  <b>Why Choose Yummy?</b>
                </h2>
                <p className="mx-3" style={{ fontSize: "17px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Duis aute irure dolor in reprehenderit Asperiores dolores sed
                  et. Tenetur quia eos. Autem tempore quibusdam vel
                  necessitatibus optio ad corporis.
                </p>
                <Button
                  className="btn btn-lg  mx-5"
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
                className="card col-lg-2 col-md-12 col-sm-12  me-4 my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                }}
              >
                <h4 className="pt-5">Corporis voluptates officia eiusmod</h4>
                <p className="pt-4 text-secondary">
                  Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                  laboris nisi ut aliquip
                </p>
              </div>

              <div
                className="card col-lg-2 col-md-12 col-sm-12  me-4 my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                }}
              >
                <h4 className="pt-5">Ullamco laboris ladore pan</h4>
                <p className="pt-4 text-secondary">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt
                </p>
              </div>

              <div
                className="card col-lg-2 col-md-12 col-sm-12  my-4"
                style={{
                  width: "215px",
                  borderRadius: "0px",
                  border: "none",
                  textAlign: "center",
                }}
              >
                <h4 className="pt-5 ">Labore consequatur incidid dolore</h4>
                <p className="pt-4 text-secondary">
                  Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                  maiores omnis facere
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-5">
          <img src="Images/stats-be.jpg" alt="" width="1320px" height="350px" />
        </div>
      </section>

      <section id="menu">
        <div style={{ textAlign: "center" }}>
          <p className="mt-5 " style={{ color: "grey", fontSize: "14px" }}>
            OUR MENU
          </p>
          <p
            className="display-6"
            style={{ fontFamily: "cursive", color: "rgb(51, 51, 51)" }}
          >
            Check Our{" "}
            <span style={{ color: "rgb(201, 2, 2)" }}>Yummy Menu</span>{" "}
          </p>
          <br />

          <div className="container-fluid">
            <div className="nav col-lg-6 col-md-12 col-sm-12 ">
              <Navbar expand="lg" className="col-md-12 ">
                <Container className="col-lg-4 col-md-12 col-sm-12  offset-8">
                  <Nav>
                    <Nav.Link
                      className="mx-2"
                      href="/"
                      style={{ color: "rgb(51, 51, 51)", fontSize: "20px" }}
                    >
                      Starters
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2"
                      href="/"
                      style={{ color: "rgb(51, 51, 51)", fontSize: "20px" }}
                    >
                      Breakfast
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2"
                      href="/"
                      style={{ color: "rgb(51, 51, 51)", fontSize: "20px" }}
                    >
                      Lunch
                    </Nav.Link>
                    <Nav.Link
                      className="mx-2"
                      href="/"
                      style={{ color: "rgb(51, 51, 51)", fontSize: "20px" }}
                    >
                      Dinner
                    </Nav.Link>
                  </Nav>
                </Container>
              </Navbar>
            </div>
          </div>
          <div style={{ color: "grey", fontSize: "14px" }}>MENU</div>
          <div className="display-6" style={{ color: "rgb(201, 2, 2)" }}>
            <b>Starters</b>{" "}
          </div>
        </div>
        <div className="container p-3 me-5">
          <div className="row py-3">
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-1.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Magnam Tiste</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$5.95 </b>{" "}
              </h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-2.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Aut Luia</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$14.95 </b>{" "}
              </h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-3.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Est Eligendi</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$8.95 </b>{" "}
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-4.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Eos Luibusdam</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$12.95 </b>{" "}
              </h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-5.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Eos Luibusdam</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$12.95 </b>{" "}
              </h4>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/menu-item-6.png"
                alt=""
                width="250px"
                height="240px"
              />
              <h4>
                <b>Laboriosam Direva</b>{" "}
              </h4>
              <p style={{ color: "grey", fontSize: "17px" }}>
                Lorem, deren, trataro, filede, nerada
              </p>
              <h4 style={{ color: "rgb(201, 2, 2)" }}>
                <b>$9.95 </b>{" "}
              </h4>
            </div>
          </div>
        </div>
        <br />
        <br /> <br />
        <div
          className="container-fluid py-5"
          style={{
            backgroundColor: "rgb(231, 229, 229)",
            color: "rgb(51, 51, 51)",
          }}
        >
          <div className="row">
            <div
              className="col-lg-6 col-md-12 col-sm-12  offset-3 pb-5"
              style={{ textAlign: "center" }}
            >
              <br />
              <br />
              <p style={{ color: "grey", fontSize: "13px" }}>TESTIMONIALS</p>
              <h1
                className=""
                style={{
                  fontFamily: "cursive",
                  color: "rgb(51, 51, 51)",
                  fontSize: "30px",
                }}
              >
                WHAT ARE THEY{" "}
                <span style={{ color: "rgb(201, 2, 2)" }}>SAYING ABOUT US</span>{" "}
              </h1>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12  offset-3"
              style={{ fontSize: "17px" }}
            >
              <p>
                <i>
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                </i>{" "}
              </p>
              <div>
                <b>Saul Goodman</b>
              </div>
              <div style={{ color: "grey", fontSize: "16px" }}>
                Ceo & Founder
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-8 ">
              <img
                src="Images/testimonials-1.jpg"
                alt=""
                width="180px"
                height="180px"
                style={{ borderRadius: "50%" }}
              />
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>{" "}
        <br /> <br /> <br />
      </section>

      <section id="events">
        <div
          className="col-lg-6 col-md-12 col-sm-12  offset-3"
          style={{ textAlign: "center" }}
        >
          <p>EVENTS</p>
          <p
            style={{
              fontFamily: "cursive",
              color: "rgb(51, 51, 51)",
              fontSize: "30px",
            }}
          >
            SHARE <span style={{ color: "rgb(201, 2, 2)" }}>YOUR MOMENTS</span>{" "}
            IN OUR RESTAURANT
          </p>
        </div>
        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/myevents-1.jpg"
                alt=""
                width="437px"
                height="590px"
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/myevents-2.jpg"
                alt=""
                width="437px"
                height="590px"
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 ">
              <img
                src="Images/myevents-3.jpg"
                alt=""
                width="437px"
                height="590px"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>

      <section id="chefs">
        <div
          style={{ backgroundColor: "rgb(231, 229, 229)", textAlign: "center" }}
        >
          <div className="col-lg-6 col-md-12 col-sm-12  offset-3 pt-5">
            <div className="pt-5">CHEFS</div>
            <p
              style={{
                fontFamily: "cursive",
                color: "rgb(51, 51, 51)",
                fontSize: "30px",
              }}
            >
              OUR <span style={{ color: "rgb(201, 2, 2)" }}>PROFESSIONAL</span>{" "}
              CHEFS
            </p>
          </div>

          <div className="container-fluid py-3">
            <div className="container mb-5">
              <div className="row ">
                <div className=" col-lg-4 col-md-12 col-sm-12 ">
                  <div className="card" style={{ width: "362px" }}>
                    <img
                      src="Images/mychefs-1.jpg"
                      alt=""
                      width="360px"
                      height="357px"
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

                <div className=" col-lg-4 col-md-12 col-sm-12 ">
                  <div className="card" style={{ width: "362px" }}>
                    <img
                      src="Images/mychefs-2.jpg"
                      alt=""
                      width="360px"
                      height="357px"
                      style={{ borderRadius: "5px" }}
                    />
                    <br />
                    <h5>
                      <b>Sarah Jhonson</b>
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

                <div className=" col-lg-4 col-md-12 col-sm-12 ">
                  <div className="card" style={{ width: "362px" }}>
                    <img
                      src="Images/mychefs-3.jpg"
                      alt=""
                      width="360px"
                      height="357px"
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
                        Vero omnis enim consequatur. Voluptas consectetur unde
                        qui molestiae deserunt. Voluptates enim aut architecto
                        porro aspernatur molestiae modi.
                      </i>{" "}
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              <div className="col-lg-4 col-md-12 col-sm-12 ">
                <img
                  src="Images/reservation.jpg"
                  alt=""
                  width="450px"
                  height="560px"
                />
              </div>
              <div
                className="col-lg-8 col-md-12 col-sm-12 "
                style={{ backgroundColor: "rgb(231, 229, 229)" }}
              >
                <form action="">
                  <br />
                  <br />
                  <br />{" "}
                  <div className="row pt-4">
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="Your Name"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="Your Email"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="Your Place"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="Date"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="Time"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                    <div className="col-lg-2 col-md-6 col-sm-6  mx-5">
                      <input
                        type="text"
                        className="px-3 py-4"
                        placeholder="# of people"
                        style={{
                          width: "185px",
                          height: "33px",
                          border: "none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="row pt-3">
                    <div className="col-lg-6 col-md-12 col-sm-12  mx-5">
                      <textarea
                        type="text"
                        className="px-3 py-2"
                        placeholder="Message"
                        style={{
                          width: "630px",
                          height: "150px",
                          border: "none",
                        }}
                      ></textarea>
                    </div>
                  </div>
                  <div className="pt-2" style={{ textAlign: "center" }}>
                    <Button
                      className="px-5 mx-5"
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
                  </div>
                  <br />
                  <br />
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />

      <section id="gallery">
        <div
          className="container-fluid"
          style={{ backgroundColor: "rgb(231, 229, 229)" }}
        >
          <div style={{ textAlign: "center" }}>
            <br />
            <h6
              className=" mt-5 px-5 pt-3"
              style={{ color: "rgb(136, 136, 136)" }}
            >
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
          <div className="container py-5 ">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-sm-6  mx-3">
                <img
                  src="Images/gallery-7.jpg"
                  alt=""
                  width="200px"
                  height="130px"
                />
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6  mx-3">
                <img
                  src="Images/gallery-8.jpg"
                  alt=""
                  width="200px"
                  height="130px"
                />
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6  mx-3">
                <img
                  src="Images/gallery-1.jpg"
                  alt=""
                  width="200px"
                  height="130px"
                />
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6  mx-3">
                <img
                  src="Images/gallery-2.jpg"
                  alt=""
                  width="200px"
                  height="130px"
                />
              </div>

              <div className="col-lg-2 col-md-6 col-sm-6  mx-3">
                <img
                  src="Images/gallery-3.jpg"
                  alt=""
                  width="200px"
                  height="130px"
                />
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </section>

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
          <div className="col-lg-12 col-md-12 col-sm-12">
            <iframe
              title="goggle map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7914.061118635292!2d3.8813!3d7.350465!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d940d6ae62f%3A0x56d4491dd5ea662f!2sMolete%20Baptist%20Church%20Ibadan!5e0!3m2!1sen!2sng!4v1701172451134!5m2!1sen!2sng"
              width="1113"
              height="350"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <br />
          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)", width: "538px" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Our Address</b>{" "}
              </h5>
              <p>A108 Adam Street, New York, NY 535022</p>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)", width: "538px" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Email Us</b>{" "}
              </h5>
              <p>contact@example.com</p>
            </div>
          </div>
          <br />

          <div className="row">
            <div
              className="col-lg-5 col-md-12 col-sm-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)", width: "538px" }}
            >
              <h5 style={{ color: "grey" }}>
                <b>Call Us</b>{" "}
              </h5>
              <p>+1 5589 55488 55</p>
            </div>
            <div
              className="col-lg-5 col-md-12 col-sm-12  pt-3 px-5 mx-3"
              style={{ backgroundColor: "rgb(231, 229, 229)", width: "538px" }}
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

          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <input
                type="text"
                className="px-3 py-4"
                placeholder="Your Name"
                style={{ width: "540px", height: "33px" }}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <input
                type="text"
                className="px-3 py-4"
                placeholder="Your Email"
                style={{ width: "540px", height: "33px" }}
              />
            </div>
          </div>
          <br />

          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <input
                type="text"
                className="px-3"
                placeholder="Subject"
                style={{ width: "1110px", height: "43px" }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <textarea
                type="text"
                className="px-3"
                placeholder="Message"
                style={{ width: "1110px", height: "143px" }}
              ></textarea>
            </div>
          </div>
          <br />
          <div className="pt-2" style={{ textAlign: "center" }}>
            <Button
              className="px-5 mx-5"
              style={{
                fontSize: "18px",
                borderRadius: "30px",
                padding: "10px 25px",
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

      <section id="footer">
        <div
          className="container-fluid"
          style={{
            backgroundColor: "rgb(25, 25, 26)",
            height: "280px",
            color: "#fff",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12 col-sm-12  pt-3">
                <br />
                <h6>
                  <b>Address</b>
                </h6>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  A108 Adam Street
                </div>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  New York, NY 535022 - US
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12  pt-4">
                <br />
                <h6>
                  <b>Reservations</b>
                </h6>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  <b>Phone:</b> +1 5589 55488 55
                </div>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  <b>Email:</b> info@example.com
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12  pt-4">
                <br />
                <h6>
                  <b>Opening Hours</b>
                </h6>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  <b>Mon-Sat: 11AM</b> - 23PM
                </div>
                <div style={{ color: "rgb(136, 136, 136)" }}>
                  Sunday: Closed
                </div>
              </div>
              <div className="col-lg-3 col-md-12 col-sm-12  pt-4">
                <br />
                <h6>
                  <b>Follow Us</b>
                </h6>
              </div>
            </div>
            <hr />
            <br />
            <div style={{ textAlign: "center" }}>
              <div style={{ color: "rgb(136, 136, 136)", fontSize: "16px" }}>
                {" "}
                &copy; Copyright <b>Yummy.</b> All Rights Reserved
              </div>
              <div
                className="mb-3"
                style={{
                  textAlign: "center",
                  color: "rgb(136, 136, 136)",
                  fontSize: "14px",
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
