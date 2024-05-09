
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AllService from "../Service/AllService";
import service from "../Service/AllService";

export default function HomeUser() {
  //let navigate = useNavigate();
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getAllUser = async () => {
      try {
        const response = await AllService.Findalluser();
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        // alert("Error fetching User data:", error);
      }
    };
    getAllUser();
  }, []);
  const [userId,setUserId]=useState("");

  const removeUser = async (e, userId) => {
    e.preventDefault();

    const result = window.confirm("Are you sure for Deleted?");

    console.log(result)

    if (result) {
      await service.Deleteuser(userId);
      // window.location.reload();
      // window.location.href="/";
      console.log("object")
    } else {
      alert("cancelled");
    }
  };

  return (
    <div>
      <div className="container mt-4">
           <h1 className="text-center" data-testid="h1">User List</h1>
        <Link className="btn btn-btn-outline-light me-6 " to="/insertus">
          <button className="btn btn-success btn-md">Add User</button>
        </Link>

        <table
          className="table text-center table-striped mx-auto"
          style={{ fontSize: "25px", }}
        >
          <thead
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <tr>
              <th className="text-center" style={{ width: "30px" }}>
                ID
              </th>
              <th className="text-center" style={{ width: "50px" }}>
                Name
              </th>
              <th className="text-center" style={{ width: "30px" }}>
                MobileNumber
              </th>
              <th className="text-center" style={{ width: "40px" }}>
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {user.map((item) => (
              <tr key={item.userId}>
                <td>{item.userId}</td>
                <td>{item.userName}</td>
                <td>{item.mobNumber}</td>
                <td className="d-flex justify-content-between">
                  <button
                    className="btn btn-danger btn-md"
                    id={`remove${item.userId}`}
                    name="btnRemove"
                    onClick={(e) => removeUser(e, item.userId)}
                  >
                    Remove
                  </button>{" "}
                  &nbsp;
                  <Link to={`/updates/${item.uid}`}>
                    <button className="btn btn-primary btn-md">Update</button>
                    &nbsp; &nbsp;
                  </Link>
                  {/* <Link to={`/find/${item.sid}`}><button className="btn btn-info btn-md">View</button></Link>
                   */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
