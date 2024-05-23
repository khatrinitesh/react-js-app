import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-white py-4 mt-auto">
  <div className="container px-5">
    <div className="row align-items-center justify-content-between flex-column flex-sm-row">
      <div className="col-auto">
        <div className="small m-0">Copyright © Your Website {new Date().getFullYear()}</div>
      </div>
      <div className="col-auto">
        <a className="small" href="javascript:void(0)">
          Privacy
        </a>
        <span className="mx-1">·</span>
        <a className="small" href="javascript:void(0)">
          Terms
        </a>
        <span className="mx-1">·</span>
        <a className="small" href="javascript:void(0)">
          Contact
        </a>
      </div>
    </div>
  </div>
</footer>

  )
}
