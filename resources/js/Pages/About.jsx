import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "../../css/about.css"

const About = () => {
   
    const teamMembers = [
        
            {
                id: 1,
                name: 'Jana',
                imgUrl: '', 
                position: 'CEO & Founder',
                bio: 'Jana has over 10 years of experience in real estate...',
            },
            {
                id: 2,
                name: 'Mohammed',
                imgUrl: '', 
                position: 'CTO',
                bio: 'Mohammed is a leading expert in property technology...',
            },
            {
                id: 3,
                name: 'Sezin',
                imgUrl: '', 
                position: 'Designer',
                bio: 'Sezin creates amazing user experiences and designs...',
            },
            {
                id: 4,
                name: 'Funda',
                imgUrl: './images/IMG_1842.JPG', 
                position: 'Marketing Director',
                bio: 'Funda has a strong track record in digital marketing...',
            },
        ];
      

    return (
        <div className="bg-[#1e2127] text-white font-sans section">
            {/* Header with Background Image */}
            <div className="relative h-96 w-full overflow-hidden background-image">
                <img src="./images/pexels-max-vakhtbovycn-70314084.jpg" alt="About Us" className="w-full h-full object-cover"/>  
            </div>
                {/* About Us Box */}
                <div className="absolute bottom-[800px] left-[calc(35%-90px)] transform -translate-x-1/2 bg-orange-500 py-20 p-12 w-full md:w-1/2 lg:w-1/3 text-center rounded-lg block" style={{ backgroundColor: '#f7931a' }}>
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="mb-2 mt-6">
                        At Realla we pride ourselves on our unique features that allow for easy and efficient
                        communication between property owners and their tenants. Take advantage of having all your
                        rental needs met under one simple and effective platform. Planning and managing has never
                        been so easy.
                    </p>
                    <p className="mt-6">Still looking for a property to rent or let?</p>
                    <p className="mt-6">Check out the <a href="#" className="text-white underline">Find a Home</a></p>
                </div>

            {/* Right Side Text with Checkmarks */}
            <div className="flex justify-end items-center h-96 relative">
            <div className="w-full md:w-1/2 lg:w-1/3 p-8 mr-[-1rem] md:mr-[-2rem] lg:mr-[8rem]"> 
                    <ul className="list-none space-y-4">
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Manage your rent and utilities in one place.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Report and solve issues quickly and efficiently.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Chat with your landlord or tenant using our latest chatbox feature.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Our 'Find a Home' feature allows future tenants / property owners to find each other easily and connect.</li>
                    </ul>
                </div>
            </div>

        {/* Our Team Section */}
        <section className="px-8 py-16">
            <div className="text-center">
            <div className="flex items-center justify-center mb-16"> {/* Adjusted for spacing */}
                <span className="inline-block w-60 h-0.5 bg-yellow-500"></span>
                <h3 className="text-2xl font-bold mx-3">Our Team</h3>
                <span className="inline-block w-60 h-0.5 bg-yellow-500"></span>
            </div>
        {/* Introduction text with the sentences on separate lines for better readability */}
            <p className="text-center mx-auto px-4 mb-4">Meet our dynamic team driving innovation at Realla.</p>
            <p className="text-center mx-auto px-4 mt-4 mb-16">Together, we embody the spirit of Realla and work tirelessly to redefine the rental experience for property owners and tenants alike.</p>
            </div>
      




                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-gray-800 p-4 rounded-lg shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"style={{ backgroundColor: '#444d57' }}>
                            <img src={member.imgUrl} alt={member.name} className="h-48 w-full mb-4 rounded-md object-cover" />
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-yellow-500">{member.position}</p>
                            <p className="text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;
