<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Route::get('/', 'AuthenticateController@index');
Route::get('/', function() {
    return view('index');
});

Route::get('partials/auth', function() {
    return view('partials/auth');
});

Route::get('partials/users', function() {
    return view('partials/users');
});

Route::get('partials/tasks/index', function() {
    return view('partials/tasks/index');
});

Route::get('partials/tasks/show', function() {
    return view('partials/tasks/show');
});

Route::get('partials/tasks/new', function() {
    return view('partials/tasks/new');
});

Route::get('partials/tasks/all', function() {
    return view('partials/tasks/all');
});

Route::get('partials/projects/index', function() {
    return view('partials/projects/index');
});

Route::get('partials/projects/show', function() {
    return view('partials/projects/show');
});

Route::get('partials/projects/new', function() {
    return view('partials/projects/new');
});

// API
Route::group(['prefix' => 'api'], function() {

    // Auth
    Route::resource('authenticate', 'AuthenticateController', ['only' => 'index']);
    Route::post('authenticate', 'AuthenticateController@authenticate');
    Route::get('authenticate/user', 'AuthenticateController@getAuthenticatedUser');

    Route::resource('projects', 'ProjectController');

    Route::get('tasks/all', 'TaskController@all');

    Route::resource('tasks', 'TaskController');

    Route::get('tasks/{id}/project', 'TaskController@getProjectFromTask');

    Route::get('tasks/{id}/comments', 'TaskController@showComments');
    Route::post('tasks/{id}/comments', 'TaskController@storeComment');

    Route::get('users', 'UserController@index');

    Route::get('statuses', 'StatusController@index');
});

// App::missing(function($exception) {
//     return view('index');
// });