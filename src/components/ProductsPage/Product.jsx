import ProductBreadCrumb from "./ProductBreadCrumb";
import ProductActions from "./ProductAction";

const Product = () => {
  return (
    <div>
      <ProductBreadCrumb />
      <ProductActions />  
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                      <img
                        src="/img/1.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
                      <img
                        src="/img/2.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
                      <img
                        src="/img/3.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
                      <img
                        src="/img/4.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
                      <img
                        src="/img/5.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
                      <img
                        src="/img/6.jpg"
                        alt="product"
                        className="img-fluid"
                        width={50}
                      />
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
            <div className="Pagination mt-5">
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-end">
                        <li className="page-item disabled"><a className="page-link">Previous</a></li>
                        <li className="page-item active"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
