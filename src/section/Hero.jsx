import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <section className="bg-body-tertiary py-5">
      <Container className="d-flex align-items-center justify-content-between flex-lg-row flex-column">
        <article data-aos="fade-right">
          <h1 className="w-75 fs-1 fw-bold">
            Lessons and insights{" "}
            <span className="text-success">from 8 years</span>
          </h1>
          <p>
            Where to grow your business as a photographer: site or social media?
          </p>
          <Button variant="success" size="lg" className="mt-5">
            Register
          </Button>
        </article>
        <img
          src="/HeroImg.svg"
          alt="Hero"
          className="w-auto h-auto object-fit-contain"
          data-aos="fade-left"
        />
      </Container>
    </section>
  );
};

export default Hero;
