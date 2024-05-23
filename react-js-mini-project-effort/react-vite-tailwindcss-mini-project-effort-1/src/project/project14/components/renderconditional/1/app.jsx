import React, { useState }  from 'react'

export default function RenderConditon() {
    const [toggle, setIsToggle] = useState(false)

    const btnToggle = () => {
        setIsToggle(!toggle)
    }
  return (
    <div>
      <h1>Choose your favorite pet</h1>
      <button onClick={btnToggle}>Change</button>
      {toggle && <Choose />}
    </div>
  )
}

function Choose(){
    return(
        <>
          <p>I am a cute Dog</p>
            <img className='img-fluid'
                src="https://wallpapers.com/images/featured/dog-wj7msvc5kj9v6cyy.jpg"
                alt="cute dog"
            />
        </>
    )
}