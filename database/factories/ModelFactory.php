<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\Model\User::class, function (Faker\Generator $faker) {
    static $password;

    return [
        'name' => $faker->name,
        'email' => $faker->unique()->safeEmail,
        'password' => $password ?: $password = bcrypt('secret'),
        'remember_token' => str_random(10),
    ];
});

$factory->define(App\Model\Page::class, function (Faker\Generator $faker) {

    return [
        'title' => $faker->text(150),
        'description' => $faker->paragraphs(3),
        'type' => $faker->slug(6),
        'status' => 1,

    ];
});

$factory->define(App\Model\PostType::class,function (Faker\Generator $faker){
    return [
        'name' => $faker->text(10),
        'slug' => $faker->slug(6)
    ];

});

$factory->define(App\Model\Post::class, function (Faker\Generator $faker) {

    return [
        'title' => $faker->text(150),
        'slug' => $faker->slug(6),
        'description' => $faker->paragraphs(3),
        'excerpt' => $faker->text(160),
        'published_on' => \Carbon\Carbon::now(),
        'status' => 1,
        'user_id' => 1,
        'type_id' => random_int(1,5),
        'page_id' => random_int(1,6)

    ];
});