<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Insight extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'type',
        'read_time',
        'summary',
        'content',
        'image_url',
        'author',
        'published_at'
    ];
}
