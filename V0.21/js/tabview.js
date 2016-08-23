define(['animate'], function (animate) {
    function TabView(){
        this.name = "TabView";
        this.animate = new animate.Animate();
    }
    return{
        TabView : TabView
    }
});
