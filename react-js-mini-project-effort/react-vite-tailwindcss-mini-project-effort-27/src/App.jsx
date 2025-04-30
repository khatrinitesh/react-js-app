import { useEffect, useState } from "react";
import { fetchPosts, fetchUsers } from "./api/service";
import clsx from "clsx";
import GsapComponent from "./component/GsapComponent";
import TextSlider from "./component/GsapComponent";

function App() {
  const [dataPosts, setDataPosts] = useState(null);
  const [dataUsers, setDataUsers] = useState(null);
  const [active,setActive] = useState(false);
  const [secondActive,setSecondActive] = useState(false);


  useEffect(() => {
    fetchPosts()
    .then(setDataPosts)
    .catch((err) => console.error('Error fetching posts',err));
  }, []);

  useEffect(() => {
    fetchUsers()
    .then(setDataUsers)
    .catch((err) => console.error('Error fetching posts',err))
  }, []);

  const handleToggle = () => {
    setSecondActive(!secondActive);
  }


  return (
    <>
    <TextSlider/>
    <header className="header">
      <div className="container mx-auto">
        <div className="logoBlock">
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" className="hidden md:block imgLogoDesk" />
          <img src="https://www.logoai.com/oss/icons/2021/12/02/EoLJeYhT6YPfd26.png" alt="" className="imgLogoMob md:hidden" />
        </div>
      </div>
    </header>
    <button onClick={() => setActive(!active)} className={clsx("px-4 py-2 rounded",active ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black','transition duration-200')}>Clicked</button>

    <button onClick={handleToggle} className={clsx('text-white p-[10px] rounded-[5px] cursor-pointer outline-none font-bold bg-orange-400',active ? 'text-red-600' : '')}>
      {secondActive ? 'yes' : 'no'}
    </button>
     {dataUsers &&
        dataUsers.map((val) => {
          return (
            <>
              <div className="box" key={val.id}>
                <h3>{val.firstname}</h3>
              </div>
            </>
          );
        })}
      {dataPosts &&
        dataPosts.map((val) => {
          return (
            <>
              <div className="box" key={val.id}>
                <h3>{val.title}</h3>
              </div>
            </>
          );
        })}
      <div className="container mx-auto">
        <h1 className="headtitle">Head Title</h1>
        <div className="box">
          <input type="text" className="fieldInput" />
          <ul className="listItem">
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
          <button className="btnPrimary">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default App;
