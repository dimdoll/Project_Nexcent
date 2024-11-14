import Container from "react-bootstrap/Container";
import { clientimg } from "../constant";

const Client = () => {
  return (
    <Container className="bg-white py-5">
      <article className="text-center" data-aos="fade-down">
        <h1 className="text-secondary">Our Clients</h1>
        <p>We have been working with some Fortune 500+ Clients</p>
      </article>
      <figure className="d-flex align-item-center justify-content-between flex-wrap">
        {clientimg.map((item) => (
          <img
            key={item}
            src={item}
            alt="icon"
            width="48"
            height="48"
            className="object-fit-contain"
            data-aos="zoom-in"
          />
        ))}
      </figure>
    </Container>
  );
};

export default Client;
