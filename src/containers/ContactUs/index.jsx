import React, { Fragment, useState } from "react";
import "./styles.scss";
import Menubar from "../../shared/components/Nav/Navbar";
import HeaderLayout from "../../shared/HeaderLayout";
import { Col, Container, Row } from "react-bootstrap";
import { addContact } from "../../shared/Services/contact";
import Message from "../../shared/components/Message";
import firebase from "../../shared/Services/firebase";
import Footer from "../Footer";
const ContactUs = (props) => {
  const schoolNameList = [
    { id: 1, name: "Rishaan International boarding school" },
    { id: 2, name: "Rishaan Sports Academy" },
  ];
  const [schoolName, setSchoolName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const contactSubmitHandler = async (e) => {
    e.preventDefault();

    if (!schoolName || !message || !name || !phone) {
      setError("All fields are required");
      return false;
    }
    setError("");
    const body = {
      schoolName,
      message,
      name,
      phone,
    };
    const ref = firebase.database().ref("/contact").push();

    await ref.set(body);
    await ref.on(
      "value",
      (data) => {
        console.log(data.val());
        // return true;
        setSuccess(true);
        //   history.push("/");
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <Fragment>
      <Menubar />
      <HeaderLayout title="Contact Us" />
      <Container>
        <Row>
          <Col xs={12} md={12}>
            {success ? (
              <Message message="We have received your query, we will get back to you soon" />
            ) : null}
            <div className="contact-form">
              <div style={{ textAlign: "center" }}>
                <img
                  src={require("../../assets/images/mail.png")}
                  style={{ width: "70px", height: "70px" }}
                />
              </div>
              <h2 className="contact-header">Contact Us</h2>
              <form>
                <select
                  placeholder="Select school name"
                  onChange={(e) => setSchoolName(e.target.value)}
                >
                  <option>--select school--</option>
                  {schoolNameList.map((value) => (
                    <option key={value.id} value={value.name}>
                      {value.name}
                    </option>
                  ))}
                </select>
                <input
                  placeholder="*Message"
                  className="input-style"
                  onChange={(e) => setMessage(e.target.value)}
                />
                <input
                  placeholder="*Name"
                  className="input-style"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  placeholder="*Mobile No."
                  className="input-style"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <button
                  className="contact-submit"
                  type="submit"
                  onClick={(e) => contactSubmitHandler(e)}
                >
                  Submit
                </button>
                <p className="alert-outline">{error}</p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ContactUs;
