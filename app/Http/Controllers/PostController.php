<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

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

public function create(){
    return inertia('Create');
}

public function show(Post $post){
    return inertia('Show', ['post' => $post]);
}

public function store(Request $request){
    sleep(2);

    $field = $request -> validate([
        'body' => ['required']
    ]);

    Post::create($field);

    return redirect('/');
}
}
