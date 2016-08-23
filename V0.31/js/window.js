define(['jquery'], function ($) {
    function Window(){

    }

    Window.prototype = {
        alert: function (context, handler) {
            var html = "<div class='window_boundingBox'>"
                     + context
                     + "</div>";
            $('body').append(html);
        },
        confirm: function () {

        },
        prompt: function () {

        }
    }

    return{
        Window:Window
    }
})