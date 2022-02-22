import { Row, Col, Figure } from 'react-bootstrap';

export default function AuthorIntro() {
  return (
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
  )
}