import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import Sonnet from '../components/CardArtikelkComponent';

export default function KategoriArtikel () {
    return (
        <div class="card p-3">
            <h3 className="title">Kategori Artikel</h3>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row>
                    <Col sm >
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Kategori 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Kategori 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}