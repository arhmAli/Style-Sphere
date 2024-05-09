"use client"
import React from "react";
import Image from "next/image";
import './form.css'
import Link from "next/link";
import { useState } from "react";
const Form = () => {
  const location = ["select a location","faisalabad", "lahore", "islamabad"];
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleClick=(e)=>{
    setSelectedLocation(e.target.value)
  }
  const handleChange=(e)=>{
    setSelectedLocation(e.target.value)
  }
  return (
    <div className="relative">
    <Image
    className="img-top absolute top-0 left-0 z-10 border-2 border-gray-500 rounded-full"
        src={"/top.jpg"}
        alt="top"
        width={50}
        height={50}    
    />
      <div className="links text-gray-500 z-20">
        <Link href="/contactus"><span className="pr-2">Contact us</span></Link>
        <Link href="/aboutus"><span className="pr-2">About us</span></Link>
        <Link href="/"><button className="border border-gray-500 hover:border-gray-700 rounded-md px-3 py-1">Start Shopping</button></Link>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="form-div bg-gray-100 p-4 text-center relative">
          <h2 className="text-2xl mb-4 mt-10">Find Your Cloth Partner</h2>
          <p className="text-l">Cloth finding web app to find yourself a buddy to shop instead of you</p>
          <label className="block my-4">Select Your Location To Get Started</label>
          <select className="border border-gray-300 rounded px-3 py-1 mb-4 h-10" onChange={handleChange}>
            {location.map((item, ind) => (
              <option key={ind} value={item} >{item}</option>
            ))}
          </select>
          <Link href={`/userinfo?city=${encodeURIComponent(selectedLocation)}`}><button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Search</button></Link>
          <div className="ribbon"></div>
          <Image
            className="img"
            src="/image-bel-2.png"
            alt="image"
            width={200}
            height={200}
          />
          <Image
            className="img-2"
            src="/image-bel.png"
            alt="image"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>);
};

export default Form;
