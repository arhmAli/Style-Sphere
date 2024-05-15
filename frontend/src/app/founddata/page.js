"use client"
import React,{ useState,useEffect,useRef} from "react";
import axios from "axios";
import { redirect, useRouter} from "next/navigation";
import '../userinfo/styles.css'
import Link from "next/link";
const Page=({searchParams})=>{
    const [foundData,setFoundData]=useState([]);
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");
    const btnRef=useRef(null)
    const [redirect,setRedirect]=useState(false)
    const router=useRouter()
    const handleUpdate=async()=>{
        try{
            const res=await axios.post("https://backendcloth-1nc1xbgw0-arhmalis-projects.vercel.app/userdata",{
                city:searchParams.city,
                name:searchParams.name,
                height:searchParams.height,
                chestsize:searchParams.chestsize,
                shoesize:searchParams.shoesize,
                waistsize:searchParams.waistsize
            })
            console.log(res)
            setFoundData(res.data)
            if(foundData.length===0){
                setRedirect(true)
            }

            // router.push(`/founddata?data=${encodeURIComponent(JSON.stringify(res.data))}`)
            
        }
        catch(e){
            console.log('Error occurred while posting data', e);
        }
    }
    useEffect(()=>{
        handleUpdate()
        
    },[])
    const handleClick=async(e)=>{
        e.preventDefault()
        try{
            const res=await axios.post("https://backendcloth-1nc1xbgw0-arhmalis-projects.vercel.app/contactdata",{
                city:searchParams.city,
                email:email,
                phonenumber:phone
            })
            console.log(res)
        }
        catch(e){
            console.log('Error occurred while posting data', e);
        }
        setEmail("")
        setPhone("")
        router.push('/endpage')
    }
    const handleRedirect=()=>{
                   
            window.location.href="/"
        
    }
    // useEffect(()=>{
        
    // },[foundData])
    return(
        <div className={`main-found ${searchParams.city}`}>
            {foundData.length===0&&<h1 className="p-05 mt-10">Unfortunately there are no buddies 
            <br/>in your city with your size
            <br/>
            <button onClick={handleRedirect}className="text-blue-500 hover:underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">Go to Home Page</button>
            {/* <strong>Redirecting ....</strong> */}
            {/* <h3>{foundData.length}</h3> */}
            </h1>
            }
            {foundData.length>0&&
            <>
            <h1>We have found {foundData.length} matches with your size <br/> 
            Enter Your contact information below  </h1>
            <div className="form-div form-div-found">
                <form  className="pt-10" onSubmit={handleClick}>
                    <label className="pt-4">Enter Email</label>
                    <br/>
                    <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <br/>
                    <label>Enter Phone Number</label>
                    <input
                    type="text"
                    placeholder="Enter Phone Number"
                    value={phone}
                    onChange={(e)=>setPhone(e.target.value)}
                    />
                    <br/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                </form>
            </div>
            </>
            }
        </div>
    )
}
export default Page;
