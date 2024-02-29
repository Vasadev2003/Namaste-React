
const ContactUs = () =>{
    return (
        <div>
            <h1 className = "font-bold text-2xl text-red-500 text-center">ContactUs</h1>
          
            <form className="flex flex-col justify-center items-center">
            <label className="font-bold">
                Enter The Name : 
            <input placeholder = "Name" className = "p-3 m-3 bg-white-200 text-black rounded-lg">

            </input>
            </label>
            <label className="font-bold">
                Enter The Email : 
            <input placeholder = "Email" className = "p-3 m-3 bg-white-200 text-black rounded-lg">

            </input>
            </label>
            <button className="p-3 m-3 bg-emerald-300 text-white font-bold rounded-lg cursor-pointer">Submit</button>
            </form>
        </div>
    )
}

export default ContactUs;