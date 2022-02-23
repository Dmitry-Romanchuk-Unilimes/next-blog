import { urlFor } from 'lib/api';
import Link from 'next/link';
import { Image, Card, NavLink } from 'react-bootstrap';

const CardItem = ({ title, subtitle, image, date, author, slug, mode = 'normal' }) => {
  return (
    <Card className={`fj-card ${mode}`}>
      <div className={`card-body-wrapper ${!image ? 'no-image' : ''}`}>
        <Card.Header
          className="d-flex flex-row">
          <Image
            src={author?.avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle mr-3"
            height={50}
            width={50}
            alt="avatar" />
          <div>
            {
              mode === 'placeholder' ?
                <>
                  <Card.Title className="font-weight-bold mb-1">Placeholder Title</Card.Title>
                  <Card.Text className="card-date">Placeholder Date</Card.Text>
                </> :
                <>
                  <Card.Title className="font-weight-bold mb-1">{author?.name || 'Anonymous'}</Card.Title>
                  <Card.Text className="card-date">{date}</Card.Text>
                </>
            }
          </div>
        </Card.Header>
        <div className="view overlay">
          {
            mode === 'placeholder' ?
              <div className='image-placeholder'></div> :
              image &&
              <Card.Img
                src={urlFor(image).height(300).crop('center').fit('clip').url()}
                alt="Card image cap"
              />
          }
        </div>
        <Card.Body>
          {
            mode === 'placeholder' ?
              <>
                <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                <Card.Text>Placeholder Subtitle</Card.Text>
              </>
              :
              <>
                <Card.Title className="card-main-title">{title}</Card.Title>
                <Card.Text>{subtitle}</Card.Text>
              </>
          }
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
  );
}

export default CardItem;