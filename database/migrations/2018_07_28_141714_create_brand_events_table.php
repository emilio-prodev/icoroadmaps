<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateBrandEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('brand_events', function (Blueprint $table) {
            $table->increments('id');
            $table->string('brand_id');
            $table->string('user_id');
            $table->string('name');
            $table->string('description');
            $table->string('long_description');
            $table->string('location');
            $table->string('proof');
            $table->string('real');
            $table->string('validation');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('brand_events');
    }
}
