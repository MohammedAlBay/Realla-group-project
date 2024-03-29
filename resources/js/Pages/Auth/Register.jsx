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
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <input type="text" id="name" name="name" value={data.name}
                   onChange={(e) => setData('name', e.target.value)}/>
            <input type="email" id="email" name="email" value={data.email}
                   onChange={(e) => setData('email', e.target.value)}/>
            <input type="password" id="password" name="password" value={data.password}
                   onChange={(e) => setData('password', e.target.value)}/>
            <input type="password" id="password_confirmation" name="password_confirmation"
                   value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}
                   placeholder="Confirm Password"/>
            <button type="submit" disabled={processing}>Register</button>

            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </form>
    );
};

export default Register;

