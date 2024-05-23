import React from 'react'

export default function CustomApp() {

    
  return (
    <>
    <Card>
        <h2>Heading title</h2>
        <p>Aliqua eu sunt culpa magna enim aliquip consequat. Est ad irure et cillum cupidatat adipisicing dolore duis minim occaecat id. Amet pariatur adipisicing culpa officia aliquip do sint elit aute. Esse aute do aute adipisicing sunt adipisicing fugiat cupidatat laborum est quis. Sint incididunt sit eu quis ea magna deserunt cupidatat id adipisicing veniam. Ex voluptate dolor sunt anim laboris. Deserunt enim fugiat ipsum commodo magna in cillum magna eiusmod excepteur laborum laboris cillum sit.</p>
    </Card>
        <Button onClick={() => console.log('Clicked!')} color="blue" size="small">
        Small Button
        </Button>

        <Button onClick={() => console.log('Clicked!')} color="red" size="large">
        Large Button
        </Button>
    </>
  )
}


function Button({onClick,children,color,size}){
    const styles = {
        backgroundColor: color,
        padding: size === 'small' ? '5px' : '10px',
      };
    return(
        <>
        <button onClick={onClick} style={styles}>{children}</button>
        </>
    )
}

function Card({children}){
    return(
        <div className='card'>
        {children}
        </div>
    )
}