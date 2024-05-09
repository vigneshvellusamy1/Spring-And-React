import { useEffect } from "react";
import React from "react";
import AllService from "../Service/AllService";
import { useNavigate, Link } from "react-router-dom";
import service from "../Service/AllService";

export default function Insert() {
  let navigate = useNavigate();

  const [user, setUser] = React.useState({
    userName: "",
    mobNumber: "",
    item: { itemId: ""}
  });

  const[idList,setidList]=React.useState([]);

  useEffect(() =>{
    AllService.FindallId().then((response)=>{
    console.log(response.data);
    setidList(response.data);});
  },[]);

  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await service.Adduser(user);
    alert("Data inserted successfully");
    navigate("/");
  };
  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">ADD USER PAGE</h5>
              </div>
              <div className="card-body">
                <form onSubmit={onsubmit}>
                  <div className="form-group row">
                    <label
                      for="colFormLabelLg"
                      className="col-sm-3 col-form-label col-form-label-lg"
                    >
                    
                      NAME
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="text"
                        className="form-control"
                        id="colFormLabel"
                        name="userName"
                        onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}
                        required
                        placeholder="Enter name"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      for="colFormLabelLg"
                      className="col-sm-3 col-form-label col-form-label-lg"
                    >
                      MobileNum
                    </label>
                    <div className="col-sm-9">
                      <input
                        type="number"
                        className="form-control form-control-lg"
                        id="colFormLabelLg"
                        name="mobNumber"
                        required
                        onChange={(e)=>setUser({...user,[e.target.name]:e.target.value})}
                        placeholder="Enter mobile"
                      />
                    </div>
                    
                    
                    <br></br>
                    <div className="form-group row">
                      <label
                        for="colFormLabelLg"
                        className="col-sm-3 col-form-label col-form-label-lg"
                      >
                        Item ID
                      </label>
                      <div className="col-sm-9">
                        <select
                        name="itemId"
                        className="form-control form-control-lg"
                        required
                        onChange={(e)=>setUser({...user,item:{[e.target.name]:e.target.value}})}
                        class="form-select"
                        aria-label="Default select example"
                        >
                          <option selected>Select Item</option>
                          {
                            idList.map((id)=>
                            <option value={id}>{id}</option>
       
                            )}
                          
                        </select>
                      </div>
                    </div>
                    <div className="form-group row">
                      <div className="col-sm-9 offset-sm-3">
                        <button type="submit" name="InsertUser"
                        className="btn btn-primary p-1 m-2 "
                        >Insert User</button>
                        <Link to="/">
                          <button className="btn btn-warning p-1 m-2 ">
                            Back
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

