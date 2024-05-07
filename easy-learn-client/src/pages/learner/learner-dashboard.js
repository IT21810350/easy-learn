import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import NavBar from "../../components/nav-bar.js";
import Footer from "../../components/footer.js";

class LearnerDashboard extends React.Component {

    state = {};

    async componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
    }

    render() {
        return (
            <>
                <NavBar />
                <main ref="main">
                    <div className="position-relative">
                        {/* shape Hero */}
                        <section className="section section-lg section-shaped pb-250">
                            <div className="shape shape-style-1 shape-default">
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <Container className="py-lg-md d-flex">
                                <div className="col px-0">
                                    <Row>
                                        <Col lg="6">
                                            <h1 className="display-3 text-white">
                                                Welcome to Easy Learn
                                                <span>Educational Platform for Online Learning</span>
                                            </h1>
                                            <p className="lead text-white">
                                                Unlock endless learning possibilities with our Online Educational Platform. Dive into interactive courses, connect with experts, and advance your knowledge on-demand, anytime, anywhere.
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Container>
                            {/* SVG separator */}
                            <div className="separator separator-bottom separator-skew">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 2560 100"
                                    x="0"
                                    y="0"
                                >
                                    <polygon
                                        className="fill-white"
                                        points="2560 0 2560 100 0 100"
                                    />
                                </svg>
                            </div>
                        </section>
                        {/* 1st Hero Variation */}
                    </div>
                    <section className="section section-lg pt-lg-0 mt--200">
                        <Container>
                            <Row className="justify-content-center">
                                <Col lg="12">
                                    <Row className="row-grid">
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                                                        <i className="ni ni-check-bold" />
                                                    </div>
                                                    <h6 className="text-primary text-uppercase">
                                                        Courses
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Discover Mars up close with stunning photos from NASA's rovers.
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="primary"
                                                        tag={Link}
                                                        to="/mars-rover"
                                                    >
                                                        Explore
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                                                        <i className="ni ni-istanbul" />
                                                    </div>
                                                    <h6 className="text-success text-uppercase">
                                                        Lecture Materials
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Astronomy Picture of the Day: Daily celestial wonders and expert commentary.
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="success"
                                                        tag={Link}
                                                        to="/apod"
                                                    >
                                                        Explore
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                        <Col lg="4">
                                            <Card className="card-lift--hover shadow border-0">
                                                <CardBody className="py-5">
                                                    <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                                        <i className="ni ni-planet" />
                                                    </div>
                                                    <h6 className="text-warning text-uppercase">
                                                        Quizes
                                                    </h6>
                                                    <p className="description mt-3">
                                                        Earth Imagery: High-res satellite photos capturing our planet's beauty from space.
                                                    </p>
                                                    <Button
                                                        className="mt-4"
                                                        color="warning"
                                                        tag={Link}
                                                        to="/earth-imagery"
                                                    >
                                                        Explore
                                                    </Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                </main>
                <Footer />
            </>
        );
    }
}

export default LearnerDashboard;
