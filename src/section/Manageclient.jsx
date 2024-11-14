import Container from "react-bootstrap/Container";
import { clientdata } from "../constant";
import ManageCard from "../component/ManageCard";

const Manageclient = () => {
  return (
    <Container >
      <article className="text-center text-dark mt-5" data-aos="fade-down">
        <h1>
          Manage your entire community <p>in a single system</p>
        </h1>
        <p> Who is Nexcent suitable for?</p>
      </article>
      <div className="d-flex justify-content-between flex-lg-row flex-column mt-4" data-aos="fade-right">
        {clientdata.map((item) => (
            <ManageCard key={item.title} {...item} className="object-fit-contain" />
        ))}
      </div>
    </Container>
  );
};

export default Manageclient;
