import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
        <h1>Header Part</h1>
        <nav>
            <ul>
                <li> <Link to={'/'}> Home </Link>   </li>
                <li>  <Link to={'/About-us'}> About-us </Link>   </li>
                <li>   <Link to={'/course'}> Course </Link></li>
                <li>   <Link to={'/blog'}> Blogs </Link></li>
            </ul>
        </nav>
    </div>
  )
}
