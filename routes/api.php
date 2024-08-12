<?php

use App\Http\Controllers\Resources\ClassroomController as ApiClassroomController;
use App\Http\Controllers\Resources\StudentController as ApiStudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::apiResource( 'classrooms', ApiClassroomController::class);
Route::apiResource('students', ApiStudentController::class);
