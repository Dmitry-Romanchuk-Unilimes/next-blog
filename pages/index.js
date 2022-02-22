
import { Container, Row, Col, Figure, Image, Card, NavLink } from 'react-bootstrap';
import Navbar from '../components/Navbar';

export default function Home() {

  return (
    <Container>
      <Navbar />
      <div className='blog-detail-page'>
        <Row>
          <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <Figure className="mb-4 admin-intro">
              <Figure.Image
                roundedCircle
                width={64}
                height={64}
                className="mr-3"
                src="https://th-thumbnailer.cdn-si-edu.com/5a79C6jJ8BrChMX5tgEKiMI_qqo=/1000x750/filters:no_upscale():focal(792x601:793x602)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/52/e4/52e44474-c2dc-41e0-bb77-42a904695196/this-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg"
                alt="Generic placeholder"
              />
              <Figure.Caption>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                  My name is Dmitry Romanchuk and I am an experienced software engineer.
                  and this is my blog page.
                </p>
              </Figure.Caption>
            </Figure>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr />
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
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
                  <Card.Body>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <NavLink href="#" className="card-button">
                  Read More
                </NavLink>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md="4">
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
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <NavLink className="card-button">
                  Read More
                </NavLink>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <NavLink href="#">courses</NavLink>{' | '}
          <NavLink href="#">github</NavLink>{' | '}
          <NavLink href="#">facebook</NavLink>
        </div>
      </footer>
    </Container>
  )
}