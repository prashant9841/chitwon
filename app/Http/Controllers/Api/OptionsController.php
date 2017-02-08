<?php
namespace App\Http\Controllers\Api;

use App\Model\Options;
use App\Model\Page;
use App\Transformers\OptionTransformer;
use App\Transformers\PageTransformer;
use Illuminate\Http\Request;

class OptionsController extends ApiController
{
    public function index()
    {
        return $this->getCollection(Options::all(), new OptionTransformer());
    }

    public function show($id)
    {
        if($option= Options::find($id))
        {
            return $this->getItem($option, new OptionTransformer());
        }
        return $this->respondNotFound('Page Not found');
    }


    public function store(Request $request)
    {
        if($event = Options::create($this->data($request))){
            $this->respond(
                'Page Created Sucessfully'
            );
        }
    }

    public function update($id, Request $request)
    {
        Options::findOrFail($id)->update($this->data($request));
    }

    public function destroy($id)
    {
        Options::findOrFail($id)->delete();
    }

    protected function data(Request $request)
    {
        return [
            'label' => $request->label,
            'value' => $request->value,

        ];
    }


}
