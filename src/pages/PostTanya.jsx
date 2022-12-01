import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Container className="py-5">
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="underline mx-auto mt-1"></div>
                        <main className="mainContent">
                            <div className="content">
                                <div className="col-md-9" style={{ margin: 'auto'}}>
                                    <Card className="mt-4">
                                        <Card.Body className="text-center">
                                            <Card.Text style={{ textAlign: 'left'}}>
                                                <Form>
                                                    <Form.Group as={Row} className="mb-3" controlId="title">
                                                        <Form.Label column sm="2">
                                                            Judul Diskusi
                                                        </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control type="text"  />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="author">
                                                        <Form.Label column sm="2">
                                                            Tanggal
                                                        </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control type="text" />
                                                        </Col>
                                                    </Form.Group>
                                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                                        <Form.Label column sm="2">
                                                            Content
                                                        </Form.Label>
                                                        <Col sm="10">
                                                            <Form.Control as="textarea" rows={10} />
                                                        </Col>
                                                    </Form.Group>
                                                    <Button variant="primary" type="submit" className='btnUpdate'>
                                                        Buat Diskusi
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

export default Home;
