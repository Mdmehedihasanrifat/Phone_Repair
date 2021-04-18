import React, {useEffect, useState} from 'react';


const AllService = (props) => {
    const{_id,name,price,quantity}=props.pd;
    const handleDelete=(id)=>{

        fetch(`https://pure-bastion-76617.herokuapp.com/products/delete/${id}`,{
            method:'DELETE'
        })
            .then(res=>res.json())
            .then(result=>{

                console.log("delete")
            })

    }
    return (

            <tbody className="d-flex d-inline-block justify-content-between">
            <td>{name}</td>
            <td>{price}</td>
            <button  onClick={ ()=>{handleDelete(_id)}}  className="btn btn-sm btn-danger">Delete</button>
            </tbody>

    );
};

export default AllService;