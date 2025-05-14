import { useNavigate } from "react-router-dom";


const About = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate('/')
  }
  return (
    <div className='content w-dvw py-[20px]'>
      <div className="container mx-auto">
      About page
      <br />
      <button onClick={handleNav} className="cursor-pointer bg-blue-600 text-white px-[10px] py-[5px] ">Back</button>
      </div>
    </div>
  );
}

export default About;
