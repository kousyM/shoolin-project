<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\ContentController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\JobApplicationController;

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

// Careers & Job Opportunities Public Routes
Route::get('/jobs', [JobController::class, 'index']);
Route::get('/jobs/{id}', [JobController::class, 'show']);
Route::post('/jobs/{id}/apply', [JobApplicationController::class, 'apply']);

// Admin Authentication & Job Management Routes
Route::post('/admin/login', [JobController::class, 'adminLogin']);
Route::get('/admin/jobs', [JobController::class, 'adminJobs']);
Route::post('/admin/jobs', [JobController::class, 'store']);
Route::put('/admin/jobs/{id}', [JobController::class, 'update']);
Route::delete('/admin/jobs/{id}', [JobController::class, 'destroy']);
Route::get('/admin/applications', [JobController::class, 'applications']);
