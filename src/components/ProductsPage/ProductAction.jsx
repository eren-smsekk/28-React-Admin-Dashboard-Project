

const Actions = () => {

    return(
        <div id="actions" className="py-4 bg-light mb-4">
            <div className="container">
                <div className="row gap-2">
                    <div className="col-12 col-md-4">
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            New Product
                        </button>

                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h2 className="modal-title fs-4">Add Product</h2>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="was-validated">
                                            <div className="form-floating mb-3">
                                                <input type="text" name="productImage" id="floatingProductImage" className="form-control" placeholder="Ürün Görsel Linki" required/>
                                                <label className="form-check-label" htmlFor="floatingProductImage">Ürün Görsel Linki</label>
                                                <div className="invalid-feedback">
                                                    Lütfen Ürün Görsel Linki Giriniz.
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="text" name="productName" id="floatingProductName" className="form-control" placeholder="Ürün Adı" required/>
                                                <label className="form-check-label" htmlFor="floatingProductName">Ürün Adı</label>
                                                <div className="invalid-feedback">
                                                    Lütfen Ürün Adı Giriniz.
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input type="Number" name="productPrice" id="floatingProductPrice" className="form-control" placeholder="Ürün Fiyatı" required/>
                                                <label className="form-check-label" htmlFor="floatingProductPrice">Ürün Fiyatı</label>
                                                <div className="invalid-feedback">
                                                    Lütfen Ürün Fiyatı Giriniz.
                                                </div>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example" required>
                                                    <option value="">Open this select menu</option>
                                                    <option value="1">Stokta Yok</option>
                                                    <option value="2">Kritik Stok</option>
                                                    <option value="3">Satışa Hazır</option>
                                                </select>
                                                <label for="floatingSelect">Works with selects</label>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-8">
                        <input type="search" className="form-control" name="search" id="search" placeholder="Search..." aria-label="Search" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actions;