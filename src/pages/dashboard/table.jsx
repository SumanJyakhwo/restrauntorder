import React from "react";
import { useNavigate } from "react-router-dom";
import myImage from './table.jpg';
const Table = () => {
    const navigate = useNavigate();
    const table = [
      {
      code: "A",
      TableNo: "1",
      img: myImage,
      },
      {
        code: "B",
          TableNo: "2",
          img: myImage,
      },
      {
        code: "C",
        TableNo: "3",
        img: myImage,
      },
     {
    code: "D",
    TableNo: "4",
    img: myImage,
     },
     {
        code: "E",
        TableNo: "5",
        img: myImage,
        },
        {
          code: "F",
            TableNo: "6",
            img: myImage,
        },
        {
          code: "G",
          TableNo: "7",
          img: myImage,
        },
       {
      code: "H",
      TableNo: "8",
      img: myImage,
       },
       {
        code: "I",
        TableNo: "9",
        img: myImage,
      },
     {
    code: "H",
    TableNo: "10",
    img: myImage,
     },
     {
        code: "I",
        TableNo: "11",
        img: myImage,
         },
         {
          code: "J",
          TableNo: "12",
          img: myImage,
        },
    ];
    const chunks = [
    ];

  for (let i = 0; i < table.length; i += 4) {
    chunks.push(table.slice(i, i + 4));
  }
  const handleOrder=()=>{
navigate("/mainscreen");
  };
  return (
    
      <div className="p-4">
      {chunks.map((chunk, index) => (
        <div key={index} className="flex -mx-4 p-4">
          {chunk.map((item, id) => (
            <div key={id} className="w-1/4 px-4">
                 <div className="border border-gray-300 rounded-lg p-4 text-center">
              <img src={item.img} alt="Table Image" className="h-44 w-48 object-center" />
              <h1 className="mt-2 text-sm font-bold">Code: {item.code}</h1>
              <h2 className="text-sm">TableNo: {item.TableNo}</h2>
              <button onClick={handleOrder}
              className="px-3 py-1 mr-2 text-white bg-purple-500 rounded hover:bg-purple-600 focus:outline-none">
                View Order
              </button>
            </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}


export default Table;
