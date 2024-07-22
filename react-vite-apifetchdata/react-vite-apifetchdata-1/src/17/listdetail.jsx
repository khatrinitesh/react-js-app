import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const { idParams } = useParams(); // Get the ID parameter from the URL
  
    const APIDummy = "https://dummyjson.com/products";
  
    const btnBack = () => {
      navigate("/");
    };
  
    useEffect(() => {
      if (idParams) {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await fetch(`${APIDummy}/${idParams}`);
            if (!response.ok) {
              throw new Error(`Http status ${response.status}`);
            }
            const result = await response.json();
            setLoading(false);
            setData(result);
            console.log(result);
          } catch (error) {
            setError(error.message);
            setLoading(false);
          }
        };
        fetchData();
      }
    }, [idParams]);
  
    if (loading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">Loading...</div>
        </div>
      );
    }
    if (error) {
      return (
        <div className="flex justify-center items-center h-screen">
          <div className="text-center">{error}</div>
        </div>
      );
    }
  
    console.log(data);

    return (
      <div className="container mx-auto p-4">
        <button
          onClick={btnBack}
          className="bg-black text-white rounded-[10px] px-[20px] py-[5px]"
        >
          Back
        </button>
        <div className="container mx-auto p-4">
          <h2 className="text-2xl font-bold mb-4">Product Dummy Detail</h2>
          <img
            src={data?.thumbnail}
            alt={data?.title}
            className="w-full h-40 object-cover"
          />
          <h2 className="text-lg font-semibold mb-2">
            {data?.id} - {data?.title}
          </h2>
          <p className="text-gray-600 mb-4">{data?.description}</p>
          <span className="text-gray-600 mb-4 block">
            <strong>Rating</strong>: {data?.rating}
          </span>
          <span className="text-gray-600 mb-4 block">
            <strong>Stock</strong>: {data?.stock}
          </span>
          <span className="text-gray-600 mb-4 block">
            <strong>Brand</strong>: {data?.brand}
          </span>
          <span className="text-gray-600 mb-4 block">
            <strong>Category</strong>: {data?.category}
          </span>
          <div className="flex justify-between items-center">
            <span className="text-gray-800 font-bold">{data?.price}</span>
            <span className="text-gray-600">{data?.discountPercentage}% off</span>
          </div>
        </div>
      </div>
    );
};

export default Detail;
