<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddStatusColumnTasks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->integer('status_id')->unsigned();

            // $table->foreign('status_id')
            //     ->references('id')->on('statuses');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            // DB::statement('SET FOREIGN_KEY_CHECKS = 0');
            // $table->dropForeign('tasks_status_id_foreign');
            $table->dropColumn('status_id');
            // DB::statement('SET FOREIGN_KEY_CHECKS = 1');
        });
    }
}
