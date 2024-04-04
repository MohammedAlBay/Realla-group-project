
import { Head, Link, useForm } from '@inertiajs/react';
import GuestLayout from '@/Layouts/GuestLayout';
import '../../../css/register.css';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useEffect } from 'react';
import RegisterCheckbox from "@/Components/RegisterCheckbox.jsx";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setData(name, newValue);
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <div className="flex flex-col lg:flex-row bg-gray-900 text-white p-8 pt-24 relative" style={{ backgroundColor: '#292F36' }}>
                <div className="register-left lg:w-1/2 lg:ml-0 lg:mt-0 lg:mb-0 relative m-10">
                    <img src="/images/RegisterImage.png" alt="LoginOptions" className="object-cover w-full h-auto lg:absolute lg:inset-0  lg:h-full z-1" style={{ position: 'absolute', top: '40%', left: '70%', transform: 'translate(-50%, -50%)', zIndex: '1' }} />
                    <div className='register-image'></div>
                </div>
                <div
                    className="w-full max-w-md lg:w-1/2 lg:max-w-md lg:ml-auto lg:mr-20 mt-4 lg:mt-0 lg:mb-0 lg:ml-28 lg:mr-0">
                    <h2 className="text-2xl font-semibold mb-4">Create your Free Account</h2>
                    <p>Submit your data for registration</p>


                    <form onSubmit={submit} className="mt-4">

                        <div>
                            <InputLabel htmlFor="name" value="Name"/>

                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />

                            <InputError message={errors.name} className="mt-2"/>
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email"/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />

                            <InputError message={errors.email} className="mt-2"/>

                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Password"/>

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />

                            <InputError message={errors.password} className="mt-2"/>
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirm Password"/>

                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />

                            <InputError message={errors.password_confirmation} className="mt-2"/>
                        </div>

                        <div className="mb-4">
                            <label className="mr-4">Register as:</label>
                            <div className="flex items-center">
                                <RegisterCheckbox
                                    label="Landlord"
                                    name="isLandlord"
                                    checked={data.is_landlord}
                                    onChange={handleChange}
                                />
                                <div style={{width: '2rem'}}></div>
                                <RegisterCheckbox
                                    label="Tenant"
                                    name="isLandlord"
                                    checked={!data.is_landlord}
                                    onChange={(e) => handleChange({
                                        ...e,
                                        target: {...e.target, checked: !e.target.checked}
                                    })}
                                />
                            </div>
                        </div>


                        <div className="flex items-center justify-end mt-4">
                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Already registered?
                            </Link>

                            <PrimaryButton className="ms-4" disabled={processing}>
                                Register
                            </PrimaryButton>
                        </div>
                    </form>

                </div>
            </div>
        </GuestLayout>
    );
};


