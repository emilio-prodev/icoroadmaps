<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function edit(User $user)
    {   
        $user = Auth::user();
        return view('users.edit', compact('user'));
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    public function validator(array $data)
    {
        return Validator::make($data, [
            'first_name' => 'string|max:120',
            'last_name'  => 'string|max:120',
            'email'      => 'required|string|email|max:255|unique:users',
            'phone'      => 'max:20|min:11|numeric',
            'skype'      => 'max:120',
            'twitter'    => 'max:120',
            'location'   => 'max:120',
            'company'    => 'max:120'
        ]);
    }

    public function update(User $user)
    { 
        $user->first_name = request('first_name'); 
        $user->last_name = request('last_name');
        $user->email = request('email');
        $user->phone = request('phone');
        $user->skype = request('skype');
        $user->twitter = request('twitter');
        $user->location = request('location');
        $user->company = request('company');

        $user->save();

        return back();
    }

   
}
