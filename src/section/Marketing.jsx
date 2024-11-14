 
import { readMoreData } from "../constant";
import MarketCard from "../component/MarketCard";
import { Container } from "react-bootstrap";

const Marketing = () => {
  return (
    <section className="bg-white my-5 d-flex ">
      <Container>
        <article className="text-center" data-aos="zoom-in" >
          <h1>Caring is the new marketing</h1>
           
            The Nexcent blog is the best place to read about the lates
            membership insights,trends and more
            <p className="mb-0">
              See who's joining the community,read about how our community are
            </p>
            <p> increasing their membership income and lot‘s more.</p>
          </article>

        <figure className="d-flex flex-lg-row flex-column justify-content-lg-between">
          {readMoreData.map((item) => (
            <div
              className=" w-75  d-flex flex-column justify-content-center  algin-items-center text-center "data-aos="fade-down"
              key={item.title}>
              <MarketCard {...item}/>
            </div>
          ))}
        </figure>
      </Container>
    </section>
  );
};

export default Marketing;
