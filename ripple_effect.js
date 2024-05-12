$(document).ready(function(){
    var clicked;

    var Start = function () {
        if (clicked) return; // If there's already a ripple instance, don't start again

        clicked = $('body').ripples({
            resolution: 500,
            dropRadius: 25,
            perturbance: 0.08
        });

    };

    Start();

    // Button if clicked, destroys all ripples immediately
    // Future implementation idea: a single ripple that "wipes out" all ripples 
    $("button").click(function(){
        // Destroys the ripples 
        // Noooooooo :(
        if (clicked) {
            clicked.ripples('destroy');
        }

    });

});
