"use client";
import { AiFillQuestionCircle } from "react-icons/ai";
import React, { useEffect, useState } from 'react';


const RadioButtonGroup = () => {

  const [radio] = useState([
    {
      name: "page",
      label: "Everyone",
      value: "true",
    },
    {
      name: "page",
      label: "Reviewee (3)",
      value: "reviewee",
    },
    {
      name: "page",
      label: "Manager (0)",
      value: "Manager",
    },
  ]);

  const [review, setReview] = useState<String>(radio[0].label);


  const RadioButton = ({name, label, value, onChange, options, className} : {name?:string, label?:string, value?:boolean, onChange?:any, options?:any, className:any }) => {
    return (
      <label>
        <input type='radio' name="page" checked={value} onChange={onChange} />
        {label}
      </label>
    )
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReview(event.target.value);
  };

  useEffect(() => {
    console.log(review);
  }, [review]);

  return (
    <div className='radio flex flex-col items-start mb-5 ml-4'>
      <div className="flex gap-1">
        <h1 className='font-semibold mb-3'>See question list of:</h1>
        <AiFillQuestionCircle className="mt-1 text-gray-500"/>
      </div>
      {
        radio.map((radios, i) => (
      <RadioButton key={i} 
        className="radios"
        label={radios.label}
        options={radio}
        onChange={handleChange}
      />
      ))}
    </div>
  )
}

export default RadioButtonGroup;