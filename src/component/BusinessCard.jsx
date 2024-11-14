import Card from 'react-bootstrap/Card';

const BusinessCard = ({img,title,number}) => {
  return (
    <Card className='my-2 border border-0 bg-body-tertiary'>
    <Card.Body className='d-flex algin-item-center gap-3'>
        <Card.Img
          variant="top"
          src={img}
          alt="img"
          style={{ objectFit: "cover", width: "48px", height: "48px" }} />
          <div className='d-flex flex-column'> 
          <Card.Title className='fs-2 text-dark' >{number}</Card.Title>
       <Card.Text className='fs-6 text-secondary'>{title}</Card.Text>
       </div>
      
    </Card.Body>
  </Card>
 
  )
}

export default BusinessCard;
