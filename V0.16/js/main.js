require.config({
    paths: {
        jquery:'jquery-2.1.1',
        jqueryUI: 'http://code.jquery.com/ui/1.10.4/jquery-ui'
    },
    shim: {
        jqueryUI: {
            deps: ['jquery']
        }
    }
});

require(['jquery','window'],function($,w){
    $("#a").click(function(){
        var win = new w.Window().alert({
            title: "提示",
            content: "welcome!",
            handler: function(){
                alert("you click the button");  
            },
            width:300,
            height:150,
            y:50,
            hasCloseBtn: true,
            text4AlertBtn: "OK",
            dragHandle: ".window_header",
            handler4AlertBtn: function(){
                alert("you click the alert button");
            },
            handler4CloseBtn: function(){
                alert("you click the close button");
            }
        }).on("alert", function(){
            alert("the 2nd alert handler");
        }).on("close", function(){
            alert("the 2nd close handler");
        });
    });

    $("#b").click(function () {
        new w.Window().confirm({
            title: "system message",
            content: "Are you sure to delete this file?",
            width: 300,
            height: 150,
            y: 50,
            text4ConfirmBtn: "Yes",
            text4CancelBtn: "No",
            dragHandle: ".window_header"
        }).on("confirm", function(){
            alert("Confirm");
        }).on("cancel", function(){
            alert("Cancel");
        });
    });
});
