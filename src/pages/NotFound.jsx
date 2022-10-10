import React from "react";
import "../styles/NotFound.scss";
import notFound from "../assets/logos/404.png";

function NotFound() {
  return (
    <>
      <div className='page-container'>
        <div className='left-content'>
          <img src={notFound} alt='404' className='image' />
        </div>
        <div className='right-content'>
          <h1 className='title'>I'm so sorry but this page doesn't exist</h1>
        </div>
      </div>
    </>
  );
}

export { NotFound };