import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const Dealers = () => {
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
  const [dealerName, setdealerName] = useState("");
  const [dealerID, setdealerID] = useState("");
  const [dealerEmail, setdealerEmail] = useState("");
  const [dealerVehicle, setdealerVehicle] = useState("");

  const [Delete, setDelete] = useState(false);
  //Id for update record and Delete
  const [id, setId] = useState("");

  const GetProductData = () => {
    //here we will get all product data
    const url = `http://3.86.206.55:3002/delivery/allDealers`;
    axios
      .get(url)

      .then((response) => {
        console.log("Response1", response.data);
        setData(response.data);
      });
  };

  const handleSubmite =  () => {
    const url = `http://3.86.206.55:3002/delivery/addedDealer`;
    const Up = {
      dealerName: dealerName,
      dealerID: dealerID,
      dealerEmail: dealerEmail,
      dealerVehicle: dealerVehicle
    };

     axios.post(url, Up).then((response) => {
      setNew(response.data);
      setdealerName("");
      setdealerID("")
      setdealerEmail("")
      setdealerVehicle("")
      //this.GetProductData();
      window.location.reload();
      console.log("Response2", response.data);
    });
  };

  const handleEdit = () => {
    const url = `http://3.86.206.55:3002/delivery/updatedDealer/${id}`;
    const Credentials = {
      dealerName,
      dealerID,
      dealerEmail,
      dealerVehicle,
    };
    axios.put(url, Credentials).then((response) => {
      console.log("Response1", response.data);
      setData(response.data);
      window.location.reload();
    });
  };
  //handle Delete Function
  const handleDelete = () => {
    const url = `http://3.86.206.55:3002/delivery/deletedDealer/${id}`;
    axios.delete(url).then((response) => {
      console.log("Response1", response.data);
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
            Add New Dealer
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>Dealer Name</th>
                <th>Dealer ID</th>
                <th>Dealer Phone</th>
                <th>Dealer Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item._id}>
                  <td>{item.dealerName}</td>
                  <td>{item.dealerID}</td>
                  <td>{item.dealerEmail}</td>
                  <td>{item.dealerVehicle}</td>
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
            <Modal.Title>View Dealer Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.dealerName}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.dealerID}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.dealerEmail}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.dealerVehicle}
                  readOnly
                />
              </div>
              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete Dealer
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
            <Modal.Title>Add new Dealer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={dealerName}
                  onChange={(e) => setdealerName(e.target.value)}
                  placeholder="Please enter Dealer Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={dealerID}
                  onChange={(e) => setdealerID(e.target.value)}
                  placeholder="Please enter ID"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={dealerEmail}
                  onChange={(e) => setdealerEmail(e.target.value)}
                  placeholder="Please enter email"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  value={dealerVehicle}
                  className="form-control"
                  onChange={(e) => setdealerVehicle(e.target.value)}
                  placeholder="Please enter vehicle"
                />
              </div>

              <Button
                type="submit"
                className="btn btn-success mt-4"
                onClick={handleSubmite}
              >
                Add Dealer
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
            <Modal.Title>Edit Dealer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>Dealer Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdealerName(e.target.value)}
                  placeholder="Please enter new Dealer Name"
                  defaultValue={RowData.dealerName}
                />
              </div>
              <div className="form-group mt-3">
                <label>Dealer ID</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdealerID(e.target.value)}
                  placeholder="Please enter ID"
                  defaultValue={RowData.dealerID}
                />
              </div>
              <div className="form-group mt-3">
                <label>Dealer Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdealerEmail(e.target.value)}
                  placeholder="Please enter email"
                  defaultValue={RowData.dealerEmail}
                />
              </div>
              <div className="form-group mt-3">
                <label>Dealer Vehicle</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setdealerVehicle(e.target.value)}
                  placeholder="Please enter vehicle"
                  defaultValue={RowData.dealerVehicle}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit Dealer
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

export default Dealers;
