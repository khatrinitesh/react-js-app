import React from "react";
import ChildCompo from "./child";
import I1 from "./img/1.jpg";
import I2 from "./img/2.jpg";
import I3 from "./img/3.jpg";

export default function Example() {
  const dataObject = [
    {
      img: `${I1}`,
      name: "Cyxus",
      desc: "Non-Slip Fitness Leisure Running Sneakers",
      price: "$29",
    },
    {
      img: `${I2}`,
      name: "Vitike",
      desc: "Latest Men Sneakers -Black",
      price: "$100",
    },
    {
      img: `${I3}`,
      name: "Aomei",
      desc: "Mens Trend Casual Sports Shoe",
      price: "$40",
    },
    {
        img: `${I1}`,
        name: "mitr",
        desc: "Non-Slip Fitness Leisure Running Sneakers 11",
        price: "$50",
      },
      {
        img: `${I2}`,
        name: "nitesh",
        desc: "Latest Men Sneakers -Black 1111",
        price: "$150",
      },
      {
        img: `${I3}`,
        name: "sumit",
        desc: "Mens Trend Casual Sports Shoe 111",
        price: "$400",
      },
  ];


  const arr = ['bobby', 'hadz', 'com'];

    const students = [
        { name: 'John Doe', age: 12 },
        { name: 'Jane Doe', age: 14 },
    ];
    const locale = {
        state: 'Florida',
        country: 'USA',
    };

    const message = { text: "Hello world!" };
  return (
    <div>
      {dataObject.map((val, idx) => {
        return (
          <div key={idx}>
            <ChildCompo img={val.img} name={val.name} desc={val.desc} price={val.price} />
          </div>
        );
      })}

      {arr.map((element,idx) => {
        return(
            <div key={idx}>
                <h2>{element}</h2>
            </div>
        )
      })}
      {students.map((element,idx) => {
        return(
            <div key={idx}>
                <h2>{element.name} - {element.age}</h2>
            </div>
        )
      })}
      {locale.state} - {locale.country}
      {typeof message === 'string' ? message : null}
    </div>
  );
}
