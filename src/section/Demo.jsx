import React from "react";
import Button from "react-bootstrap/Button";

const Demo = () => {
  return (
    <section className="mt-5 pt-5 flex-lg-row flex-column  ">
      <article
        className="text-center  py-5 mt-5 bg-body-tertiary"
        data-aos="zoom-out"
      >
        <h1 className="fw-bold fs-1">
          Pellentesque suscipit
          <p> fringilla libero eu.</p>
        </h1>
        <Button variant="success" className="text-white mt-4 btn-lg ">
          Get Demo &#8594;
        </Button>
      </article>
    </section>
  );
};

export default Demo;
