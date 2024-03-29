import { useForm } from '@inertiajs/inertia-react';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
            <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
            <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
            <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
            <button type="submit" disabled={processing}>Register</button>
        </form>
    );
};

export default Register;

