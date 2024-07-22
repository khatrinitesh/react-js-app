import React from "react";

const CustomApp = () => {
  // Example state to control conditional rendering
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <>
     <div className="min-h-screen flex items-center justify-center">
      {isLoggedIn ? (
        <LoggedInComponent setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
    </>
  )
};

export default CustomApp;

function LoggedInComponent({ setIsLoggedIn }) {
    return (
      <div className="bg-green-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Welcome, User!</h1>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      </div>
    );
  }

  function LoginForm({ onLogin }) {
    function handleSubmit(event) {
      event.preventDefault();
      onLogin();
    }
  
    return (
      <form onSubmit={handleSubmit} className="bg-blue-200 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl mb-4">Login</h1>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Login
        </button>
      </form>
    );
  }