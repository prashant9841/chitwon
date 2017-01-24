<?php

namespace App\Transformers;

use League\Fractal;
use App\Model\Post;

class PostTransformer extends Fractal\TransformerAbstract
{
    protected $availableIncludes = [
        'media'
    ];

    public function transform(Post $post)
    {
        return [
            'id' => (int)$post->id,
            'title' => $post->title,
            'description' => $post->description,
            'excerpt' => $post->excerpt,
            'published_on' => $post->published_on,
            'links' => [
                'rel' => 'self',
                'url' => 'posts/1'
            ],
        ];
    }

    public function includeMedia(Post $post)
    {
        return $this->collection($post->media, new GalleryTransformer());
    }
}





