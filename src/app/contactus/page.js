import '../aboutus/about.css'
const Page=()=>{
    return(
        <div className="p-4 cntct">
            <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
            <p className="mb-8">Have questions or feedback? We'd love to hear from you! Feel free to contact us by filling the form <br/> and we'll get back to you as soon as possible.</p>
            <form action="mailto:>">
                <label className="block my-4">Name</label>
                <input type="text" className="border border-gray-300 rounded px-3 py-1 mb-4 h-10 w-100"/>
                <label className="block my-4">Email</label>
                <input type="email" className="border border-gray-300 rounded px-3 py-1 mb-4 h-10 w-100"/>
                <label className="block my-4">Message</label>
                <textarea className="border border-gray-300 rounded px-3 py-1 mb-4 h-40 w-full"></textarea>
                <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">Send</button>
            </form>
        </div>
    )
}
export default Page;