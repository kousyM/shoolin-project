<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ContentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

// System & Health Status
Route::get('/status', [ItemController::class, 'status']);
Route::get('/items', [ItemController::class, 'index']);
Route::post('/items', [ItemController::class, 'store']);
Route::delete('/items/{id}', [ItemController::class, 'destroy']);

// NCS Enterprise Homepage Content API
Route::get('/homepage', [ContentController::class, 'homepage']);
Route::get('/case-studies', [ContentController::class, 'getCaseStudies']);
Route::post('/case-studies', [ContentController::class, 'storeCaseStudy']);
Route::delete('/case-studies/{id}', [ContentController::class, 'destroyCaseStudy']);
Route::post('/contact', [ContentController::class, 'contact']);
