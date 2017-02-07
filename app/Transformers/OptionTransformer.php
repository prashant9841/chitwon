<?php

namespace App\Transformers;

use App\Model\Options;
use League\Fractal;


class OptionTransformer extends Fractal\TransformerAbstract
{


    public function transform(Options $page)
    {
        return [
            'id' => (int)$page->id,
            'label' => $page->label,
            'value' => $page->value,
        ];
    }

}





