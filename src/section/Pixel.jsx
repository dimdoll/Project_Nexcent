import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Pixel = () => {
  return (
    <Container className="  d-flex   flex-lg-row flex-column justify-content-center align-item-center my-5 gap-5 ">
      <img src="/pixelgrade.svg" alt="img" data-aos="fade-right" />
      <div className="w-50 ms-auto" data-aos="fade-left">
        <article>
          <h1 className="fw-bold text-dark-emphasis lh-base">
            The unseen of spending three years at
            <span className="text-success"> Pixelgrade</span>
          </h1>
          <p className="ft-light fs-6 text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button variant="success" size="lg" className="mt-3">
            Learn More
          </Button>
        </article>
      </div>
    </Container>
  );
};

export default Pixel;
