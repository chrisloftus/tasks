<?php

use Illuminate\Database\Seeder;
use App\Task;

class TaskTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tasks')->delete();

        Task::create([
            'name' => 'Update Footer Copy',
            'description' => 'Lorem ipsum dolor sit amet',
            'project_id' => 1,
            'user_id' => 1,
            'status_id' => rand(1, 3),
            'assigned' => 2
        ]);

        Task::create([
            'name' => 'Fix Modal',
            'description' => 'Lorem ipsum dolor sit amet',
            'project_id' => 2,
            'user_id' => 2,
            'status_id' => rand(1, 3),
            'assigned' => 3
        ]);

        Task::create([
            'name' => 'Code Contact Page',
            'description' => 'Lorem ipsum dolor sit amet',
            'project_id' => 3,
            'user_id' => 3,
            'status_id' => rand(1, 3),
            'assigned' => 1
        ]);
    }
}
