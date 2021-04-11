import React from "react";
import "./errorMessage.css";
import img from "./error.jpg";

 const ErrorMessage = ({message}) => {
	return (
	   <>
		<img src={img} alt="error"/>
		<span> Something whent wrong! Please try again later.. + {message}</span>
       </>	 
	)
}
 
export default ErrorMessage; 