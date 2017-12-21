
$(window).load(function() {

    $("#flexiselDemo3").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 4000,
            pauseOnHover: true
        }
    });

    $("#flexiselDemo4").flexisel({
        visibleItems: 4,
        itemsToScroll: 1,
        autoPlay: {
            enable: true,
            interval: 5000,
            pauseOnHover: true
        }
    });
});
