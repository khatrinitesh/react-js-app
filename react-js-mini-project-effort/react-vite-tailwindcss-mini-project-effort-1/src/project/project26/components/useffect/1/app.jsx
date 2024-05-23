import React,{useEffect,useState} from 'react';

export default function UseEffectApp() {
    

  return (
    <div className='content_useEffect'>
        <UseEffectExample/>
    </div>
  )
}

//==================================== 6
class UseEffectExample extends React.Component{

    state = {
        message:'Classes are not confusing'
    }

    componentDidMount(){
        console.log(this.state.message)
    }
    render(){
        return(
            <>
            {this.state.message}
            </>
        )
    }
}

//==================================== 5
// function UseEffectExample(){

//     const [name,setName] = useState('nitesh');
//     useEffect(() => {
//         console.log(name)
//     },[])
//     return(
//         <>
//          {name}
//         </>
//     )
// }

//==================================== 4
// class UseEffectExample extends React.Component{ 
//     constructor(props){
//         super(props)
//         this.state = {
//             name:'Gems'
//         }
//     }

//     componentDidMount(){
//         document.title = 'Gems'
//     }
//     componentDidUpdate(_,prevState){
//         if(this.state.name !== prevState.name){
//             document.title = this.state.name
//         }
//     }
//     render(){
//         return(
//             <>
//             <input value={this.state.name} onChange={(e) => this.setState({name:e.target.value})}/>
//             </>
//         )
//     }
// }

//==================================== 3
// function UseEffectExample(){
//     const [name,setName] = useState('Michael')

//     useEffect(() => {
//         document.title = name;
//     },[name]);
//     return(
//         <>
//         <input value={name} onChange={(e) => setName(e.target.value)}/>
//         </>
//     )
// }

//==================================== 2
// function UseEffectExample(){
//     const [count, setCount] = useState(0);
//     const updateCount = () => setCount(count + 1);

//     return(
//         <>
//         <button onClick={updateCount}>{count}</button>
//         {count < 5 && <Simple count={count}/>}
//         {count < 5 && <Simple count={-1}/>}
//         </>
//     )
// }
// function Simple(){
//     useEffect(() => {
//         console.log("Use Effect 1!")
//         return () => {
//           console.log("Unmount")
//         }
//       })

//       return(
//         <>
//          Test
//         </>
//       )
// }
// function Simple({count}){
//     useEffect(() => {
//         console.log("Render" + count)
//         return () => {
//             console.log("Unmount" + count)
//         }
//       },[count])

//       return(
//         <>
//          Count - {count}
//         </>
//       )
// }


//==================================== 1
// function UseEffectExample(){
//     const [count,setCount] = useState(0);

//     const btnInc =() => {
//         setCount(c => c+ 1)
//     }
//     const btnDec =() => {
//         setCount(c => c - 1)
//     }
//     const btnRes =() => {
//         setCount(0)
//     }

//     return(
//         <>
//         {count}
//         <br/>
//         <button onClick={btnInc}>+</button>
//         <button onClick={btnDec}>-</button>
//         <button onClick={btnRes}>Reset</button>
//         </>
//     )
// }