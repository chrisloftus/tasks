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
        $user_id = Input::get('id');

        // get the projects users
        $users = Project::find($id)->users();

        // check if the user exists
        // on the project in question
        $user = $users->find($user_id);

        if($user !== null) {
            // project has the user
            // remove the user from the project
            $users->detach($user_id);
        } else {
            // project doesn't have the user
            // add the user to the project
            $users->attach($user_id);
        }

        return ['success' => true];
    }

    public function destroy($id)
    {
        Project::destroy($id);

        return ['success' => true];
    }
}
