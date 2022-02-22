import { Image, Card, NavLink } from 'react-bootstrap';

const CardItem = ({ title, subtitle }) => {
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <Image
            src={'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar" />
          <div>
            <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
            <Card.Text className="card-date">Placeholder Date</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img
            src='https://via.placeholder.com/250'
            alt="Card image cap"
          />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <NavLink className="card-button">
        Read More
      </NavLink>
    </Card>
  );
}

export default CardItem;