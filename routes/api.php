<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;

use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
*/

//DATABASE
Route::get('/properties', [PropertyController::class, 'index']);








Route::get('/', function () {
    return Inertia::render('Home');
});
/*
Route::get('/login', function () {
    return Inertia::render('LoginOptions');
});
*/

Route::get('/login',  [AuthController::class, 'create']);
Route::post('/login',  [AuthController::class, 'login'])->name('login');

Route::get('/dashboard-tenant', function () {
    return Inertia::render('DashboardTenantLanding');
});

Route::get('/dashboard-landloard', function () {
    return Inertia::render('DashboardLandloardLanding');
});


Route::get('/users', [UserController::class, 'index']);
Route::post('/users', [UserController::class, 'store']);