<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string( 'family_name', 128);
            $table->string( 'first_name', 64 );
            $table->bigInteger( 'classroom_id')->nullable();
            $table->bigInteger('created_by');
            $table->bigInteger( 'updated_by')->nullable();
            $table->timestamps();

            $table->foreign('classroom_id')->references('id')->on('classrooms')->noActionOnUpdate()->nullOnDelete();
            $table->foreign('created_by')->references('id')->on('users')->noActionOnUpdate()->restrictOnDelete();
            $table->foreign('updated_by')->references('id')->on('users')->noActionOnUpdate()->restrictOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('students');
    }
};
