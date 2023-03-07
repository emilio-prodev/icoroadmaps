<?php

namespace App\Http\Controllers;

use App\brands;
use Illuminate\Http\Request;

class BrandsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get all the brands
        $brands = Brands::all();

        // load the view and pass the brands
        return view('brands.index')->with('brands', $brands);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // load the create form (app/views/brands/create.blade.php)
        return View::make('brands.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // validate
        // read more on validation at http://laravel.com/docs/validation
        $rules = array(
            'name' => 'string|max:120',
            'short_name' => 'string|max:120',
            'description' => 'string|max:600',
            'logo' => 'string|max:120',
        );

        // process 
        if ($validator->fails()) {
            return Redirect::to('brands/create')
                ->withErrors($validator);
        } else {
            // store
            $brand = new Brand;
       $brand->name = Input::get('name');
            $brand->short_name = Input::get('short_name');
            $brand->description = Input::get('description');
            $brand->logo = Input::get('logo');
            $brand->save();

            // redirect
            Session::flash('message', 'Successfully created brand!');
            return Redirect::to('brands');
        }
    }

    /**
     * Display the specified resource.     
     *
     * @param  \App\brands  $brands
     * @return \Illuminate\Http\Response
     */
    public function show(brands $brands)
    {
        // get the brand
        $brand = Brands::find(1);

        // show the view and pass the brand to it
        return view('brands.show')->with('brand', $brand);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\brands  $brands
     * @return \Illuminate\Http\Response
     */
    public function edit(brands $brands)
    {
        // get the brand
        $brand = Brands::find($id);

        // show the edit form and pass the brand
        return View::make('brands.edit')
            ->with('brand', $brand);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\brands  $brands
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, brands $brands)
    {
        // validate
        // read more on validation at http://laravel.com/docs/validation
        $rules = array(
            'name'       => 'string|max:120',
            'short_name'       => 'string|max:120',
            'description'       => 'string|max:600',
            'logo'       => 'string|max:120'
        );
        $validator = Validator::make(Input::all(), $rules);

        // process
        if ($validator->fails()) {
            return Redirect::to('brands/' . $id . '/edit')
                ->withErrors($validator);
        } else {
            // store
            $nerd = Brand::find($id);
            $nerd->name = Input::get('name');
            $nerd->save();

            // redirect
            Session::flash('message', 'Successfully updated brand!');
            return Redirect::to('brands');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\brands  $brands
     * @return \Illuminate\Http\Response
     */
    public function destroy(brands $brands)
    {
        // delete
        $brand = Brand::find($id);
        $brand->delete();

        // redirect
        Session::flash('message', 'Successfully deleted the brand!');
        return Redirect::to('brands');
    }
}
