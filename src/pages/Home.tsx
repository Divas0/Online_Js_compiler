import { Link } from "react-router-dom";

  
 export default function Home() {
  return (
    <div className="w-full h-[calc(100dvh-60px)] text-white flex justify-center items-center flex-col bg-zinc-950 gap-3">
      <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-blue-900 via-green-200 to-indigo-400 text-transparent bg-clip-text">Online Html , Css & Javascript compiler</h1>

      <Link to="/compiler" className="  text-gray-200 text-center text-3xl px-[20px] py-[13px] font-bold mt-[10px] hover:bg-purple-800 bg-green-700 scale-90  border rounded-lg ">
       Start Coding 
      </Link>
    </div>
  );
}