require.config({
    paths: {
        jquery:'jquery-2.1.1'
    }
});

require(['jquery','window'],function($,w){
    var w = new w.Window();
    $("#a").click(function(){
        w.alert("welcome!",function(){
          alert("you click the button");  
        });
    })
});
