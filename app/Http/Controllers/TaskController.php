<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Project;
use App\Task;
use App\Comment;
use Input;

class TaskController extends Controller
{
    public function __construct()
    {
        $this->middleware('jwt.auth');
    }

    public function index()
    {
        return Task::all();
    }

    public function store()
    {
        Task::create([
            'name' => Input::get('name')
        ]);

        return ['success' => true];
    }

    public function storeComment($taskId)
    {
        Comment::create([
            'user_id' => Input::get('userId'),
            'task_id' => $taskId,
            'message' => Input::get('message')
        ]);

        return ['success' => true];
    }

    public function show($id)
    {
        return Task::find($id);
    }

    public function showComments($id)
    {
        return Task::find($id)->comments()->orderBy('created_at', 'desc')->get();
    }

    public function destroy($id)
    {
        Task::destroy($id);

        return ['success' => true];
    }

    public function getProjectFromTask($id)
    {
        $task = Task::find($id);

        return Project::find($task->project_id);
    }
}
