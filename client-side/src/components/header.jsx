import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FaPowerOff,FaArrowLeft, FaHome } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const navigate=useNavigate();
  const credential = JSON.parse(localStorage.getItem("userKey"));
  const [idindex,setidindex]=useState(0);
  let id;
  if(credential!=null){
   id = [(credential.fname).toUpperCase() + " " + (credential.lname.toUpperCase()) ,credential.roll];
}
   useEffect(() => {
     const interval = setInterval(() => {
         setidindex(1-idindex);
     }, 5000);
   }, []);

   
     
    return (
      <Container>
        {credential != null && (
          <div
            className="back-btn"
            title="to main-page"
            onClick={() => navigate("/")}
          >
            <FaHome />
          </div>
        )}
        <div className="title">
          <h1>
            {props.heading}
            {credential != null && (
              <div className="power off1">
                {id[idindex]}
                <div
                  className="power off2"
                  title="logout"
                  onClick={() => {
                    localStorage.removeItem("userKey");
                    navigate("/");
                  }}
                >
                  {" "}
                  <FaPowerOff />
                </div>
              </div>
            )}
          </h1>
          <h3>{props.msg}</h3>
        </div>
      </Container>
    );
  }

const Container = styled.div`
  margin: 0;
  padding: 0;
  display:flex;
    .back-btn{
      width:2rem;
      padding-left:0.5rem;
      padding-top:2rem;
      &:hover{
        color:Blue;
        font-size:1.8rem;
      }
    }
  .title {
    margin-left: auto;
    margin-right: auto;
    width: 98vw;
    height: auto;
    min-height: 50px;
    background-color: rgb(60, 137, 143);
    text-align: center;
    h1 {
      .power {
        font-size: medium;
        float: right;
      }
      .off1 {
        margin: 0.8rem 0;
        width: 165px;
      }
      .off2 {
        margin: 0.3rem 1rem;
        color: blue;
        &:hover {
          font-size: large;
          color: grey;
          cursor: pointer;
        }
      }
    }
    h3 {
      background-color: rgb(18, 15, 14);
      color:white;
    }
  }
`;