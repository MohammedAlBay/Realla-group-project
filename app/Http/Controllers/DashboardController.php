<?php
// DashboardController.php

namespace App\Http\Controllers;
use App\Http\Controllers\DashboardTenantController;
use App\Http\Controllers\DashboardLandlordController;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Display the user's dashboard.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\View\View
     */
    public function index(Request $request)
    {
        // Check if the user is authenticated
        if (auth()->check()) {
            // If authenticated, check the user type and redirect accordingly
            if (auth()->user()->isLandlord()) {
                return app(DashboardLandlordController::class)->index();
            } else {
                return app(DashboardTenantController::class)->index();
            }
        } else {
            // If not authenticated, redirect to the login page
            return redirect()->route('login');
        }
    }

}
