"use client"
import React,{ useState,useEffect} from "react";
import axios from "axios";
// import SimpleSlider from "../components/SimpleSlider";
import { useRouter} from "next/navigation";
import './styles.css'
import Link from "next/link";
const Page=({searchParams})=>{
    const [people,setPeople]=useState([]);
    const [customerSatisfied,setCustomerSatisfied]=useState(0);
    const [clientInfo,setClientInfo]=useState("");
    const [height,setHeight]=useState("");
    const [chestSize,setChestSize]=useState("");
    const [shoeSize,setShoeSize]=useState("");
    const [waistSize,setWaistSize]=useState("");
    

    const random=()=>{
        setCustomerSatisfied(Math.floor(20+Math.random()*100))
    }
    // let len=people.length();
    const router=useRouter()

    const city=searchParams.city
    let dbCity=""
    if(city==='faisalabad'){
        dbCity='fsd'
    }
    else if(city==='lahore'){
        dbCity='lhr'
    }
    else{
        dbCity='isb'
    }
    let cssClass=`main-div ${dbCity}`;
    const fetchData=async()=>{
        try{
        const res=await axios.get(`https://backendcloth-1nc1xbgw0-arhmalis-projects.vercel.app/persondata/${dbCity}`)
        console.log(res.data)
        setPeople(res.data)
        }
        catch(err){
            console.log(err)
        }
    }
    
    // const handleClick=async()=>{
        
    // }

    useEffect(()=>{
        if(!searchParams.city){
            router.push('/')
        }
        else{
        fetchData()
        random()
        }
    },[searchParams.city])

    return(
        <div className={`${cssClass} flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat `}>
            {/* <SimpleSlider/> */}
            <h1 className="text-3xl md:text-5xl text-white text-center">Welcome to {searchParams.city}</h1>
            <h3 className="text-lg md:text-xl text-white text-center">There are total {people.length} buddies in this city who'll shop for you!</h3>
            <h3 className="text-lg md:text-xl text-white text-center">We have satisfied over {customerSatisfied}00 customers in this city uptill now</h3>
            {/* {dbCity} */}
            {/* <div className="mt-8 text-white text-center">
        <p className="mb-4">At our service, you can say goodbye to ill-fitting clothes!
        <br/>
         Simply provide us with your measurements, and our dedicated shoppers in {searchParams.city} will find your clothing twin who will shop for you.</p>
        <p className="mb-4">Our unique approach ensures that you get the perfect fit every time, without the hassle of traditional shopping.</p>
        <p>Join our community of satisfied customers and experience the convenience and confidence of personalized shopping in {searchParams.city}!</p>
    </div> */}
        <h4 className="text-white">Fill Out the form to find you a matching partner</h4>
       <div className="form-div">
        <form>
            <label>Enter Your Name</label>
            <br/>
            <input
                type="text"
                value={clientInfo}
                onChange={(e)=>setClientInfo(e.target.value)}
                placeholder="Enter Your Name"
            />
            <br/>
            <label>Enter Your Height</label><br/>
            <input
                type="text"
                value={height}
                onChange={(e)=>setHeight(e.target.value)}
                placeholder="Enter Your Height"
            /><br/>
            <label>Enter Your chest size</label><br/>
            <input
                type="text"
                value={chestSize}
                onChange={(e)=>setChestSize(e.target.value)}
                placeholder="Enter Your Chest Size"
            /><br/>
            <label>Enter Your Shoe size </label><br/>
            <input
                type="text"
                value={shoeSize}
                onChange={(e)=>setShoeSize(e.target.value)}
                placeholder="Shoe size must be in eu format"
            />
            <br/>
            <label>Enter Your waist size</label>
            <br/>
            <input
                type="text"
                value={waistSize}
                onChange={(e)=>setWaistSize(e.target.value)}
                placeholder="Enter Your Waist Size"
             />
             <br/>
        </form>
       <Link
       href={{
        pathname:'/founddata',
        query:{
            city:dbCity,
            name:clientInfo,
            height:height,
            chestsize:chestSize,
            shoesize:shoeSize,
            waistsize:waistSize
        }
       }}>
        <button  className="bg-blue-500 text-white p-2 rounded">Find Buddy</button>
        </Link>
        </div>
        </div>
    )
}
export default Page;
