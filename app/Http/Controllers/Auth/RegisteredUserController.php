<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Session;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {

        return Inertia::render('Auth/Register')->with('flash', session('success'));

    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        // If you need to validate password confirmation separately, you can do so
        if ($request->password !== $request->password_confirmation) {
            throw ValidationException::withMessages([
                'password_confirmation' => 'The password confirmation does not match.',
            ]);
        }

        // Log a message before creating the user
        Log::info('Attempting to create a new user', ['user_data' => $request->only(['name', 'email'])]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Log a message after successfully creating the user
        Log::info('User created successfully', ['user_id' => $user->id]);

        event(new Registered($user));

        Auth::login($user);

        Session::flash('success', 'Registration successful!');

        return redirect('/dashboard-tenant')->with('success', 'Registration successful!');
    }
}
