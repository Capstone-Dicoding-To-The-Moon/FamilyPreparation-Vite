import { CardGroup, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import categorie from '../assets/cardCategorie.png';

const CardCategoriesComponent = () => {
  return (
    <Container xs={5} md={5} className="my-3 py-3">
      <Row xs={5} md={5} className="justify-content-center">
        {Array.from({ length: 5 }).map((_, idx) => (
          <Col className="colStyle">
            <Card className="text-white">
              <Card.Img src={categorie} alt="Card image" />
              <Card.ImgOverlay className="row align-items-end">
                <Card.Title className="text-center bg-costum text-body">Card title</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardCategoriesComponent;
