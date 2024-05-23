import React,{useState,useEffect} from 'react'

export default function HooksApp() {

    const [something,setSomething] = useState('nitesh khatri');

    useEffect(() => {},[something]);

    // if(!id){
    //     return 'No id provided';
    // }
  return (
    <section>
    {/* {!id ? ' no id provided' : '<div>Product card</div>'} */}
    {something}
    </section>
  )
  
}
