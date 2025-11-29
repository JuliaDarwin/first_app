import Link from "next/link"
export default function About(){
    return (
        <>
        <header className="p-4 relative h-60 bg-[url('/aboutbackground.jpg')] text-center">
       
        </header>
        <main>
            <h1 className="dark:text-white">About Pordon as a teacher</h1>
            <div className="flex flex-row items-center mt-10 mx-15">
            <img src={"/teacher.jpeg"} className="m-4 h-50" alt="teacher pordon"></img>
            <p className="justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem sequi architecto ex magni maiores dolore veritatis eligendi. Quaerat eaque rerum illum aperiam vel facere quidem delectus atque doloremque!</p>
            </div>

            <div className="flex flex-row items-center mt-10 mx-15">
            <p className="justify-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem atque, exercitationem sequi architecto ex magni maiores dolore veritatis eligendi. Quaerat eaque rerum illum aperiam vel facere quidem delectus atque doloremque!</p>
            <img src={"/teacher.jpeg"} className="m-4 h-50" alt="teacher pordon"></img>
            </div>
            <hr className="mx-20 my-10 border-2"></hr>
            <div className="mb-30 text-center ">
                <h2 className="m-4 mb-5">Start your learning here</h2>
                <Link href="/lessons"><button className="bg-yellow-100 text-black hover:bg-yellow-300 p-2 px-4 border-2 font-bold">Get started</button></Link>
            </div>
        </main>
        
        </>
     
    )
}