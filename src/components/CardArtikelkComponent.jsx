import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React from 'react';
import artikel from '../assets/artikel.jpg';
import Pagination from '../components/Pagination';

const CardListComponent = () => {
  return (
    <div className="container">
      <Row xs={1} md={4} className="g-4" style={{ marginBottom: 20}}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <Col sm>
            <Card className="text-center">
              <Card.Img variant="top" src={artikel} />
              <Card.Body>
                <Card.Title style={{ textAlign: 'left' }}>Card title</Card.Title>
                <Card.Text style={{ textAlign: 'left' }}>This is a longer card with supporting text below as a natural lead-in to additional content.</Card.Text>
                <Card.Link href="/detailArtikel" bsPrefix="card-btn" >Read More</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Pagination/>
    </div>
  );
};

export default CardListComponent;