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
        Schema::create('job_postings', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->nullable();
            $table->string('employment_type')->default('Full-time'); // Full-time, Contract, Part-time
            $table->string('department'); // e.g. SAP, Digital Applications, Cloud & AI
            $table->string('location'); // e.g. Melbourne, VIC; Sydney, NSW; Macquarie Park, NSW
            $table->string('work_mode')->default('Hybrid'); // e.g. 4 days onsite, 1 wfh; Hybrid mode; Remote
            $table->boolean('is_remote')->default(false);
            $table->text('company_description')->nullable();
            $table->text('job_description');
            $table->text('key_responsibilities')->nullable();
            $table->text('requirements')->nullable();
            $table->string('status')->default('active'); // active, closed
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('job_postings');
    }
};
