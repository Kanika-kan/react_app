import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function About(props) {

  let Param=useLocation()

  
  // useEffect(() => {
  //   console.log("props",props);
  //  if(props.location){
     
  //  }
  // }, []);
  
  return (
    <div>
       {/* <h1>{Param?.state[0]}</h1>
       <h1>{Param?.state[1]}</h1> */}
       <h1>{Param?.state && (Param.state[0])}</h1>
       <h1>{Param?.state && (Param.state[1])}</h1>

      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
