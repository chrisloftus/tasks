<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['name'];

    public function tasks()
    {
        return $this->hasMany('App\Task');
    }

    /**
     * The users that belong to the project.
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
