import React, { createContext } from "react"
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
} from "react-bootstrap"
import Modal from "react-modal"
import Resume1 from "./resume/Resume1"

export default function FormDetails() {
  const test22 = createContext("")

  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log("first")
  }

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <Container className="mt-5">
      <Row>
        <Col className="" lg={9}>
          <Row>
            <Col lg={6}>
              <h4 className="text-white">About</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Number" />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="About yourself"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
            <Col lg={6}>
              <h4 className="text-white">Skills</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Skill1" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Skill2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Skill3" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Skill4" />
              </Form.Group>
            </Col>
          </Row>

          {/* experience */}

          <Row className="mt-5">
            <Col
              lg={6}
              className="rounded"
              style={{ border: "2px solid #fff", padding: "40px" }}
            >
              <h4 className="text-white">Experience1</h4>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3 w-full d-flex justify-content-center align-items-center flex-column">
                  <Form.Check
                    className="rounded-2 text-white text-center w-50"
                    style={{ border: "3px solid" }}
                    required
                    label="Currently Working"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 1" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 3" />
              </Form.Group>
            </Col>

            <Col
              lg={6}
              className="rounded"
              style={{ border: "2px solid #fff", padding: "40px" }}
            >
              <h4 className="text-white">Experience1</h4>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Name" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col className="mb-3 w-full d-flex justify-content-center align-items-center flex-column">
                  <Form.Check
                    className="rounded-2 text-white text-center w-50"
                    style={{ border: "3px solid" }}
                    required
                    label="Currently Working"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Job Title" />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="Company Name" />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 1" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 2" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="number" placeholder="Job Description 3" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mt-5 mb-5">
            <Col lg={6}>
              <h4 className="text-white">Education</h4>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Name of the Degree/Course"
                />
              </Form.Group>
              <FloatingLabel
                controlId="floatingTextarea2"
                label="Degree/Certificaiton details"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
            </Col>
          </Row>
        </Col>
        <Col className="bg-primary" lg={3}>
          <Resume1 />
          {/* <div>
            <div onClick={openModal}>click me</div>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
              <button onClick={closeModal}>close</button>
              <div>I am a modal</div>
              <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
              </form>
            </Modal>
          </div> */}
        </Col>
      </Row>
    </Container>
  )
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}
