import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const Pay = () => {
  const [Data, setData] = useState([]);
  const [Up, setNew] = useState("");

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
  const [creditCard, setcreditCard] = useState("");
  const [payEmail, setpayEmail] = useState("");

  const [Delete, setDelete] = useState(false);
  //Id for update record and Delete
  const [id, setId] = useState("");

  const GetProductData = () => {
    //here we will get all product data
    const url = `http://3.86.206.55:3002/delivery/allPayments`;
    axios
      .get(url)

      .then((response) => {
        console.log("Response All Payments", response.data);
        setData(response.data);
      });
  };

  const handleSubmite =  () => {
    const url = `http://3.86.206.55:3002/delivery/addedPay`;
    const Credentials = {
      creditCard,
      payEmail
    };

     axios.post(url, Credentials).then((response) => {
      setNew(response.data);
      setcreditCard("");
      setpayEmail("")
      //this.GetProductData();
      window.location.reload();
      console.log("Response2", response.data);
    });
  };

  const handleEdit = () => {
    const url = `http://3.86.206.55:3002/delivery/updatedPay/${id}`;
    const Credentials = {
        creditCard,
        payEmail
    };
    axios.put(url, Credentials).then((response) => {
      console.log("Response Put", response.data);
      setData(response.data);
      window.location.reload();
    });
  };
  //handle Delete Function
  const handleDelete = () => {
    const url = `http://3.86.206.55:3002/delivery/deletedPay/${id}`;
    axios.delete(url).then((response) => {
      console.log("Response Delete", response.data);
      setData(response.data);
    });
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
            Add New Pay
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>No. Credit Card</th>
                <th>Pay Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item._id}>
                  <td>{item.creditCard}</td>
                  <td>{item.payEmail}</td>
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
            <Modal.Title>View Credit Card Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.creditCard}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.payEmail}
                  readOnly
                />
              </div>
              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete Credit Card
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
            <Modal.Title>Add new Credit Card</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={creditCard}
                  onChange={(e) => setcreditCard(e.target.value)}
                  placeholder="Please enter Credit Card"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={payEmail}
                  onChange={(e) => setpayEmail(e.target.value)}
                  placeholder="Please enter Pay email"
                />
              </div>

              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmite}
              >
                Add creditCard
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
            <Modal.Title>Edit Credits</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Credit Card</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setcreditCard(e.target.value)}
                  placeholder="Please enter new Credit Card"
                  defaultValue={RowData.creditCard}
                />
              </div>
              <div className="form-group mt-3">
                <label>Pay Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setpayEmail(e.target.value)}
                  placeholder="Please enter Address"
                  defaultValue={RowData.payEmail}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Credit Card
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

export default Pay;
