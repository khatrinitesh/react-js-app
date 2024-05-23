import React from 'react'

export default function CustomApp() {

    const CustomHeading = () => {
        return <h2>Nitesh Khatri</h2>
    }
  return (
    <div>
      <Center>
        <CustomHeading/>
      </Center>
    </div>
  )
}

function Center({children}){
    return(
        <div style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
            {children}
        </div>
    )
}
