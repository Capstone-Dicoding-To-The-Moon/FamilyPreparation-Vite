import React from "react";
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default function ForumDiskusi () {
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
                                <div>
                                  <Button className="buttonTanya">Buat Pertanyaan</Button> 
                                </div>
                            </div>
                            <div className="underline mx-auto mb-4"></div>
                            <main className="mainContent">
                                <div class="content">
                                    <Card className='mb-3'>
                                      <Card.Body className="text-center">
                                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                                        <thead>
                                          <tr>
                                            <th style={{ width: 600 }}>Parenting</th>
                                            <th>Topics</th>
                                            <th>Views</th>
                                            <th style={{ width: 200 }}>Last Post</th>
                                          </tr>
                                        </thead>
                                          <tbody>
                                            <tr>
                                              <td>Pregnancy</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Baby</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Child</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>For Ibu</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>For Ayah</td>
                                              <td>384</td>
                                              <td>11846</td>
                                            <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </Card.Body>
                                    </Card>
                                    <Card className='mb-3'>
                                      <Card.Body >
                                      <Table responsive="sm">
                                        <thead>
                                          <tr>
                                            <th style={{ width: 600 }}>Smart Moms</th>
                                            <th>Topics</th>
                                            <th>Views</th>
                                            <th style={{ width: 200 }}>Last Post</th>
                                          </tr>
                                        </thead>
                                          <tbody>
                                            <tr>
                                              <td>Health Matters</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Financial Matters</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </Card.Body>
                                    </Card>
                                    <Card className='mb-3'>
                                      <Card.Body className="text-center">
                                      <Table responsive="sm" style={{ textAlign: 'left' }}>
                                        <thead>
                                          <tr>
                                            <th style={{ width: 600 }}>Healty</th>
                                            <th>Topics</th>
                                            <th>Views</th>
                                            <th style={{ width: 200 }}>Last Post</th>
                                          </tr>
                                        </thead>
                                          <tbody>
                                            <tr>
                                              <td>Healty Diet</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Fitness Gears</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Health and wellness</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                            <tr>
                                              <td>Sports Gathering</td>
                                              <td>384</td>
                                              <td>11846</td>
                                              <td>2022-07-01 00:23:57 by antonio456</td>
                                            </tr>
                                          </tbody>
                                        </Table>
                                      </Card.Body>
                                    </Card>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </section> 
        </div> 
    );
}