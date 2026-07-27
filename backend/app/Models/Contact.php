<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;

    protected $table = 'contacts';

    protected $fillable = [
        'full_name',
        'first_name',
        'last_name',
        'email',
        'phone',
        'organisation',
        'designation',
        'subject',
        'message',
        'consent',
    ];
}
