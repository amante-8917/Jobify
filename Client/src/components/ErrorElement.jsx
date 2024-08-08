import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorElement = () => {
  const error = useRouteError();
  console.log(error);

  return <h4>There is an error...</h4>;
};

export default ErrorElement;
