var animatePoints = function() {
    
    var points = document.getElementsByClassName('point');
    
    function revealPoint(i) {
        points[i].style.opacity = 1;
        points[i].style.transform = "scaleX(1) translateY(0) rotate(360deg)";
        points[i].style.msTransform = "scaleX(1) translateY(0) rotate(360deg)";
        points[i].style.WebkitTransform = "scaleX(1) translateY(0) rotate(360deg)"; 
    };

    for (var i = 0; i < 3; i++)
    {
        revealPoint(i)                
     };
};

animatePoints();