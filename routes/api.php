<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;


use App\Http\Controllers\UserController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\AuthController;

use App\Http\Controllers\BookmarkController;






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

// CRUD operations for bookmarks
Route::get('/bookmarks', [BookmarkController::class, 'index']);
Route::get('/bookmarks/{id}', [BookmarkController::class, 'show']);
Route::post('/bookmarks', [BookmarkController::class, 'store']);
Route::put('/bookmarks/{id}', [BookmarkController::class, 'update']);
Route::delete('/bookmarks/{id}', [BookmarkController::class, 'destroy']);

// Route to update user profile
Route::get('/profile-tenant', [UserController::class, 'update']);
Route::put('/profile-tenant/edit', [UserController::class, 'update']);