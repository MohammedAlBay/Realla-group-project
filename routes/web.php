<?php

use App\Http\Controllers\ProfileController;
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
/*
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


*/



Route::get('/', function () {
    return Inertia::render('Home');
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

Route::get('/login-landlord', function () {
    return Inertia::render('LoginPanelLandlord');
});

Route::get('/login-tenant', function () {
    return Inertia::render('LoginPanelTenant');
});

Route::get('/register', function () {
    return Inertia::render('Register');
});

Route::get('/forgot-password', function () {
    return Inertia::render('ForgotPassword');
});



Route::get('/mock-up-1', function () {
    return Inertia::render('MockUp1');
});

Route::get('/mock-up', function () {
    return Inertia::render('MockUp');
});




/*DASHBOARD TENANT*/
Route::get('/dashboard-tenant', function () {
    return Inertia::render('DashboardTenantLanding');
});

Route::get('/tenant', function () {
    return Inertia::render('DashboardTenant');
});

/*PAYMENT*/

Route::get('/paynow', function () {
    return Inertia::render('PayNow');
});

Route::get('/payment-history', function () {
    return Inertia::render('PaymentHistory');
});

/*DOCUMENTS*/
Route::get('/documents', function () {
    return Inertia::render('Documents');
});





/*DASHBOARD LANDLOARD */
Route::get('/landloard', function () {
    return Inertia::render('DashboardLandloard');
});

Route::get('/dashboard-landloard', function () {
    return Inertia::render('DashboardLandloardLanding');
});


/* TEST */
Route::get('/test', function () {
    return Inertia::render('Test');
});



Route::get('/mailbox-landlord', function () {
    return Inertia::render('MailboxLandlord');
});

Route::get('/mailbox-tenant', function () {
    return Inertia::render('MailboxTenant');
});

Route::get('/searchresults', function () {
    return Inertia::render('searchresults');
});

Route::get('/property', function () {
    return Inertia::render('MyPropertyPage');
});