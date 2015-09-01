<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function comments()
    {
        return $this->hasMany('App\Comment');
    }
}
