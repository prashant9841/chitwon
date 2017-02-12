<?php

namespace App\Http\Controllers\Api;

use Auth;
use App\Model\User;
use App\Transformers\UserTransformer;
use Spatie\Fractalistic\Fractal;

class UserController
{
    public function index()
    {
        return Fractal::create()
            ->collection(User::all())
            ->transformWith(new UserTransformer())
            ->toArray();
    }

    public function show($id)
    {
        return Fractal::create()
            ->item(User::findOrFail($id),new UserTransformer())
            ->toArray();
    }

    public function currentUser()
    {
        
        return Fractal::create()
            ->item(User::findOrFail(Auth::user()->id),new UserTransformer())
            ->toArray();

    }
}