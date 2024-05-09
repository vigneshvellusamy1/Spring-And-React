import React from 'react'
import AllService from '../Service/AllService';
import { useNavigate, Link } from "react-router-dom"
import service from '../Service/AllService';

export default function InsertItem() {
  let navigate = useNavigate();
  const [libr, setLibr] = React.useState({
    itemName: "",
    itemPrice: "", 
  });


  const onsubmit = async (e) => {
    e.preventDefault();
    await service.Additem(libr).then(res => console.log(res.data)).catch(err=>console.log(err))
    alert('Data inserted successfully');
    navigate("/homelib");
  };

    
  return (
    <div>
        <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title">Add Item</h5>
            </div>
            <img width=" 400px " src=""  />
      
            <div className="card-body">
              <form onSubmit={onsubmit}>
                <div className="form-group row">
                  <label for="colFormLabelSm" className="col-sm-3 col-form-label col-form-label-sm" >ItemName</label>
                  <div className="col-sm-9">
                    <input type="text" className="form-control form-control-sm"
                      id="colFormLabelSm"
                      required
                      placeholder="Enter Itemname"
                      name='itemName'
                      onChange={(e)=>setLibr({...libr,[e.target.name]:e.target.value})}
                    />
                    <br/>
                  </div>
                </div>
                <div className="form-group row">
                  <label for="colFormLabel" className="col-sm-3 col-form-label">ItemPrice</label>
                  <div className="col-sm-9">
                    <input type="number" className="form-control" id="colFormLabel"
                      name='itemPrice'
                      onChange={(e)=>setLibr({...libr,[e.target.name]:e.target.value})}
                      required
                      placeholder="Enter price"
                    />
                  </div>
                </div>
                
               
                <div className="form-group row">
                  <div className="col-sm-9 offset-sm-3">
                    <input type='submit' value="Insert" name='Insert' className="btn btn-primary p-1 m-2 "/>
                    <Link to="/homelib">    <button className="btn btn-warning p-1 m-2 ">Back</button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

