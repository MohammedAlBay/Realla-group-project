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

use Illuminate\Http\JsonResponse;


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
    public function store(Request $request)
    {
        ddd($request->all());
        // Validate the incoming request data
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            'password' => ['required', 'confirmed',  Rules\Password::defaults() ] ,
            'is_landlord' => 'boolean', // Validate is_landlord as a boolean
        ]);

        // If is_landlord is not present in the request data, default it to false
       /* $is_landlord = $request->has('is_landlord') ? $request->input('is_landlord') : false; */

        // Attempt to create a new user record
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'is_landlord' => $request->is_landlord ?? false, // Use the value determined above
            ]);
            dd($user);
            // Log a message after successfully creating the user
            Log::info('User created successfully', ['user_id' => $user->id]);

            // Fire the Registered event
            event(new Registered($user));

            // Log a success message
            Log::info('Registration successful for user', ['user_id' => $user->id]);

            // Log the user in
            Auth::login($user);

            // Flash a success message to the session
            Session::flash('success', 'Registration successful!');
            return redirect('/dashboard-tenant')->with('success', 'Registration successful!');

          /*  return redirect('/dashboard-tenant')->with('success', 'Registration successful!'); */



           /* if ($request->expectsJson()) {
                // If JSON response is expected, return JSON response with user data
                return response()->json(['message' => 'Registration successful', 'user' => $user]);
            } else {
                // If not, redirect the user to a specific route (e.g., dashboard)
                return redirect()->route('dashboard-tenant')->with('success', 'Registration successful!');
            }
           */
        } catch (\Exception $e) {
            // Log an error message if an exception occurs
            Log::error('Error creating user', ['message' => $e->getMessage()]);

            // Flash an error message to the session
            Session::flash('error', 'Registration failed. Please try again.');

            // Redirect the user back to the registration form with an error message
            return redirect()->back()->withInput()->withErrors(['registration_failed' => 'Registration failed. Please try again.']);
        }
    }
}