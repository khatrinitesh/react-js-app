import React,{useState} from "react";

const InputFieldNavbarApp = () => {
  return(
    <>
    <Navbar/>
    </>
  )
};

export default InputFieldNavbarApp;

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log('search term:',searchTerm)
  }
  return (
    <>
      <nav>
        <div className="navbar-container">
          <div className="logo">Your Logo</div>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </nav>
    </>
  );
};
