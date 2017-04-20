<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;" />
    <title>iScroll下拉刷新上滑加载</title>
    {{--<link rel="stylesheet" href="/style/main.css" />--}}
    <script src="//cdn.bootcss.com/jquery/2.2.2/jquery.js"></script>
</head>
<body>

<div class="header">header</div>
<div id="wrapper">
    <div id="scroller">
        <div id="pullDown">
            <span class="pullDownLabel">下拉刷新</span>
        </div>
        <ul id="thelist">
            @if(count($data)>0)
                @foreach($data as $val)
                <li>{{$val->name}}</li>
                @endforeach
            @endif
            <!--<li>原始数据</li>-->
            <div class="getmore"></div>
        </ul>
        <input type="hidden" id="num" value="{{count($data)}}" />
        <div id="pullUp">
            <span class="pullUpLabel">上拉加载更多</span>
        </div>
    </div>
</div>
<div class="footer">footer</div>

<script type="text/javascript" src="/script/iscroll.js"></script>
<script type="text/javascript" src="/script/main.js"></script>
<script>
    var  xx = "{{ csrf_token() }}";
</script>

</body>
</html>