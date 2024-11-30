<?php

namespace Database\Seeders;
use App\Models\Post; // Post 모델 네임스페이스 추가

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        Post::factory(2)->create();
    }
}
