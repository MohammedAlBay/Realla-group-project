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
    // Method to render the registration form
    public function create(): Response
    {
        return Inertia::render('Auth/Register')->with('flash', session('success'));
    }

    // Method to handle the registration form submission
    public function store(Request $request)
    {
        dd($request);

        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => ['required', 'confirmed'],
            'is_landlord' => 'required|boolean',
        ]);

        try {
            // Create a new user instance
            $user = new User([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'is_landlord' => $request->is_landlord,
            ]);

            // Save the user to the database
            $user->save();

            // Log the registration
            Log::info('User registered successfully', ['email' => $user->email]);

            // Fire the Registered event
            event(new Registered($user));

            // Log a success message
            Log::info('Registration successful for user', ['user_id' => $user->id]);

            // Flash a success message to the session
            Session::flash('success', 'Registration successful!');

            // Determine the dashboard route based on user type


             $dashboardRoute = $user->is_landlord ? 'dashboard-landloard' : 'dashboard-tenant';

            // Redirect the user to the appropriate dashboard page
            return redirect()->route($dashboardRoute)->with('success', 'Registration successful!');



        } catch (\Exception $e) {
            // Handle any exceptions that occur during user registration
            Log::error('Failed to register user', ['error' => $e->getMessage()]);
            return response()->json(['message' => 'Failed to register user', 'error' => $e->getMessage()], 500);
        }
    }
}
