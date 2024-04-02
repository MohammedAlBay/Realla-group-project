<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            if ($user->is_landloard) {
                return redirect()->intended('/dashboard-landloard');
            } else {
                return redirect()->intended('/dashboard-tenant');
            }
        }

        // Authentication failed...
        return back()->withErrors(['email' => 'Invalid email or password.']);
    }
}
