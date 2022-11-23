import React from "react";
import Card from 'react-bootstrap/Card';
import Img from '../../../assets/artikel.png';

export default function DetailArtikel () {
    return (
        <div className="container">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mainHeader">
                                <div className="contentHeader">
                                    <h3 className="main-heading">Menghadapi Anak Sensitif yang Mudah Menangis</h3>
                                </div>
                            </div>
                            <div className="underline mx-auto"></div>

                            <main className="mainContent">
                                <div class="content">
                                    <div className="col-md-12">
                                        <Card>
                                            <Card.Img variant="top" className="images-card" src={ Img } />
                                            <Card.Body className="text-center">
                                            <Card.Text style={{ textAlign: 'left'}}>
                                                Sebentar-sebentar menangis. Menghadapi anak yang mudah menangis memang tidak mudah.Untuk balita sensitif, menangis masih menjadi salah satu bentuk komunikasi. Mereka tidak bisa menyampaikan apa yang mereka maksud sehingga pecahlah tangisannya. Misalnya saja apabila dalam sebuah permainan, teman-temannya mendapatkan bola biru yang juga ia inginkan, sementara ia mendapatkan bola merah. Maka ia akan menangis.
                                            </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                                <aside className="aside">
                                    <div class="card">
                                        <h3 className="title">Artikel Lainnya</h3>
                                    </div>
                                </aside>
                            </main>
                        </div>
                    </div>
                </div>
            </section> 
        </div> 
    );
}