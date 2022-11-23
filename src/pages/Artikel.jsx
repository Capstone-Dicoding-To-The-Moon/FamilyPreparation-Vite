import React from "react";
import { Container } from 'react-bootstrap';
import Search from '../components/Search';
import CardArtikel from '../components/CardArtikelkComponent';
import HeroElement  from "../components/HeroElement";
import KategoriArtikel from "../components/KategoriArtikel"

export default function Artikel () {
    return (
      <div  style={{ minHeight: '100vh' }}>
        <Container className="py-5">
        <HeroElement />
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mainHeader mb-3">
                                <div className="contentHeader mb-3">
                                    <h3 className="main-heading">Rekomendasi Artikel</h3>
                                </div>
                                <div className="search">
                                   <Search /> 
                                </div>
                            </div>
                            <div className="underline mx-auto mb-4"></div>

                            <main className="mainContent">
                                <div class="content">
                                    <CardArtikel />
                                </div>
                                <aside className="aside">
                                    <KategoriArtikel />
                                </aside>
                            </main>
                        </div>
                    </div>
                </div>
            </section> 
        </Container>
      </div>
    );
}