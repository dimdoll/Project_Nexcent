import React from "react";
import Container from "react-bootstrap/Container";
import { clientimg } from "../constant";

const feedback = () => {
  return (
    <section className="bg-body-tertiary pt-2 py-5">
      <Container>
        <div className=" d-flex flex-lg-row flex-column mt-5  ms-5 ">
          <img src="/feedback.svg" alt="img" data-aos="fade-right" />
          <div className=" mt-4  ">
            <article className="align-item-center ms-4" data-aos="fade-left">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
              <h5 className="text-success mt-3">Tim smith</h5>
              <p className="mt-3"> British Dragon Boat Racing Association</p>
            </article>
            <figure
              className="d-flex  row-cols-8 align-item-center  ms-4  flex-wrap justify-content-between"
              data-aos="fade-left"
            >
              {clientimg.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt="img"
                  className="object-fit-contain"
                />
              ))}
              <h4 className="text-success  "> Meet All Customer &#8594;</h4>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default feedback;
