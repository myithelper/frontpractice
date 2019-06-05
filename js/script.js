//$.get("./head.html", function(data) {
//        $("#myheader").append(data)
//});
$(document).ready(function(){
            //页面加载的时候，内容框默认显示 a.html
            $('#myheader').load('./head.html');

        })
