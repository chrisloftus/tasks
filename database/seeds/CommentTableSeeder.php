<?php

use Illuminate\Database\Seeder;

class CommentTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('comments')->delete();

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 1,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 1,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 1,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 2,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 2,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 2,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 3,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 3,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);

        App\Comment::create([
            'user_id' => 1,
            'task_id' => 3,
            'message' => 'Lorem ipsum dolor sit amet'
        ]);
    }
}
