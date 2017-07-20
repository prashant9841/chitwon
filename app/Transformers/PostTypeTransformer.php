<?php

namespace App\Transformers;

use App\Model\PostType;
use League\Fractal;

class PostTypeTransformer extends Fractal\TransformerAbstract
{
    protected $availableIncludes = [
        'posts'
    ];

    public function transform(PostType $type)
    {
        return [
            'id' => (int)$type->id,
            'name' => $type->name,
            'slug' => $type->slug
        ];
    }

    public function includeMedia(PostType $post)
    {
        return $this->collection($post->posts, new PostTransformer());
    }
}





