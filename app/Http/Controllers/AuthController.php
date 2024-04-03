<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function create(): Response
    {
        return Inertia::render('LoginOptions')->with('flash', session('success'));
    }

    public function login(Request $request)
    {

        $validated = $request->validate([
            "email" => "required|email",
            "password" => "required",
        ]);

        // attempt to login user
        if (Auth::attempt($validated)) {
            $request->session()->regenerate();
            return redirect(route('show.home'))->with('success', 'You login successfully!');
        }

        return back();


        /*

        $credentials = $request->only('email', 'password');

        $request->authenticate();

        $request->session()->regenerate();

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            if ($user->is_landloard) {
                return response()->json(['redirect' => '/dashboard-landloard']);
            } else {
                return response()->json(['redirect' => '/dashboard-tenant']);
            }
        }

        // Authentication failed...
        return response()->json(['error' => 'Invalid email or password.'], 401);

        */
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response()->json(['message' => 'Logged out successfully']);
    }
    /*
    public function create(): Response
    {
        return Inertia::render('LoginOptions')->with('flash', session('success'));
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        // Hash the password before attempting authentication
        $credentials['password'] = bcrypt($credentials['password']);

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            if (Auth::check()) {
                $user = Auth::user();
                if ($user->is_landloard) {
                    return redirect()->intended('/dashboard-landloard');
                } else {
                    return redirect()->intended('/dashboard-tenant');
                }
            }
        }

        // Authentication failed...
        return back()->withErrors(['email' => 'Invalid email or password.']);
    }
*/
}



