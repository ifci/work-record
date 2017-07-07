$(function(){
    function notify () {
        var opt = {
            type: 'basic',
            title: "桌面提醒",
            message: "中大奖了！",
            iconUrl: "../image/icon48.png"
        }
        chrome.notifications.create('', opt, function (id) {

        });
        chrome.notifications.onClicked.addListener(function (id) {
            /*chrome.tabs.create({url: "http://baidu.com"}, function(tab) {
                console.log(tab);
            })*/
            chrome.extension.getBackgroundPage().doThing();
        })
    }
    setTimeout(function() {
        notify();

    }, 1000);
    // setInterval(function() {
    //     notify();
    // }, 5000);
});