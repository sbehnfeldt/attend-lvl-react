<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Student extends Model
{
    use HasFactory;

    /**
     * @return BelongsTo
     */
    public function classroom() : BelongsTo
    {
        return $this->belongsTo(Classroom::class, 'classroom_id');
    }
}
