import { Component } from 'react'
import axios from 'axios'

const addUser="http://localhost:1234/Userinsert";
const additem="http://localhost:1234/Iteminsert";
const findallUser="http://localhost:1234/Userfindall";
const findallitem="http://localhost:1234/Itemfindall";
const Autoitem="http://localhost:1234/Autopopuplid";
const delUser="http://localhost:1234/Userdelete/";
const findUser="http://localhost:1234/Userfind/";
const updateUser="http://localhost:1234/Userupdate";
 const deleteitem="http://localhost:1234/Itemdelete/";
 const finitem="http://localhost:1234/itemfind/";
 const upditem="http://localhost:1234/itemupdate"

 class Allservice extends Component {

    Adduser(user){
        return axios.post(addUser,user);
    }
    Additem(item){
        return axios.post(additem,item);
    }
    Findalluser(){
        const datas = axios.get(findallUser);
        return datas;
    }
    Findallitem(){
        return axios.get(findallitem);
        
    }
    FindallId(){
        return axios.get(Autoitem);
    }
    Deleteuser(uid){
        console.log("hello")
        return axios.delete(delUser+uid);
    }
    finduser(uid){
        return axios.get(findUser+uid);
    }
    Updateuser(user){
        return axios.put(updateUser,user);
    }
    deleteitem(item){
        return axios.delete(deleteitem+item);
    }
    finditem(item){
        return axios.get(finitem+item);
    }
    Updateitem(item){
        return axios.put(upditem,item);
    }

  
      
}
const   service = new Allservice();
export default service;
