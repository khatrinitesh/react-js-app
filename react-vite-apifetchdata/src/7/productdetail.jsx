import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

const ProductDetail = () => {
  const [listdata, setListdata] = useState([]);
  const navigate = useNavigate();

  const btnBack = () => {
    navigate("/");
  };

  const baseurl = `https://www.themealdb.com/api/json/v1/1/categories.php`;
  const { id } = useParams();

  const fetchData = async () => {
    if (id) {
      try {
        const response = await fetch(`${baseurl}${id}`);
        const result = await response.json();
        console.log(result);
        if (result && result) {
          setListdata(result.categories[id - 1]);
        } else {
          console.log("Category not found");
        }
      } catch (error) {
        console.log("Fetching data failed:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <button className="btn-[orange] px-[10px] py-[5px]" onClick={btnBack}>
          Back
        </button>
        <div className="flex items-center justify-center flex-col p-[10px] card bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <h2 className="text-[red] font-bold text-[30px]">
            {listdata.idCategory}
          </h2>
          <h2 className="text-[blue] font-bold text-[30px]">
            {listdata.strCategory}
          </h2>
          <img src={listdata.strCategoryThumb} alt="" className="border-rounded-full" />
          <p>{listdata.strCategoryDescription}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
