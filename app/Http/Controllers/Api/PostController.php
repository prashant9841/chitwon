<?php
namespace App\Http\Controllers\Api;

use App\Model\Post;
use App\Transformers\PostTransformer;
use Illuminate\Http\Request;

class PostController extends ApiController
{
    public function index()
    {
        return $this->getCollection(Post::all(), new PostTransformer());
    }

    public function show($id)
    {
        return $this->getItem(Post::findOrFail($id), new PostTransformer());
    }


    public function store(Request $request)
    {

       /* $event = Post::create(
            $this->data($request)
        );*/
       dd($request->toArray());
    }

    public function update($id, Request $request)
    {
        Post::findOrFail($id)->update($this->data($request));
    }

    public function destroy($id)
    {
        Post::findOrFail($id)->delete();
    }

    protected function data(Request $request)
    {
        return [
            'title' => $request->title,
            'slug' => $request->slug,
            'description' => $request->description,
            'excerpt' => $request->excerpt,
            'published_on' => $request->published_on,
            'status' => $request->status,
            'user_id' => $request->user_id,
            'page_id' => $request->page_id
        ];
    }
}