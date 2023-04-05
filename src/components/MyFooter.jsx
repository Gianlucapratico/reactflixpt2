import { Container, Row, Col, Button } from "react-bootstrap";

function MyFooter() {
  return (
    <div className=" text-white mt-5">
      <Container>
        <Row>
          <Col>
            <div className="row">
              <div className="col-12 footer-links">
                <p>Audio and Subtitles</p>
                <p>Media Center</p>
                <p>Privacy</p>
                <p>Contact us</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="row">
              <div className="col-12 footer-links">
                <p>Audio Description</p>
                <p>Investor Relations</p>
                <p>Legal Notices</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="row">
              <div className="col-12 footer-links">
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
              </div>
            </div>
          </Col>
          <Col>
            <div className="row">
              <div className="col-12 footer-links">
                <p>Gift Cards</p>
                <p>Terms of Use</p>
                <p>Corporate Information</p>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-left mb-2">
            <Button variant="sm" className="footer-button rounded-0 mt-3">
              Service Code
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-left mb-2 mt-2 copyright">
            © 1997-2022 Netflix, Inc.
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default MyFooter;
