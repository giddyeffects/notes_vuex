<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //create a default user
        DB::table('users')->insert([
            'name' => 'test_user',
            'email' => 'user@example.com',
            'password' => bcrypt('ahardtoguesspassword'),
            'created_at' => date ("Y-m-d H:i:s", time()),
        ]);
    }
}
