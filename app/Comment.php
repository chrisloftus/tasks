<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $fillable = ['user_id', 'task_id', 'message'];

    public function task()
    {
        return $this->belongsTo('App\User');
    }
}
