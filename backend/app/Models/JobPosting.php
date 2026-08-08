<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobPosting extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'employment_type',
        'department',
        'location',
        'work_mode',
        'is_remote',
        'company_description',
        'job_description',
        'key_responsibilities',
        'requirements',
        'status',
    ];

    protected $casts = [
        'is_remote' => 'boolean',
    ];

    public function applications()
    {
        return $this->hasMany(JobApplication::class);
    }
}
