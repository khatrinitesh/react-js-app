import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleNav = () => {
    navigate("about");
  };
  const expressionData1 = [1, 2, 3, 4];
  const expressionData2 = [4, 5, 6, 7];
  const expressionData3 = [8, 9, 10, 11];
  const a = 10;
  const b = 20;
  const result = a + b;

  const fullname = "nitesh khatri";

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleFocus = () => {
    inputRef.current?.focus();
  };
  return (
    <div className="content h-full bg-red-200 py-[20px]">
      <GetComputedStyleExample/>
      <div className="container mx-auto">
        <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
          <h2 className="text-lg font-bold mb-4">focus() Example</h2>

          <input
            ref={inputRef}
            type="text"
            placeholder="Type something..."
            className="border p-2 w-full mb-4 rounded focus:outline-blue-500"
          />

          <button
            onClick={handleFocus}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Set Focus to Input
          </button>
        </div>
        {fullname.toUpperCase().length}
        HomePage
        <br />
        <button
          onClick={handleNav}
          className="cursor-pointer bg-blue-600 text-white px-[10px] py-[5px] "
        >
          Next
        </button>
      </div>
      <Profile expressionData={expressionData1} />
      <Profile expressionData={expressionData2} />
      <Profile expressionData={expressionData3} />
      {result}
      <br />
    </div>
  );
};

export default Home;

function GetComputedStyleExample() {
  const textRef = useRef(null);
  const [styles, setStyles] = useState({
    color: "",
    fontSize: "",
    margin: "",
  });

  const handleGetStyles = () => {
    if (textRef.current) {
      const computed = window.getComputedStyle(textRef.current);
      setStyles({
        color: computed.color,
        fontSize: computed.fontSize,
        margin: computed.margin,
      });
    }
  };
  return (
    <>
      <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
        <h2 className="text-lg font-bold mb-4">getComputedStyle() Example</h2>

        <p
          ref={textRef}
          style={{ color: "blue", fontSize: "20px", margin: "20px 0" }}
          className="font-medium"
        >
          This is a sample text element.
        </p>

        <button
          onClick={handleGetStyles}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Get Computed Styles
        </button>

        <div className="mt-4 text-sm text-gray-700">
          <p>
            <strong>Color:</strong> {styles.color}
          </p>
          <p>
            <strong>Font Size:</strong> {styles.fontSize}
          </p>
          <p>
            <strong>Margin:</strong> {styles.margin}
          </p>
        </div>
      </div>
    </>
  );
}

function Profile({ expressionData }) {
  return (
    <>
      {expressionData}
      <img
        src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg"
        alt="Katherine Johnson"
      />
    </>
  );
}
