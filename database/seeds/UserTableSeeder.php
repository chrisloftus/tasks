<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->delete();

        App\User::create([
            'name' => 'John',
            'email' => 'john@example.com',
            'password' => bcrypt('secret')
        ]);

        App\User::create([
            'name' => 'Jack',
            'email' => 'jack@example.com',
            'password' => bcrypt('secret')
        ]);

        App\User::create([
            'name' => 'James',
            'email' => 'james@example.com',
            'password' => bcrypt('secret')
        ]);

    }
}
