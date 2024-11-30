<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // 트레이트 추가
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory; // 팩토리 기능 활성화

    protected $fillable = [
        'body',
    ];
}
