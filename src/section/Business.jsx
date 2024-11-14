import { Container } from "react-bootstrap";
import { status } from "../constant";
import BusinessCard from "../component/BusinessCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const business = () => {
  return (
    <section className="bg-body-tertiary">
      <Container>
        <Row className="algin-item-center d-flex flex-lg-row flex-column justify-content-lg-between ">
          <Col md={6}>
            <article data-aos="fade-right">
              <h1 className="fw-bold text-secondry mt-5 ">
                Helping a local
                <span className="text-success d-block">  
                  business reinvent itself
                </span>
              </h1>
              <p>We reached here with our hardwork and dedication.</p>
            </article>
          </Col>
          <Col md={6}>
            <Row className=" row-cols-2  d-flex flex-lg-row flex-column justify-content-lg-between" data-aos="zoom-in">
              {status.map((item) => (
                  <BusinessCard
                    {...item} key={item.img}
                  />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default business;
