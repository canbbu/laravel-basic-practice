<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
{
    $posts = Post::latest()->paginate(5);  // Convert the collection to an array

    // // Check if posts are empty
    // if (empty($posts)) {
    //     logger('No posts found');
    // } else {
    //     logger('Posts retrieved:', $posts);
    // }

    // Pass to Inertia
    return inertia('Home', ['posts' => $posts]);
}
}
