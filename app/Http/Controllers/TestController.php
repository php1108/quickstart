<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\User;
use App\Models\UserAccount;
use iscms\Alisms\SendsmsPusher as Sms;
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
    public function SM()
    {
        require_once(app_path().'/Tool/ali/top/TopClient.php');

        $c = new \TopClient;
        $c->appkey = '23764056';
        $c->secretKey = 'fd3b46a17673a7edbb2ffd76fd8716e7';
        $req = new \AlibabaAliqinFcSmsNumSendRequest;
        $req->setExtend("123456");
        $req->setSmsType("normal");
        $req->setSmsFreeSignName("阿里大于");
        $req->setSmsParam("{\"code\":\"1234\",\"product\":\"alidayu\"}");
        $req->setRecNum("18010485783");
        $req->setSmsTemplateCode("SMS_585014");
        $resp = $c->execute($req);
    }

    /**
     * @param Sms $sms
     * @return \Iscloudx\AlibigfishSdk\ResultSet|mixed|\SimpleXMLElement
     * $phone 手机号,用户输入的手机号
        $name  短信签名,阿里大鱼申请的短信签名的名字
        $content 替换短信模板中的变量,JSON字符串格式,所有值都是字符串,不能有整形
        $code   阿里大鱼申请的短信模板编号
     */
    public function sendSms(Sms $sms)
    {
        $phone = 18010485783;
        $name = '第一个模板';
        $content = '1234';
        $code = 'SMS_62765236';
        return $sms->send("$phone","$name","$content",$code);
    }
}
