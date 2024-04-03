<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PropertyController;
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

// CRUD operations for bookmarks API
Route::get('/bookmarks', [BookmarkController::class, 'index']);
Route::get('/bookmarks/{id}', [BookmarkController::class, 'show']);
Route::post('/bookmarks', [BookmarkController::class, 'store']);
Route::put('/bookmarks/{id}', [BookmarkController::class, 'update']);
Route::delete('/bookmarks/{id}', [BookmarkController::class, 'destroy']);