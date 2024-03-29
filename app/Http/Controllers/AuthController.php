<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // Validate incoming request data
        $request->validate([
            'fullName' => 'required|string|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|string|min:8|confirmed',
            'isLandlord' => 'boolean',
        ]);

        // Create new user
        $user = User::create([
            'name' => $request->fullName,
            'email' => $request->email,
            'password' => bcrypt($request->password),
            'is_landlord' => $request->isLandlord ?? false,
        ]);

        // Optionally, you can also issue a JWT token or perform any other action upon registration

        return response()->json(['message' => 'Registration successful'], 200);
    }
}
