import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const Products = () => {
  const [Data, setData] = useState([]);

  const [RowData, SetRowData] = useState([]);
  const [ViewShow, SetViewShow] = useState(false);
  const handleViewShow = () => {
    SetViewShow(true);
  };
  const hanldeViewClose = () => {
    SetViewShow(false);
  };
  //FOr Edit Model
  const [ViewEdit, SetEditShow] = useState(false);
  const handleEditShow = () => {
    SetEditShow(true);
  };
  const hanldeEditClose = () => {
    SetEditShow(false);
  };
  //FOr Delete Model
  const [ViewDelete, SetDeleteShow] = useState(false);
  const handleDeleteShow = () => {
    SetDeleteShow(true);
  };
  const hanldeDeleteClose = () => {
    SetDeleteShow(false);
  };
  //FOr Add New Data Model
  const [ViewPost, SetPostShow] = useState(false);
  const handlePostShow = () => {
    SetPostShow(true);
  };
  const hanldePostClose = () => {
    SetPostShow(false);
  };

  //Define here local state that store the form Data
  const [productName, setproductName] = useState("");
  const [productBrand, setproductBrand] = useState("");
  const [productPrice, setproductPrice] = useState("");
  const [productQuantity, setproductQuantity] = useState("");

  const [Delete, setDelete] = useState(false);
  //Id for update record and Delete
  const [id, setId] = useState("");

  const GetProductData = () => {
    //here we will get all product data
    const url = `http://3.86.206.55:3002/delivery/allProducts`;
    axios
      .get(url)

      .then((response) => {
        console.log("Response1", response.data);
        setData(response.data);
      });
  
  };



  const handleSubmite = () => {
    const url = 'http://3.86.206.55:3002/delivery/addedProduct';
    const Credentials = {
      productName,
      productBrand,
      productPrice,
      productQuantity
    };
    axios.post(url, Credentials).then(response => {
      //console.log("Response2", response.data);
      //setData(response.data);
      //window.location.reload();
    //});
    

            //.then(response => {
                const result = response.data;
                const { status, message, data } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
        
  };

  const handleEdit = () => {
    const url = `http://3.86.206.55:3002/delivery/updatedProducts/${id}`;
    const Credentials = {
      productName,
      productBrand,
      productPrice,
      productQuantity,
    };
    axios.put(url, Credentials).then((response) => {
      console.log("Response1", response.data);
      setData(response.data);
      window.location.reload();
    });
    /*
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
        */
  };
  //handle Delete Function
  const handleDelete = () => {
    const url = `http://3.86.206.55:3002/delivery/deletedProduct/${id}`;
    axios.delete(url).then((response) => {
      console.log("Response1", response.data);
      
      setData(response.data);
    });
    /*
            .then(response => {
                const result = response.data;
                const { status, message } = result;
                if (status !== 'SUCCESS') {
                    alert(message, status)
                }
                else {
                    alert(message)
                    window.location.reload()
                }
            })
            .catch(err => {
                console.log(err)
            })
        */
  };

  //call this function in useEffect
  console.log(ViewShow, RowData);
  useEffect(() => {
    GetProductData();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="mt-5 mb-4">
          <Button
            variant="primary"
            onClick={() => {
              handlePostShow();
            }}
          >
            <i className="fa fa-plu"></i>
            Add New Product
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Brand</th>
                <th>Product Price</th>
                <th>Product Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item._id}>
                  <td>{item.productName}</td>
                  <td>{item.productBrand}</td>
                  <td>{item.productPrice}</td>
                  <td>{item.productQuantity}</td>
                  <td style={{ minWidth: 190 }}>
                    <Button
                      size="sm"
                      variant="primary"
                      onClick={() => {
                        handleViewShow(SetRowData(item));
                      }}
                    >
                      View
                    </Button>
                    |
                    <Button
                      size="sm"
                      variant="warning"
                      onClick={() => {
                        handleEditShow(SetRowData(item), setId(item._id));
                      }}
                    >
                      Edit
                    </Button>
                    |
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => {
                        handleViewShow(
                          SetRowData(item),
                          setId(item._id),
                          setDelete(true)
                        );
                      }}
                    >
                      Delete
                    </Button>
                    |
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/**/}
      {/* View Modal */}
      <div className="model-box-view">
        <Modal
          show={ViewShow}
          onHide={hanldeViewClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>View Product Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.productName}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.productBrand}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.productPrice}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.productQuantity}
                  readOnly
                />
              </div>
              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete Product
                </Button>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeViewClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Modal for submit data to database */}
      <div className="model-box-view">
        <Modal
          show={ViewPost}
          onHide={hanldePostClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add new Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductName(e.target.value)}
                  placeholder="Please enter Product Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductBrand(e.target.value)}
                  placeholder="Please enter brand"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductPrice(e.target.value)}
                  placeholder="Please enter price"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductQuantity(e.target.value)}
                  placeholder="Please enter quantity"
                />
              </div>

              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmite}
              >
                Add Product
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldePostClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      {/* Modal for Edit employee record */}
      <div className="model-box-view">
        <Modal
          show={ViewEdit}
          onHide={hanldeEditClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductName(e.target.value)}
                  placeholder="Please enter Product Name"
                  defaultValue={RowData.productName}
                />
              </div>
              <div className="form-group mt-3">
                <label>Product Brand</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductBrand(e.target.value)}
                  placeholder="Please enter brand"
                  defaultValue={RowData.productBrand}
                />
              </div>
              <div className="form-group mt-3">
                <label>Product Price</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductPrice(e.target.value)}
                  placeholder="Please enter price"
                  defaultValue={RowData.productPrice}
                />
              </div>
              <div className="form-group mt-3">
                <label>Product Quantity</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setproductQuantity(e.target.value)}
                  placeholder="Please enter quantity"
                  defaultValue={RowData.productQuantity}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Product
              </Button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={hanldeEditClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Products;
