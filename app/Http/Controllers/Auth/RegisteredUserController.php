<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
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
    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'is_landlord' => 'required|boolean',
        ]);

        $user = new User([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'is_landlord' => $request->is_landlord,
        ]);

        $user->save();

        return response()->json(['message' => 'User registered successfully'], 201);
    }

    public function create(): Response
    {
        return Inertia::render('Auth/Register')->with('flash', session('success'));
    }

    public function store(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'is_landlord' => 'required|boolean',
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'is_landlord' => $request->is_landlord,
            ]);

            // Log the user in
            Auth::login($user);

            // Fire the Registered event
            event(new Registered($user));

            // Log a success message
            Log::info('Registration successful for user', ['user_id' => $user->id]);

            // Flash a success message to the session
            Session::flash('success', 'Registration successful!');

            // Return a JSON response indicating success
            return response()->json(['message' => 'User created successfully', 'user_id' => $user->id], 201);
        } catch (\Exception $e) {
            // Handle any exceptions that occur during user creation
            Log::error('Failed to create user', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to create user', 'error' => $e->getMessage()], 500);
        }
    }
}
