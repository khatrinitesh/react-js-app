import React,{useState} from 'react'

const AnimateBtnsApp = () => {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };
  return (
    <>
      <button
          style={{
            width: '140px',
            height: '60px',
            padding: '20px',
            backgroundColor: isHovering ? 'green' : 'blue',
            color: isHovering ? 'white' : 'red',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          bobbyhadz.com
        </button>
    </>
  )
}

export default AnimateBtnsApp


