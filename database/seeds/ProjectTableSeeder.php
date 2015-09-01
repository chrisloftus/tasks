<?php

use Illuminate\Database\Seeder;
use App\Project;

class ProjectTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->delete();

        Project::create([
            'name' => 'Bogglo Redesign'
        ]);

        Project::create([
            'name' => 'TTX Development'
        ]);

        Project::create([
            'name' => 'Bogglo Marketing Site'
        ]);
    }
}
