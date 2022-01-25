import React from 'react';

export default function Param(props) {
  return (
      <>
      <h1>email {props.data.email}</h1>
      <h1>password {props.data.password}</h1>
      </>
  );
}
