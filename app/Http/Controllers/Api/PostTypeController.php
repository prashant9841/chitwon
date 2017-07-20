<?php

namespace App\Http\Controllers\Api;

use App\Model\PostType;
use App\Transformers\PostTypeTransformer;
use Illuminate\Http\Request;

class PostTypeController extends ApiController
{
    public function index()
    {
        return $this->getCollection(PostType::all(), new PostTypeTransformer());
    }

    public function show($id)
    {
        return $this->getItem(PostType::findOrFail($id), new PostTypeTransformer());
    }


    public function store(Request $request)
    {

        $event = PostType::create(
             $this->data($request)
         );

    }

    public function update($id, Request $request)
    {
        PostType::findOrFail($id)->update($this->data($request));
    }

    public function destroy($id)
    {
        PostType::findOrFail($id)->delete();
    }

    protected function data(Request $request)
    {
        return [
            'name' => $request->name,
            'slug' => $request->slug
        ];
    }
}
