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
            'status' => rand(0, 2)
        ]);

        Task::create([
            'name' => 'Fix Modal',
            'description' => 'Lorem ipsum dolor sit amet',
            'project_id' => 2,
            'status' => rand(0, 2)
        ]);

        Task::create([
            'name' => 'Code Contact Page',
            'description' => 'Lorem ipsum dolor sit amet',
            'project_id' => 3,
            'status' => rand(0, 2)
        ]);
    }
}
