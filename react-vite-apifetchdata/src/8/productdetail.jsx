import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetail = () => {
  const [listdata, setListdata] = useState({});
  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/");
  };

  const { id } = useParams();
  const baseurl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`;

  const fetchData = async () => {
    if (id) {
      try {
        const response = await fetch(`${baseurl}`);
        const result = await response.json();
        console.log(result);


        if (result && result.meals) {

            const data = result.meals.filter((item) => item.idMeal === id)


            setListdata(data[0]);
          } else {
            console.log("Meal not found");
          }
      } catch (error) {
        console.log("Fetching data failed:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <div className="container mx-auto">
        <button className="btn-[orange] px-[10px] py-[5px]" onClick={btnBack}>
          Back
        </button>
        <div className="flex items-center justify-center flex-col p-[10px] card bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <h2 className="text-[blue] font-bold text-[30px]">
            {listdata.strMeal}
          </h2>
          <img
            src={listdata.strMealThumb}
            alt=""
            className="border-rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
