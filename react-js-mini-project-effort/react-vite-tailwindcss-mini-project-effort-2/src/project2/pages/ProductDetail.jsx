import React from 'react'
import { Link, Outlet ,useParams} from 'react-router-dom'

export default function ProductDetail() {

  return (
    <div>
      <Link to="/product/123">123</Link>
      <br/>
      <Link to="/product/456">456</Link>
      <br/>
      <Link to="/product/789">789</Link>
      <Outlet/>
    </div>
  )
}
