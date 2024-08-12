<?php

use App\Http\Controllers\Pages\AdminController;
use App\Http\Controllers\Pages\ClassroomController;
use App\Http\Controllers\Pages\ProfileController;
use App\Http\Controllers\Pages\SchedulesController;
use App\Http\Controllers\Pages\StudentController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard', [
        'canLogin'    => Route::has('login'),
        'canRegister' => Route::has('register')
    ]);
})
     ->middleware(['auth', 'verified'])
     ->name('dashboard');


Route::get('/classrooms', [ClassroomController::class, 'index'])
     ->middleware(['auth', 'verified'])
     ->name('classrooms');

Route::get('/students', [StudentController::class, 'index'])
     ->middleware(['auth', 'verified'])
     ->name('students');

Route::get('/schedules', [SchedulesController::class, 'index'])
     ->middleware(['auth', 'verified'])
     ->name('schedules');

Route::get('/admin', [AdminController::class, 'index'])
     ->middleware(['auth', 'verified'])
     ->name('admin');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
