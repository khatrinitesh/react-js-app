import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Detail = () => {
  const [listdata, setListdata] = useState([]); // Initialize as null instead of an empty array
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const baseurl = "https://api-generator.retool.com/ikzsN3/data";
  const apiUrl = id ? `${baseurl}?Column1=value&id=${id}` : baseurl;

  const btnBack = () => {
    navigate("/");
  };

  const fetchdata = async () => {
    setLoading(true);
    if (id) {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`http failed to fetch data,${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        setListdata(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
  };
  useEffect(() => {
    fetchdata();
  }, [id]); // Refetch data when id changes

//   useEffect(() => {
//     if (loading) {
//       return (
//         <div>loading...</div> // Displaying error message
//         // You can also display a generic error message:
//         // return <div>Error: Failed to fetch data</div>;
//       );
//     }
//     if (error) {
//       return <div>{error.message}</div>;
//     }
//     if (!listdata) {
//       return (
//         <div>No data found</div> // Handle scenario when listdata is null
//       );
//     }
//   }, [loading, listdata, error]);
useEffect(() => {
    // Check if data array is not empty
    if (listdata.length > 0) {
      var column1Value = listdata[0]["Column 1"];
      if (column1Value !== undefined) {
        setData(column1Value);
      } else {
        console.log("Property 'Column 1' is undefined.");
      }
    } else {
      console.log("Data array is empty.");
    }
  }, [listdata, loading]);
  

  return (
    data && (
      <div>
        <div className="flex">
          <button onClick={btnBack}>
            <FaArrowLeft />
          </button>

          <h2>
            {id} - {data}
          </h2>
        </div>
      </div>
    )
  );
};

export default Detail;
