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
        Schema::create('properties', function (Blueprint $table) {
            $table->id();
            $table->string('image_path')->nullable();
            $table->string('location');
            $table->decimal('price', 10, 2)->nullable();
            $table->integer('rooms');
            $table->float('square_meters');
            $table->integer('bathrooms');
            $table->boolean('for_sale')->default(true);
            $table->boolean('for_rent')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('properties');
    }
};
