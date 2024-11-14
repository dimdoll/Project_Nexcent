import Card from "react-bootstrap/Card";

const MarketCard = ({ imgSrc, title }) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Body className="p-0 m-0">
        <Card.Img
          variant="top"
          src={imgSrc}
          height={305}
          width={368}
          className="object-fit-cover w-100 h-100"
        />
        <div className="px-3 py-5 w-75 shadow text-centeralign-item-center  bg-white position-absolute  top-100 start-50 translate-middle rounded-3">
          <Card.Title className="fs-4"> {title}</Card.Title>
          <p className="text-success mt-4"> Read more →</p>
        </div>
      </Card.Body>
    </Card>
  );
};

export default MarketCard;
