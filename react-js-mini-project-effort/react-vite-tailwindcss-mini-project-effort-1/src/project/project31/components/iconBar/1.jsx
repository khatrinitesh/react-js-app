import React from 'react';
import { FiAlertCircle } from "https://cdn.skypack.dev/react-icons@4.1.0/fi";
import { RiBarChartGroupedLine } from "https://cdn.skypack.dev/react-icons@4.1.0/ri";
import {FaHome,FaUser,FaEnvelope } from 'react-icons/fa'
import {NavLink} from 'react-router-dom';

const LinkColor = {
    color:'#fff',
    display:'block',
    marginBottom:'10px'
}

export default function IconBar() {
  return (
    <>
        Icon from Feather Icons: <FiAlertCircle /> <br />
        Icon from Remix Icon: <RiBarChartGroupedLine /> <br />
        <hr/>
        <div className="icon-bar w-100 d-flex">
            <NavLink to="/"><FaHome style={LinkColor} /></NavLink>
            <NavLink to="/"><FaUser style={LinkColor}/></NavLink>
            <NavLink to="/"><FaEnvelope style={LinkColor} /></NavLink>
        </div>
    </>
  )
}
