<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Project;
use Input;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        $user = \Auth::user();
        return \App\User::find($user->id)->projects()->get();
    }

    public function show($id)
    {
        return Project::with('users')->where('id', $id)->get()->first();
    }

    public function store()
    {
        $users_array = [];

        foreach(Input::get('users') as $user) {
            array_push($users_array, $user['id']);
        }

        Project::create([
            'name' => Input::get('name')
        ])->users()->attach($users_array);

        return ['success' => true];
    }

    public function update($id)
    {
        \App\User::find(Input::get('id'))->projects()->attach($id);

        return ['success' => true];
    }

    public function destroy($id)
    {
        Project::destroy($id);

        return ['success' => true];
    }
}
