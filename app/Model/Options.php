<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Options extends Model
{
    protected $fillable = ['label','value','status'];

    public function getGroup()
    {
        return $this->belongsToMany(OptionGroup::class,'options_relation');
    }
}
