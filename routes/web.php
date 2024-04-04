<?php

use App\Http\Controllers\AuthController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\SearchResultsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DashboardController;

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\User;





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

Route::post('/login',  [AuthController::class, 'login'])->name('login');
Route::post('/register', function () {
    dd('Hello World');
});
Route::get('/register', [RegisteredUserController::class, 'create'])->name('register');
/*Route::post('/register', [RegisteredUserController::class, 'store']); */


{/*

Route::middleware('guest')->group(function () {

    Route::get('/register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::post('/register', [RegisteredUserController::class, 'store']);
});

Route::get('/login', function () {
    return Inertia::render('LoginPanelLandlord');
});

Route::get('/login', function () {
    return Inertia::render('LoginPanelTenant');
});

Route::get('/login', function () {
    // Example: Retrieve all users from the users table
    $users = User::all();

    // Perform any other necessary logic with the retrieved users data

    return Inertia::render('LoginPanelTenant');
});
 */}

// routes/web.php



Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');


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
    Route::get('/dashboard-tenant', function () {
        return Inertia::render('DashboardTenantLanding');
    });


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
    Route::get('/dashboard-landloard', function () {
        return Inertia::render('DashboardLandloardLanding');
    });

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