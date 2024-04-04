<?php
// DashboardLandlordController.php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User; // Import the User model
use Inertia\Inertia;

class DashboardLandlordController extends Controller
{
    /*
    public function __invoke(Request $request)
    {
        // Fetch the authenticated user
        $user = $request->user();

        // Fetch data from the users table (example)
        $userName = $user->name;
        $userEmail = $user->email;

        // Add any necessary logic specific to the landlord dashboard

        // For example, fetch data to display on the dashboard
        $properties = $user->properties;

        // Render the landlord dashboard view using Inertia
        return Inertia::render('DashboardLandlord', [
            'userName' => $userName,
            'userEmail' => $userEmail,
            'properties' => $properties,
        ]);
    }

    */

    public function index()
    {
        // Fetch data needed for the dashboard
        $user = auth()->user();

        // Render the dashboard component and pass data to it
        return Inertia::render('DashboardLandloardLanding', ['user' => $user]);
    }
}
