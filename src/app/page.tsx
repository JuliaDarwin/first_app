import Link from "next/link"
import ThemeToggle from "./(components)/theme-toggle"


export default function Homepage() {
  return(
    <>
       <header className="p-4 relative h-60 bg-[url('/homepagepic.webp')] text-center">
       
        </header>
        <main className="text-center"> 
          <h1 className="2xl:text-5xl">Welcome to Pordon's lessons</h1>
          <div className="mx-10 my-20">
            <h2 className="2xl:text-4xl">Why Pordon school?</h2>
            <p className="2xl:text-3xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate reprehenderit voluptates corporis voluptatum at expedita consectetur magni, dolore commodi quos quo officia, neque, incidunt vel fuga modi omnis quia!</p>
          </div>
          <div className="mx-10 my-20">
            <h2 className="2xl:text-4xl">Modern Methods</h2>
            <p className="2xl:text-3xl lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem cupiditate reprehenderit voluptates corporis voluptatum at expedita consectetur magni, dolore commodi quos quo officia, neque, incidunt vel fuga modi omnis quia!</p>
          </div>
        </main>
          
        
        </>
  ) 
}
