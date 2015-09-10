<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['name', 'description', 'project_id', 'user_id', 'status'];

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function project()
    {
        return $this->belongsTo('App\Project', 'project_id');
    }

    public function status()
    {
        return $this->belongsTo('App\Status', 'status');
    }
}
