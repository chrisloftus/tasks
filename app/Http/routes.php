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

Route::get('partials/{controller}/{action}', function($controller, $action = '') {
    return view('partials/' . $controller . '/' . $action);
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

    Route::get('tasks/{id}/comments', 'TaskController@showComments');
    Route::post('tasks/{id}/comments', 'TaskController@storeComment');

    Route::get('users', 'UserController@index');

    Route::get('statuses', 'StatusController@index');
});

// App::missing(function($exception) {
//     return view('index');
// });