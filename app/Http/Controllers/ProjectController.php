<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Project;

class ProjectController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        return Project::all();
    }

    public function store()
    {
        Project::create([
            'name' => Input::get('name')
        ]);

        return ['success' => true];
    }

    public function destroy($id)
    {
        Project::destroy($id);

        return ['success' => true];
    }
}
