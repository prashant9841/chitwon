<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class PostType extends Model
{

    protected $fillable = ['name','slug'];

    public function posts()
    {
        return $this->hasMany(Post::class,'type_id');
    }

}

    
 	