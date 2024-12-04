import React,{createContext,useContext,useState} from 'react';

const HooksUseContext = () => {
  return (
    <>
      <ContextsExample/>
    </>
  );
}

export default HooksUseContext;


export const GlobalStateContext = createContext(null);

export const ContextsExample = () => {
  const [isToggle,setIsToggle] = useState(false);
  return(
    <>
     <GlobalStateContext.Provider  value={{isToggle,setIsToggle}}>
        <div>
          <ChildToggle/>
          <ChildDisplay/>
        </div>
      </GlobalStateContext.Provider>
    </>
  )
}

const ChildToggle = () => {

  const {isToggle,setIsToggle} = useContext(GlobalStateContext);


  return(
    <>
     <button onClick={() => setIsToggle((prev) => !prev)}>Toggle State <span style={{color:re}}></span>[{isToggle ? 'yes' : 'no'}]</button>
    </>
  )
}


// child component to display state
const ChildDisplay = () => {

  const {isToggle} = useContext(GlobalStateContext)
  return(
    <>
     {isToggle ? 'ON' : 'OFF'}
     
    </>
  )
}
