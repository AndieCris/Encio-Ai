import { MoonIcon, SunIcon } from 'lucide-react';
import {useState} from 'react'
export default function App() {
  const [text,setText] =  useState("Andie");
  const handleInputChange = (e) => { 
  setText(e.target.value); }
  const handleSubmit = (e) => { 
    e.preventDefault();
    alert(text);
    setText("");
  };
  const [theme, setTheme] = useState("dark");
  const handleThemeChange = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
  }
  return (
    <div className={`h-screen w-full flex flex-col items-center justify-center ${theme==="light" ? "bg-white text-black" : "bg-gray-900 text-white"} `}>
      <div className="p-8 bg-blue-50 text-black rounded-lg mb-4 py-10 px-10">
       <input type="text" className="border border-blue-300 rounded-md p-2 m-4" value={text} onChange={handleInputChange}/>
        <button  onClick={handleSubmit} className="bg-blue-500 text-white px-6 py- 2 rounded-md p-2 m-4 hover:bg-blue-600">Submit</button>
        <button onClick={handleThemeChange} className="bg-gray-200 text-black px-6 py-2 rounded-md p-2 m-4 hover:bg-gray-300">{
          theme==="light" ?
          <SunIcon />
          :
          <MoonIcon/>
        }
        </button>
    </div>
    </div>
  )
} 