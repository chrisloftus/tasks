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
        $user = \Auth::user();
        return Task::latest()->with('project', 'status')
            ->where(['user_id' => $user->id, 'status_id' => 1])->get();
    }

    public function all()
    {
        return Task::latest()->with('project', 'status', 'assigned')->get();
    }

    public function store()
    {
        $user = \Auth::user();

        Task::create([
            'name' => Input::get('name'),
            'description' => Input::get('description'),
            'project_id' => Input::get('project_id'),
            'user_id' => $user->id,
            'assigned' => Input::get('assigned'),
            'status_id' => 1
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
        // return Task::find($id)->with('project', 'comments')->get();
        return Task::where('id', $id)->with('project', 'comments')->get()[0];
    }

    public function showComments($id)
    {
        return Task::find($id)->comments()->get();
    }

    public function destroy($id)
    {
        Task::destroy($id);

        return ['success' => true];
    }

    public function update($id)
    {
        $task = Task::find($id);

        $task['status'] = Input::get('status');
        $task['user_id'] = Input::get('user_id');
        $task->save();

        return ['success' => true];
    }
}
