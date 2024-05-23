import React from 'react';
import {BrowserRouter as Router,Route,Routes ,Link} from 'react-router-dom';
import User from './pages/user';

export default function CustomApp() {

    let users = [
        {id:1,name:'nitesh',age:34},
        {id:2,name:'sameet',age:41},
        {id:3,name:'urvashi',age:65},
        {id:4,name:'arvind',age:68},
        {id:5,name:'manisha',age:43},
    ]
  return (
    <Router>
      {users.map((item) => {
        return(
            <div>
                <Link to={"/user/"+item.id+"/"+item.name}>
                    <h3>{item.name}</h3>
                </Link>
            </div>
        )
      })}
      <Routes>
        <Route path="/user/:id/:name" element={<User/>}/>
      </Routes>
    </Router>
  )
}
