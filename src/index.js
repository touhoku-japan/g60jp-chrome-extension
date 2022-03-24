$(function () {
    //let baseurl='http://g60.test/';
    let baseurl='https://g60.jp/';

    document.getElementById('open').style.cursor = "pointer";
    console.log("test");
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    var url = tabs[0].url;

    $.post(baseurl+"api/v1/shorten", {
            base_url: url,
            code: "",
            secret: ""

        }, function (data) {
            console.log(data);
            if(data.status==0){
                $('#box').html(baseurl + data.shorten);

                var temp = $('<input>');
                temp.val($('#box').text());
                console.log(temp.val());
                $('body').append(temp);
                temp.select();
                console.log(document.execCommand('copy'));
                temp.remove();
                $('#box').html("短縮したURLをクリップボードにコピーしたよ");
            }else{
                $('#box').html(data.message);
            }            
            
        });
     });
    
    });