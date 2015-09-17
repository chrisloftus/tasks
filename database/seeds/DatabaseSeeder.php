<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Model::unguard();

        $this->call(UserTableSeeder::class);
        $this->call(ProjectTableSeeder::class);
        $this->call(StatusesTableSeeder::class);
        $this->call(TaskTableSeeder::class);
        $this->call(CommentTableSeeder::class);

        Model::reguard();
    }
}
