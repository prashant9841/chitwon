<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');

//Users
Route::get('/users','UserController@index');


//Pages
Route::get('/pages','PageController@index');
Route::get('/pages/{id}','PageController@show');

//Post
Route::get('/posts','PostController@index');
Route::get('/posts/{id}','PostController@show');
Route::post('/posts','PostController@store')->middleware('auth:api');
Route::put('/posts/{id}','PostController@update');
Route::delete('/posts/{id}','PostController@destroy');

//Post-Type
Route::get('/post-type','PostTypeController@index');
Route::get('/post-type/{id}','PostTypeController@show');
Route::post('/post-type','PostTypeController@store')->middleware('auth:api');
Route::put('/post-type/{id}','PostTypeController@update');
Route::delete('/post-type/{id}','PostTypeController@destroy');


//Gallery
Route::get('/galleries','GalleryController@index');
Route::get('/galleries/{id}','GalleryController@show');

Route::put('/galleries/{id}','GalleryController@update');
Route::delete('/galleries/{id}','GalleryController@destroy');



Route::post('upload',function(Request $request){
    $page = \App\Model\Page::findOrFail(1);
    //dd($request->all());
    if($page->addMediaFromRequest('files')->toCollection('images')){
        return json_encode(['message' => 'Added image','status' =>200]);
    }
    return json_encode(['message' => 'No Image error','status' =>200]);
});