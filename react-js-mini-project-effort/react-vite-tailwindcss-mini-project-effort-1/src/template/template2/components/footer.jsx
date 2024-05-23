import React from 'react'

export default function Footer() {
  return (
    <>
      <footer class="container-fluid footer_section">
        <div class="container">
        <div class="row">
            <div class="col-lg-7 col-md-9 mx-auto">
            <p>
                © {new Date().getFullYear()} All Rights Reserved By
                <a href="https://html.design/" target='_blank'>Free Html Templates</a>
            </p>
            </div>
        </div>
        </div>
    </footer>
    </>
  )
}
