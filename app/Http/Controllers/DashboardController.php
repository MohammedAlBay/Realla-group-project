<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardTenantController extends Controller
{
    // Method to display the dashboard for tenants
    public function index()
    {
        // Get the authenticated user's data
        $userData = Auth::user();

        // Check if the user is a landlord or a tenant
        if ($userData->is_landlord) {
            // User is a landlord, redirect to the landlord dashboard
            return redirect()->route('dashboard-landloard');
        } else {
            // User is a tenant, redirect to the tenant dashboard
            return redirect()->route('dashboard-tenant');
        }
    }
}
