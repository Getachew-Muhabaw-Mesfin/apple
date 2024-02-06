
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Image404 from "../../assets/404-found.webp";
const PageNotFound = () => {
  return (
    <Container>
      <Row className="justify-content-center mt-5 pt-4">
        <Col xs={12} md={8} lg={6}>
          <div className="text-center">
            <h2>Page Not Found</h2>
            <p>{`We couldn't find the page you're looking for.`}</p>
            <Image src={Image404} fluid />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PageNotFound;
