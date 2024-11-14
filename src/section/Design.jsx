import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Design = () => {
  return (
    <Container>
      <div className=" d-flex flex-lg-row flex-column my-4 ms-3 ">
        <img src="/useImg.svg" alt="img" data-aos="fade-right" />
        <article className=" ms-5" data-aos="fade-left">
          <h1 className="mt-4  ps-4">
            How to design your site
            <p>
              footer like <span className="text-success"> we did ?</span>
            </p>
          </h1>
          <p className="mt-3 ps-4">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button variant="success" size="lg" className="mt-4 ms-4">
            Learn More
          </Button>
        </article>
      </div>
    </Container>
  );
};

export default Design;
