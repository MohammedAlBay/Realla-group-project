import { useForm } from '@inertiajs/inertia-react';
import { useState } from 'react';

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitting(true);
        post('/register', {
            onSuccess: () => {
                // Handle successful registration, e.g., redirect user
                // or display success message.
            },
            onError: () => {
                setSubmitting(false);
            }
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
            {errors.name && <span>{errors.name}</span>} {/* Display name validation error */}
            <input type="email" value={data.email} onChange={(e) => setData('email', e.target.value)} />
            {errors.email && <span>{errors.email}</span>} {/* Display email validation error */}
            <input type="password" value={data.password} onChange={(e) => setData('password', e.target.value)} />
            {errors.password && <span>{errors.password}</span>} {/* Display password validation error */}
            <input type="password" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)} />
            {errors.password_confirmation && <span>{errors.password_confirmation}</span>} {/* Display password confirmation validation error */}
            <button type="submit" disabled={processing || submitting}>Register</button>
        </form>
    );
};

export default Register;
