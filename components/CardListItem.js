import Link from 'next/link';
import { Image, Card, NavLink } from 'react-bootstrap';

const CardListItem = ({ title, subtitle, image, date, author, slug }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <Image
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar" />
          <div>
            <Card.Title className="font-weight-bold mb-1">{author?.name || 'Anonymous'}</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      {
        slug &&
        <Link href={`/blogs/${slug}`} passHref>
          <NavLink className="card-button">
            Read More
          </NavLink>
        </Link>
      }
    </Card>
  )
}

export default CardListItem;