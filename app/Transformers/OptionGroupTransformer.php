<?php

namespace App\Transformers;

use App\Model\OptionGroup;
use League\Fractal;


class OptionGroupTransformer extends Fractal\TransformerAbstract
{
    protected $availableIncludes = [
        'options'
    ];

    public function transform(OptionGroup $page)
    {
        return [
            'id' => (int)$page->id,
            'name' => $page->label,
            'slug' => $page->value,
            'description' => $page->description,
        ];
    }

    public function getOptions(OptionGroup $option){
        return $this->collection($option->getOptions(),OptionTransformer::class);
    }

}





