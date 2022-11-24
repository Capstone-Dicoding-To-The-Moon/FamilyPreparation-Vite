import { Container } from 'react-bootstrap';
import HeroElement from '../components/HeroElement';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import PhotoProfile from '../assets/profile.png';

export default function profile () {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container className="py-5">
        <HeroElement />
        <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="underline mx-auto"></div>
                            <main className="mainContent">
                                <div class="content" >
                                    <div className="col-md-12">
                                        <Card>
                                            <Card.Body>
                                                <Card.Text>
                                                    <Form>
                                                        <Form.Group controlId="formFile" className="text-center mb-3">
                                                            <Card.Img variant="top" src={ PhotoProfile } className="photoProfile" />
                                                            <Form.Control type="file" className="chooseFile" />
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                            <Form.Label column sm="2">
                                                            Nama
                                                            </Form.Label>
                                                            <Col sm="10">
                                                            <Form.Control type="text" placeholder="Nama" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                            <Form.Label column sm="2">
                                                            Email
                                                            </Form.Label>
                                                            <Col sm="10">
                                                            <Form.Control type="text" placeholder="Email" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                            <Form.Label column sm="2">
                                                            No Telepon
                                                            </Form.Label>
                                                            <Col sm="10">
                                                            <Form.Control type="number" placeholder="noTelepon" />
                                                            </Col>
                                                        </Form.Group>
                                                        <Button variant="primary" type="submit" className='btnUpdate'>
                                                            Submit
                                                        </Button>
                                                    </Form>
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section> 
      </Container>
    </div>
  );
};
