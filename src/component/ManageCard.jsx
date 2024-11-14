import Card from "react-bootstrap/Card";

const ManageCard = ({ imgSrc, title }) => {
  return (
    <Card className="border border-0 d-flex flex-column justify-content-center align-items-center">
      <Card.Img variant="top" src={imgSrc} width={48} height={48} />
      <Card.Body>
        <Card.Title className=" fs-1 text-center mx-auto w-75  fw-dark text-dark-emphasis">
          {title}
        </Card.Title>
        <Card.Text className="ft-light fs-6  text-body-secondary">
          Our membership management software provides full automation of
          membership renewals and payments.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ManageCard;
