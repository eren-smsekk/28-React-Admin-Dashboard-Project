

const CategoryCard = () => {
    return(
        <div className="row">
            <div className="col-md-3">
                <div className="card text-center bg-primary text-white mb-3 border-0">
                    <div className="card-body">
                        <h3 className="card-title">Users</h3>
                        <h4 className="card-title">
                            <i className="bi bi-person-fill"></i> 125
                        </h4>
                        <a href="#" className="btn btn-outline-light">Manage</a>
                    </div>
                </div>

                <div className="card text-center bg-success text-white mb-3 border-0">
                    <div className="card-body">
                        <h3 className="card-title">Products</h3>
                        <h4 className="card-title">
                            <i className="bi bi-folder2-open"></i> 256
                        </h4>
                        <a href="#" className="btn btn-outline-light">Manage</a>
                    </div>
                </div>

                <div className="card text-center bg-warning text-white mb-3 border-0">
                    <div className="card-body">
                        <h3 className="card-title">Orders</h3>
                        <h4 className="card-title">
                            <i className="bi bi-basket2"></i> 179
                        </h4>
                        <a href="#" className="btn btn-outline-light">Manage</a>
                    </div>
                </div>

                <div className="card text-center bg-danger text-white mb-3 border-0">
                    <div className="card-body">
                        <h3 className="card-title">Category</h3>
                        <h4 className="card-title">
                            <i className="bi bi-folder"></i> 12
                        </h4>
                        <a href="#" className="btn btn-outline-light">Manage</a>
                    </div>
                </div>
            </div>

            <div className="col-md-9">
                <div className="Accord-title bg-secondary text-white rounded">
                    <h1 className="display1 text-center">Orders And New Product</h1>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Orders
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="table-responsive">
                                    <table className="table mb-0">
                                        <thead className="table-secondary">
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Order ID</th>
                                                <th scope="col">Username</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">Date</th>
                                                <th scope="col">State</th>
                                                <td></td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>#</td>
                                                <td>1010</td>
                                                <td>Username1</td>
                                                <td>1000 TL</td>
                                                <td>10.10.2020 - 22.00</td>
                                                <td>
                                                    <span className="badge bg-primary p-2">Onay Bekliyor</span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="bi bi-caret-right-fill"></i> Details
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#</td>
                                                <td>1102</td>
                                                <td>Username2</td>
                                                <td>3000 TL</td>
                                                <td>08.11.2020 - 13.00</td>
                                                <td>
                                                    <span className="badge bg-warning p-2">Hazırlanıyor</span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="bi bi-caret-right-fill"></i> Details
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#</td>
                                                <td>1432</td>
                                                <td>Username3</td>
                                                <td>7552 TL</td>
                                                <td>19.11.2020 - 15.00</td>
                                                <td>
                                                    <span className="badge bg-info p-2">Kargoya Verildi</span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="bi bi-caret-right-fill"></i> Details
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#</td>
                                                <td>1845</td>
                                                <td>Username4</td>
                                                <td>9856 TL</td>
                                                <td>26.12.2020 - 09.00</td>
                                                <td>
                                                    <span className="badge bg-success p-2">Teslim Edildi</span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="bi bi-caret-right-fill"></i> Details
                                                    </button>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td>#</td>
                                                <td>1203</td>
                                                <td>Username5</td>
                                                <td>5423 TL</td>
                                                <td>29.12.2020 - 18.00</td>
                                                <td>
                                                    <span className="badge bg-danger p-2">İade Edildi</span>
                                                </td>
                                                <td className="text-end">
                                                    <button className="btn btn-primary btn-sm">
                                                        <i className="bi bi-caret-right-fill"></i> Details
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Recently Added Products
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead className="table-secondary">
                                        <tr>
                                            <th scope="col">#Product ID</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Approved</th>
                                            <td></td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="align-middle">
                                            <td>1</td>
                                            <td>
                                                <img src="/img/1.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Iphone 8</td>
                                            <td>7800 TL</td>
                                            <td>
                                                <span className="badge bg-danger p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-dash-circle fs-5"></i>
                                                        <span className="ps-2">Stokta Yok</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className="align-middle">
                                            <td>2</td>
                                            <td>
                                                <img src="/img/2.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Iphone 8 Pro</td>
                                            <td>9500 TL</td>
                                            <td>
                                                <span className="badge bg-success p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-check-circle fs-5"></i>
                                                        <span className="ps-2">Satışa Hazır</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className="align-middle">
                                            <td>3</td>
                                            <td>
                                                <img src="/img/3.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Galaxy Note 12</td>
                                            <td>25000 TL</td>
                                            <td>
                                                <span className="badge bg-warning p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-exclamation-circle fs-5"></i>
                                                        <span className="ps-2">Kritik Stok</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className="align-middle">
                                            <td>4</td>
                                            <td>
                                                <img src="/img/4.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Galaxy S8</td>
                                            <td>11000 TL</td>
                                            <td>
                                                <span className="badge bg-success p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-check-circle fs-5"></i>
                                                        <span className="ps-2">Satışa Hazır</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className="align-middle">
                                            <td>5</td>
                                            <td>
                                                <img src="/img/5.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Galaxy S9</td>
                                            <td>14500 TL</td>
                                            <td>
                                                <span className="badge bg-warning p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-exclamation-circle fs-5"></i>
                                                        <span className="ps-2">Kritik Stok</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>

                                        <tr className="align-middle">
                                            <td>6</td>
                                            <td>
                                                <img src="/img/6.jpg" alt="product" className="img-fluid" width={50} />
                                            </td>
                                            <td>Galaxy S12</td>
                                            <td>18000 TL</td>
                                            <td>
                                                <span className="badge bg-danger p-2">
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bi bi-dash-circle fs-5"></i>
                                                        <span className="ps-2">Stokta Yok</span>
                                                    </div>
                                                    
                                                </span>
                                            </td>
                                            <td className="text-end">
                                                <button className="btn btn-primary btn-sm">
                                                    <i className="bi bi-caret-right-fill"></i> Details
                                                </button>
                                            </td>
                                        </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;