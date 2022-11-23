import React from "react";
import HeroElement from '../components/HeroElement';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';

export default function About () {
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
                                    <div class="content">
                                        <div className="col-md-12">
                                            <Card className="mt-4">
                                                <Card.Body className="text-center">
                                                <Card.Text style={{ textAlign: 'left'}}>
                                                    Sebentar-sebentar menangis. Menghadapi anak yang mudah menangis memang tidak mudah.Untuk balita sensitif, menangis masih menjadi salah satu bentuk komunikasi. Mereka tidak bisa menyampaikan apa yang mereka maksud sehingga pecahlah tangisannya. Misalnya saja apabila dalam sebuah permainan, teman-temannya mendapatkan bola biru yang juga ia inginkan, sementara ia mendapatkan bola merah. Maka ia akan menangis.
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
}