function Contact() {
    return (<section className="flex flex-col   h-screen  items-center px-6 gap-6   ">
        <h2 className="text-3xl text-amber-950 font-mono font-bold  ">Contact Us</h2>
        <main className="flex flex-col justify-around items-start  h-3/5  p-6 ">
            <div className="flex flex-col items-start">
                <h3 className="text-lg text-amber-950 font-semibold ">Address:</h3> <p>
                    123 Main Street, Marrakech, Morocco</p></div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg text-amber-950 font-semibold">Phone:</h3>
                <p>+212 6 12 34 56 78</p>
            </div>
            <div className="flex flex-col items-start">
                <h3 className="text-lg text-amber-950 font-semibold">Opening Hours:</h3>
                <p>
                    Monday – Friday: 10:00 AM – 10:00 PM
                    Saturday – Sunday: 12:00 PM – 12:00 AM</p></div></main>
    </section>);
}
export default Contact;