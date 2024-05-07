import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


import Footer from "../../components/footer.js";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class LearnerSignUp extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      FirstName: "",
      LastName: "",
      PersonalEmail: "",
      Password: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSignUp() {
    try {
      const { FirstName, LastName, PersonalEmail, Password } = this.state;

      const response = await axios.post("http://localhost:4000/learner-signup", {
        FirstName,
        LastName,
        PersonalEmail,
        Password,
      });

      console.log(response.data);

      if (response.data.success) {

        toast.success("Signup successful!", {
          position: 'top-right',
          autoClose: 600,
          onClose: ()=> {
            window.location.href = "/";
          }
        });

      }

    } catch (error) {
      console.error("Error signing up:", error);
    }
  }

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <main ref="main">
          <section className="section section-shaped section-lg">
            <div className="shape shape-style-1 bg-gradient-default">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            <Container className="pb-lg-2">
              <Row className="justify-content-center">
                <Col lg="5">
                  <Card className="bg-secondary shadow border-0">
                    <CardBody className="px-lg-5 py-lg-5">
                      <div className="text-center text-muted mb-4">
                        <h3>Sign up</h3>
                      </div>
                      <Form role="form">

                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="First Name"
                              type="text"
                              name="FirstName"
                              value={this.state.FirstName}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-hat-3" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Last Name"
                              type="text"
                              name="LastName"
                              value={this.state.LastName}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative mb-3">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-email-83" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Personal Email"
                              type="email"
                              name="PersonalEmail"
                              value={this.state.PersonalEmail}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>

                        <FormGroup>
                          <InputGroup className="input-group-alternative">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="ni ni-lock-circle-open" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="password"
                              autoComplete="off"
                              name="Password"
                              value={this.state.Password}
                              onChange={this.handleInputChange}
                            />
                          </InputGroup>
                        </FormGroup>
                        <div className="text-muted font-italic">
                          <small>
                            password strength:{" "}
                            <span className="text-success font-weight-700">
                              strong
                            </span>
                          </small>
                        </div>
                        <div className="text-center">
                          <Button
                            className="mt-4"
                            color="primary"
                            type="button"
                            onClick={this.handleSignUp}
                          >
                            Register as a Learner
                          </Button>
                        </div>
                      </Form>
                    </CardBody>
                  </Card>
                  <Row className="mt-3">
                    <Col xs="6">
                      <Link className="text-light" to="/">
                        <small>Already have an account?</small>
                      </Link>
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

export default LearnerSignUp;
