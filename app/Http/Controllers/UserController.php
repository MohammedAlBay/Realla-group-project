<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Validation\Rules;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): JsonResponse
    {
        $users = User::all(); // Fetch all users from the database
        return response()->json($users);
    }

    public function store(Request $request)
    {
        ddd($request->all());

        // Validate the request data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|lowercase|email|max:255|unique:users',
            'password' => 'required', 'confirmed',
            'is_landlord' => 'required|boolean',
        ]);

        // If is_landlord is not present in the request data, default it to false
      /*  $is_landlord = $request->has('is_landlord') ? $validatedData['is_landlord'] : false; */

        // Create and store the user in the database
        $user = User::create([
            'name' => $validatedData['name'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']),
            'is_landlord' => $request->is_landlord ?? false,
        ]);

        // Optionally, you can return a response indicating success
        return response()->json(['message' => 'User created successfully', 'user' => $user]);
    }
}
