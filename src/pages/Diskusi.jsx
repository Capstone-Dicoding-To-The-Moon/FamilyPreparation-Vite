import React from "react";
import Card from 'react-bootstrap/Card';
import Breadcrumb from '../components/Breadcrumb';
import { BsChatLeftText, BsChevronUp, BsChevronDown } from "react-icons/bs";
import profile from '../assets/profile.png';
import Image from 'react-bootstrap/Image';

export default function Diskusi () {
    return (
        <div className="container">
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="mainHeader mb-3">
                                <div className="contentHeader mb-3">
                                    <h3 className="main-heading">The Parentings Forum</h3>
                                </div>
                            </div>
                            <div className="underline mx-auto mb-4"></div>
                            <Breadcrumb />
                            <main className="mainContent">
                                <div class="content">
                                    <Card className='mb-3'>
                                      <Card.Body>
                                        <Card.Title>Judul Diskusi</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">
                                            <span style={{ marginRight: 20}}>11-11-2022 00:10</span>
                                            <span><BsChatLeftText /> 13 Komentar</span>
                                        </Card.Subtitle>
                                        <div class="card mb-3" style={{ maxWidth: 1200,backgroundColor: 'Gainsboro'}}>
                                            <div className="row g-0">
                                                <div className="col-md-1">
                                                    <Image src={ profile} className="img-fluid" style={{ width: 70, margin:12 }}  />
                                                </div>
                                                <div className="col-md-8" >
                                                    <Card.Body >
                                                        <h5 className="card-title">Nama Author</h5>
                                                        <Card.Subtitle className="mb-3 text-muted">
                                                            <span style={{ marginRight: 20}}>Jum’at 11 November 2022 00:10 </span>
                                                        </Card.Subtitle>
                                                        <Card.Text>
                                                            Ini Pertanyaan? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis ipsa ab nihil iure nulla quisquam officia. Quibusdam, rerum perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo laudantium ipsam consectetur tempore quidem quas doloribus expedita quia perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus earum ut tempore sed voluptatibus repudiandae beatae fugit ratione eligendi.
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                        <div class="card mb-3" style={{ maxWidth: 1200, border: 'none'}}>
                                            <div className="row g-0">
                                                <div className="col-md-1">
                                                    <Image src={ profile} className="img-fluid" style={{ width: 70, margin:12 }}  />
                                                </div>
                                                <div className="col-md-8" >
                                                    <Card.Body >
                                                        <h5 className="card-title">Nama Author</h5>
                                                        <Card.Subtitle className="mb-3 text-muted">
                                                            <span style={{ marginRight: 20}}>Jum’at 11 November 2022 00:10 </span>
                                                        </Card.Subtitle>
                                                        <Card.Text>
                                                            Ini Pertanyaan? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur officiis ipsa ab nihil iure nulla quisquam officia. Quibusdam, rerum perferendis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quo laudantium ipsam consectetur tempore quidem quas doloribus expedita quia perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, natus earum ut tempore sed voluptatibus repudiandae beatae fugit ratione eligendi.
                                                            <Card.Subtitle className="mb-3 mt-3 text-muted">
                                                            <Card.Link style={{ textDecoration: 'none', color: 'black'}}><BsChatLeftText /> Balas</Card.Link>
                                                            <Card.Link style={{ textDecoration: 'none', color: 'black'}}><BsChevronUp /> 0</Card.Link>
                                                            <Card.Link style={{ textDecoration: 'none', color: 'black'}}><BsChevronDown /> 0</Card.Link>
                                                        </Card.Subtitle>
                                                        </Card.Text>
                                                    </Card.Body>
                                                </div>
                                            </div>
                                        </div>
                                        <hr/>
                                      </Card.Body>
                                    </Card>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section> 
        </div> 
    )
}