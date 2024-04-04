<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardTenantController;
use App\Http\Controllers\DashboardLandlordController;
use App\Http\Controllers\DashboardController;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', function () {
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
    })->name('dashboard');
});




Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});




Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/gallery', function () {
    return Inertia::render('GalleryPage');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});





Route::get('/login', function () {
    return Inertia::render('LoginOptions');
});

Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);



Route::get('/forgot-password', function () {
    return Inertia::render('ForgotPassword');
});

Route::get('/mock-up-1', function () {
    return Inertia::render('MockUp1');
});

Route::get('/mock-up-2', function () {
    return Inertia::render('MockUp2Page');
});

Route::get('/mock-up-3', function () {
    return Inertia::render('MockUp3');
});

Route::get('/mock-up-4', function () {
    return Inertia::render('MockUp4');
});

Route::get('/mock-up', function () {
    return Inertia::render('MockUp');
});

Route::get('/property/{id}', function () {
    return Inertia::render('PropertyDetails');
});

Route::get('/search-results', [SearchResultsController::class, 'index']);

/*
Route::middleware(['auth'])->group(function () {
    */

/* DASHBOARD TENANT */
/*
    Route::get('/dashboard-tenant', function () {
        return Inertia::render('DashboardTenantLanding')->midleware(['auth', 'verified'])->name('dashboard');
    });
*/

Route::get('/tenant', function () {
    return Inertia::render('DashboardTenant');
});

Route::get('/profile-tenant', function () {
    return Inertia::render('ProfileTenant');
});

Route::get('/profile-tenant/edit', function () {
        return Inertia::render('ProfileEdit');
});

/* PAYMENT */
Route::get('/paynow', function () {
    return Inertia::render('PayNow');
});

Route::get('/payment-history', function () {
    return Inertia::render('PaymentHistory');
});

/* DOCUMENTS */
Route::get('/documents', function () {
    return Inertia::render('Documents');
});

Route::get('/mailbox-tenant', function () {
    return Inertia::render('MailboxTenant');
});

Route::get('/appointment-tenant', function () {
    return Inertia::render('AppointmentTenant');
});

Route::get('/calendar-tenant', function () {
    return Inertia::render('CalendarTenant');
});

/*FOLLOW UP */
Route::get('/followup', function () {
    return Inertia::render('FollowUp');
});

/* DASHBOARD LANDLORD */
/*
    Route::get('/dashboard-landloard', function () {
        return Inertia::render('DashboardLandloardLanding')->middleware(['auth', 'verified'])->name('dashboard');
    });
*/
require __DIR__.'/auth.php';

Route::get('/landloard', function () {
    return Inertia::render('DashboardLandloard');
});

Route::get('/mailbox-landlord', function () {
    return Inertia::render('MailboxLandlord');
});

Route::get('/appointment-landlord', function () {
    return Inertia::render('AppointmentLandlord');
});

Route::get('/calendar-landlord', function () {
    return Inertia::render('CalendarLandlord');
});

Route::get('/profile-landlord', function () {
    return Inertia::render('ProfileLandlord');
});

Route::get('/profile-landlord/edit', function () {
    return Inertia::render('ProfileEdit');
});

/* REPORT PROBLEM */
Route::get('/reportproblem', function () {
    return Inertia::render('ReportProblem');
});
Route::get('/profile-landlord', function () {
    return Inertia::render('ProfileLandlord');
});


/*
});
*/

Route::get('/test', function () {
    return Inertia::render('Test');
});

/*ERROR PAGE*/
Route::get('/{any}', function () {
    return Inertia::render('CustomErrorPage');
})->where('any','.*');

require __DIR__.'/auth.php';
