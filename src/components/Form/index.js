export default function Form() {
    return (
        <section>
            <form className="form w-[80%]" action="">
                <input
                    className="user_name border pl-3 py-3 outline-none w-full mb-4"
                    type="text"
                    placeholder="Your name"
                />
                <div className="mb-4 flex justify-between">
                    <input
                        className="email border pl-3 py-3 outline-none w-[48%]"
                        type="text"
                        placeholder="Email address"
                    />
                    <input
                        className="phone border pl-3 py-3 outline-none w-[48%]"
                        type="text"
                        placeholder="Your phone"
                    />
                </div>
                <textarea
                    className="message border pl-3 py-3 outline-none w-full mb-4"
                    placeholder="Message"
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                ></textarea>
                <input
                    className="w-full bg-red-500 text-white h-[50px] cursor-pointer uppercase text-[]"
                    type="submit"
                    value="send message"
                />
            </form>
        </section>
    );
}
