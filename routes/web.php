<?php
use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/


Route::get('/{vue_capture?}', function () {
            return view('welcome');
        })->where('vue_capture', '[\/\w\.-]*');

Auth::routes();

Route::group(['middleware' => 'auth'], function () {
    Route::group(['prefix' => 'dashboard'], function () {
        Route::get('/{vue_capture?}', function () {
            return view('home');
        })->where('vue_capture', '[\/\w\.-]*');
    });
});
/*

Route::get('/home', 'HomeController@index');

Route::get('/', function () {
    return view('welcome');
});
Auth::routes();

Route::get('/logout',function(){
    Auth::logout();
});
//From SUggestion Matt Staufer
//Route::group([], function () {

    Route::group(['prefix' => 'dashboard'], function () {
        Route::get('/{vue_capture?}', function () {
            return view('home');
        })->where('vue_capture', '(.*)');
    });

    //[\/\w\.-]*
//});
Route::get('/test', ['middleware' => 'guest', function () {
    return view('welcome');
}]);

Route::get('/{catchall?}', function () {
    return response()->view('welcome');
})->where('catchall', '(.*)');



Route::post('upload',function(Request $request){
	$page = \App\Page::findOrFail(1);
	
	if($page->addMediaFromRequest('image')->toCollection('images')){
		return redirect('/');
	}
	//echo "HEL";
});


*/
