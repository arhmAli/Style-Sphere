"use client"
import SimpleSlider from '../components/SimpleSlider';
import './about.css'
import '../userinfo/styles.css'
const Page = () => {
    return (
        <div className="p-4 main ">
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="mb-8">Welcome to our cloth finding web app, where we aim to revolutionize the way you shop for clothes. Our mission is to make shopping more enjoyable and convenient by helping you find a shopping buddy to shop on your behalf.</p>
            
            <h2 className="text-2xl font-bold mb-2">Our Story</h2>
            <p className="mb-6">Our journey began with a simple idea: shopping for clothes should be fun, not a chore. We noticed that many people struggle to find the time or energy to shop for clothes, whether it's due to busy schedules, lack of interest, or other reasons. That's why we created this platform—to connect you with someone who shares your style preferences and can shop for you.</p>
            
            <h2 className="text-2xl font-bold mb-2">How It Works</h2>
            <ol className="list-decimal list-inside mb-6">
                <li className="mb-2"><strong>Select Your Location:</strong> Start by selecting your city from the dropdown menu. This helps us match you with a shopping buddy in your area.</li>
                <li className="mb-2"><strong>Find Your Buddy:</strong> Once you've selected your location, our algorithm will match you with a shopping buddy who matches your style and preferences.</li>
                <li className="mb-2"><strong>Sit Back and Relax:</strong> Your shopping buddy will take care of everything, from browsing the stores to trying on clothes. You can sit back and relax while they shop on your behalf.</li>
                <li className="mb-2"><strong>Receive Your Items:</strong> Once your shopping buddy has completed the shopping trip, they will deliver the items to your doorstep. Try them on at your leisure and keep what you like.</li>
            </ol>
            
            <h2 className="text-2xl font-bold mb-2">Our Team</h2>
            <p className="mb-6">We are a team of passionate individuals who believe that shopping should be a fun and stress-free experience. Our team includes fashion enthusiasts, tech experts, and customer service professionals who are dedicated to making your shopping experience memorable.</p>
            
            <h2 className="text-2xl font-bold mb-2">Contact Us</h2>
            <p className="mb-6">Have questions or feedback? We'd love to hear from you! Feel free to <a href="/contactus" className="text-blue-500 hover:underline">contact us</a> and we'll get back to you as soon as possible.</p>
            <h2 className="text-2xl font-bold mb-2">Feedback from our clients:</h2>
            <SimpleSlider/>
        </div>
    );
};

export default Page;
