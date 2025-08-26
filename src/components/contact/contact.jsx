import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact h-screen">
      <div className="w-[43rem] bg-slate-200 h-[55rem] flex   m-auto flex-col">
        <h1 className="my-[5rem] text-[2rem] mx-auto">LOGIN INTO SHOPFY</h1>
        <div className="email_box mx-14 ">
          <p className="text-2xl my-4">Enter :</p>
          <input type="email" className="w-[23rem]" />
        </div>
        <div className="password_Box">
          <p>Password</p>

          <input type="password" />
        </div>
        <div className="buttons_bo">
        <button>
          Login
        </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
