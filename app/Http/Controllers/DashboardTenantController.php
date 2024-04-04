<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Inertia\Inertia;

class DashboardTenantController extends Controller
{

    public function index()
    {
        // Fetch the authenticated user
        $user = auth()->user();

        // Fetch user data from the database
        $userData = User::where('id', $user->id)->first();

        // Extract the user's name and other data as needed
        $userName = $userData->name;
        // You can fetch other user data in a similar manner

        // Render the dashboard component and pass data to it
        return Inertia::render('DashboardTenantLanding', ['userName' => $userName]);
    }

    public function __invoke(Request $request)
    {
        // Fetch the authenticated user
        $user = $request->user();

        // Fetch data from the users table (example)
        $userName = $user->name;
        $userEmail = $user->email;

        // Add any necessary logic specific to the tenant dashboard

        // For example, fetch data to display on the dashboard
        $properties = $user->properties;

        // Render the tenant dashboard view using Inertia
        return Inertia::render('DashboardTenant', [
            'userName' => $userName,
            'userEmail' => $userEmail,
            'properties' => $properties,
        ]);
    }



}
