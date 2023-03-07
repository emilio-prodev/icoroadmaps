<?php


Route::get('/', 'MainController@index');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::get('users/{user}',  ['as' => 'users.edit', 'uses' => 'UserController@edit']);

Route::patch('users/{user}/update',  ['as' => 'users.update', 'uses' => 'UserController@update']);

// Route::resource('brands_controller', 'BrandsController');

// Route::get('/brands', 'BrandsController@index');

// Route::get('/brands/show', 'BrandsController@show');

// Route::get('/brands/show/{brand-id}', 'BrandsController@show');

// Route::get('/', function () {
//     return view('main');
// });

Route::get('all_brands', 'BrandsController@index');

Route::get('show_brand', 'BrandsController@show');

Route::post('create_brand', 'BrandsController@create');

Route::post('store_brand', 'BrandsController@store');

Route::post('delete_brand/{id}', 'BrandsController@destroy');

Route::post('update_brand/{id}', 'BrandsController@update');

Route::post('edit_brand', 'BrandsController@edit');