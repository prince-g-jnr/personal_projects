function Contact() {
    return (
        <div className="px-10 mt-40 pc-32">
            <h2 className="text-4xl font-bold mb-8">Connect with me</h2>
            <form className="max-w-xl flex flex-col gap-5 py-5 animate-fade-in-up">
                <input
                    type="email"
                    placeholder="Email"
                    className="px-5 py-4 bg-[#15172e] rounded-md outline-none focus:rind-2 focus:ring-red-500 shadow-lg"
                />
                <textarea
                    placeholder="Message"
                    className="px-5 py-4 bg-[15172e] rounded-md outline-none focus:ring-2 focus:ring-red-500 shadow-lg h-32"
                ></textarea>
                <button className="w-fit px-6 py-3 bg-red-500 font-semibold rounded-md">
                    Stay Connected →
                </button>
            </form>
        </div>
    );
}

export default Contact;