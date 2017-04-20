<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Task;
class ListController extends Controller
{
    public function index(Request $request)
    {

        $data = Task::take(5)->get();
        return view('1',[
            'data'=>$data
        ]);
    }
    public function index1(Request $request)
    {
        $task = new Task();
        $data = $task->skip($request->num)->take(5)->get();
        return json_decode($data);
    }
}
