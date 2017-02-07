<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class OptionGroup extends Model
{
    public function getOptions()
    {
        $this->belongsToMany(Options::class,'options_relation');
    }
}
