function stickyBottom(staticDiv, stickyDiv) {
    var content = $(stickyDiv).children().clone();
    $(staticDiv).empty().append(content);
    $(staticDiv + ' .divContent').removeClass('container');

    stickylogic();
    $(window).scroll(function() {
        stickylogic();
    });

    function stickylogic() {
        var scrollPx = $(window).scrollTop(),
            staticTop = $(staticDiv).offset().top,
            viewPortHeight = window.innerHeight,
            stickyHeight = $(stickyDiv).outerHeight(),
            staticStartingPx = staticTop - (viewPortHeight - stickyHeight);
			
        if (scrollPx >= staticStartingPx)
            $(stickyDiv).hide();
        else
            $(stickyDiv).show();
    }
}