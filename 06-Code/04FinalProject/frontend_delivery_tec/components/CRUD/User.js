import React, { useEffect, useState } from "react";
import { Button, Modal, ModalTitle } from "react-bootstrap";
import axios from "axios";

const Users = () => {
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
  const [userName, setuserName] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userEmail, setuserEmail] = useState("");

  const [Delete, setDelete] = useState(false);
  //Id for update record and Delete
  const [id, setId] = useState("");

  const GetProductData = () => {
    //here we will get all product data
    const url = `http://3.86.206.55:3002/delivery/allUsers`;
    axios
      .get(url)

      .then((response) => {
        console.log("Response All Users", response.data);
        setData(response.data);
      });
  };

  const handleSubmite =  () => {
    const url = `http://3.86.206.55:3002/delivery/addedUser`;
    const Credentials = {
      userName,
      userAddress,
      userPhone,
      userEmail
    };

     axios.post(url, Up).then((response) => {
      setNew(response.data);
      setuserName("");
      setuserAddress("")
      setuserPhone("")
      setuserEmail("")
      //this.GetProductData();
      window.location.reload();
      console.log("Response2", response.data);
    });
  };

  const handleEdit = () => {
    const url = `http://3.86.206.55:3002/delivery/updatedUser/${id}`;
    const Credentials = {
        userName,
        userAddress,
        userPhone,
        userEmail
    };
    axios.put(url, Credentials).then((response) => {
      console.log("Response Put", response.data);
      setData(response.data);
      window.location.reload();
    });
  };
  //handle Delete Function
  const handleDelete = () => {
    const url = `http://3.86.206.55:3002/delivery/deletedUser/${id}`;
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
            Add New User
          </Button>
        </div>
      </div>
      <div className="row">
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered">
            <thead>
              <tr>
                <th>User Name</th>
                <th>User Address</th>
                <th>User Phone</th>
                <th>User Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Data.map((item) => (
                <tr key={item._id}>
                  <td>{item.userName}</td>
                  <td>{item.userAddress}</td>
                  <td>{item.userPhone}</td>
                  <td>{item.userEmail}</td>
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
            <Modal.Title>View User Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.userName}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.userAddress}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.userPhone}
                  readOnly
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={RowData.userEmail}
                  readOnly
                />
              </div>
              {Delete && (
                <Button
                  type="submit"
                  className="btn btn-danger mt-4"
                  onClick={handleDelete}
                >
                  Delete User
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
            <Modal.Title>Add new User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setuserName(e.target.value)}
                  placeholder="Please enter User Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={userAddress}
                  onChange={(e) => setuserAddress(e.target.value)}
                  placeholder="Please enter Address"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  value={userPhone}
                  onChange={(e) => setuserPhone(e.target.value)}
                  placeholder="Please enter Phone"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  value={userEmail}
                  className="form-control"
                  onChange={(e) => setuserEmail(e.target.value)}
                  placeholder="Please enter email"
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
            <Modal.Title>Edit User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="form-group">
                <label>User Name</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setuserName(e.target.value)}
                  placeholder="Please enter new User Name"
                  defaultValue={RowData.userName}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Address</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setuserAddress(e.target.value)}
                  placeholder="Please enter Address"
                  defaultValue={RowData.userAddress}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Phone</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setuserPhone(e.target.value)}
                  placeholder="Please enter Phone"
                  defaultValue={RowData.userPhone}
                />
              </div>
              <div className="form-group mt-3">
                <label>User Email</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setuserEmail(e.target.value)}
                  placeholder="Please enter Email"
                  defaultValue={RowData.userEmail}
                />
              </div>
              <Button
                type="submit"
                className="btn btn-warning mt-4"
                onClick={handleEdit}
              >
                Edit User
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

export default Users;
