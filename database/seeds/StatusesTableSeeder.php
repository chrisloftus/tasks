<?php

use Illuminate\Database\Seeder;

class StatusesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('statuses')->delete();

        App\Status::create([
            'name' => 'Open'
        ]);

        App\Status::create([
            'name' => 'Resolved'
        ]);

        App\Status::create([
            'name' => 'Closed'
        ]);
    }
}
