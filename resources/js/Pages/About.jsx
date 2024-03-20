import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    const headerImageUrl = '/pexels-max-vakhtbovycn-70314084.jpg'; 
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
            imgUrl: '', 
            position: 'Marketing Director',
            bio: 'Funda has a strong track record in digital marketing...',
        },
    ];
  
    return (
        <div className="bg-gray-900 text-white font-sans">
            
            {/* Header with Background Image */}
            <header className="relative h-96 w-full overflow-hidden">
                <img src={headerImageUrl} alt="About Us" className="w-full h-full object-cover" />

            {/*About Us Box */}
                <div className="absolute bottom-0 left-40 bg-orange-500 p-8 w-full md:w-1/2 lg:w-1/3 text-center rounded-lg" style={{ backgroundColor: '#f7931a' }}>
                    <h2 className="text-2xl font-bold">About Us</h2>
                    <p className="mb-2 mt-6">
                        At Realla we pride ourselves on our unique features that allow for easy and efficient
                        communication between property owners and their tenants. Take advantage of having all your
                        rental needs met under one simple and effective platform. Planning and managing has never
                        been so easy.
                    </p>
                    <p className="mt-6">Still looking for a property to rent or let?</p>
                    <p className="mt-6">Check out the <a href="" className="text-white underline">Find a Home</a> feature to connect with property owners or potential tenants.</p>
                </div>
            </header>

            {/* Right Side Text with Checkmarks */}
            <div className="flex justify-end items-center h-96 -mt-72 mr-8 lg:mr-40">
                <div className="w-1/2 lg:w-1/3">
                    <ul className="list-none space-y-4">
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Manage your rent and utilities in one place.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Report and solve issues quickly and efficiently.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Chat with your landlord or tenant using our latest chatbox feature.</li>
                        <li><FontAwesomeIcon icon={faCheck} className="text-yellow-500" /> Our Find a Home feature allows future tenants / property owners to find each other easily and connect.</li>
                    </ul>
                </div>
            </div>

            {/* Our Team Section */}
            <section className="p-8">
            <div className="text-center mb-24">
                <div className="flex items-center justify-center">
                    <span className="inline-block w-60 h-0.5 bg-yellow-500" style={{ backgroundColor: '#f7931a' }}></span> 
                        <h3 className="text-2xl font-bold text-white mx-3"style={{ margin: '0 50px' }}>Our Team</h3> 
                    <span className="inline-block w-60 h-0.5 bg-yellow-500" style={{ backgroundColor: '#f7931a' }}></span> 
                </div>
            </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-24">
                    {teamMembers.map(member => (
                        <div key={member.id} className="bg-white p-4 rounded-lg shadow-lg text-gray-800 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
                            <img src={member.imgUrl} alt={member.name} className="h-48 w-full mb-4 rounded-md object-cover" />
                            <h4 className="text-lg font-semibold">{member.name}</h4>
                            <p className="text-white-600">{member.position}</p>
                            <p className="text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;

