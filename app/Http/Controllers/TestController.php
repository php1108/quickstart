<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use App\Models\UserAccount;

class TestController extends Controller
{
    public function index()
    {
//        $account = User::find(1)->account;
//        dd($account);
//        $user = UserAccount::find(1)->user;
//        dd($user);
        echo date('Y-m-d H:i:s',time());

    }

}
