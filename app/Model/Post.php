<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;

use Spatie\MediaLibrary\HasMedia\Interfaces\HasMediaConversions;
class Post extends Model implements HasMediaConversions
{
	use HasMediaTrait;
    protected $fillable = ['title','slug','type','status','published_on','description','page_id'];

    protected $casts = ['published_on' => 'date','status'=>'boolean'];

    public function page()
    {
        return $this->belongsTo(Page::class);
    }

    public function type()
    {
        return $this->belongsTo(PostType::class);
    }

    public function registerMediaConversions()
	{
		$this->addMediaConversion('thumb')
			->setManipulations(['w' => 320, 'h' => 200])
			->performOnCollections('images');
	}
}

    
 	