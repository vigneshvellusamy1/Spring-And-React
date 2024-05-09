import React,{useEffect} from 'react'
import AllService from '../Service/AllService';
import { useState } from 'react';
import { useNavigate,Link } from "react-router-dom";
import service from '../Service/AllService';

export default function HomeItem() {
    let navigate = useNavigate();
    const[item, setitem] = useState([]);
   // const [lid, setLid] = useState("");


    useEffect(() => {
        const getAllUser = async () => {
          try {
            const response = await AllService.Findallitem();
            console.log(response.data)
            setitem(response.data);
          } catch (error) {
            console.error("Error fetching student data:", error);
          }
        };
        getAllUser();
      }, []);
      
      const removeUser= async(e,lid)=>{
        e.preventDefault();
        
        
        if(window.confirm('  Are you sure?'))
        {
            await  service.deleteitem(lid);
            // setLid(delitem);
            window.location.reload();
            navigate("/homelib")
            }
            else{
                alert("cancelled");
            }
      
      }


  return (
    <div>
       <div className="container mt-4">
      <h1 className="text-center">Item List</h1>
      <Link className="btn btn-btn-outline-light me-6 " to="/insertItem">
      <img src=""  />
          <button class="btn btn-success btn-lg">Add Item</button>
        </Link>
      <table className="table table-bordered table-striped"style={{fontSize: "25px"}}>

        <thead style={{backgroundColor: "black",color:"white", fontWeight:"bold"}} >
          <tr>
            <th className="text-center" style={{width:"30px"}}>ID</th>
            <th className="text-center" style={{width:"50px"}}>ItemName</th>
            <th className="text-center" style={{width:"30px"}}>ItemPrice</th>
            <th className="text-center"  style={{width:"2px"}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {item.map((item) => (
            <tr key={item.itemId}>
              <td>{item.itemId}</td>
              <td>{item.itemName}</td>
              <td>{item.itemPrice}</td>
              <td className="d-flex justify-content-between">           
              <button
                  className="btn btn-danger btn-md"
                  onClick={(e) => removeUser(e, item.itemId)}
                >
                  Remove
                </button> &nbsp;
              
             
                 <Link to={`/updatess/${item.lid}`}>
                  <button className="btn btn-primary btn-md">Add Cart</button>
                </Link>

                 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
