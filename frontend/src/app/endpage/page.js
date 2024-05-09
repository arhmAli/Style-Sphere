"use client"
import Link from "next/link";
import '../userinfo/styles.css'
const Page = () => {
  const handleRedirect=()=>{
    window.location.href="/"
  }
  return (
    <>
    
    <div className="bg-gray-200 p-8 dialog-div merged-bg">
      <h1 className="text-2xl font-bold mb-4 text-white">
        <span className="ml-20">Thank you for using our service</span> <br />
        Our employee will contact you within 2-4 hours
      </h1>
      {/* <Link href={window.location.href='/'}> */}
        <button onClick={handleRedirect}className="text-blue-500 hover:underline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">Press to go back home</button>
      {/* </Link> */}
    </div>
    </>
  );
};

export default Page;
