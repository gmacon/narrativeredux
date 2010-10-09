/**
 *  Toggle between collapsed and expanded styles
 */
function toggler() {
  var obj = $(this).next();
  if(obj.hasClass("collapsed") ^ obj.hasClass("expanded")) {
    obj.toggleClass("collapsed").toggleClass("expanded");
  }
}

function load_menu_item(e) {
  if($(this).attr("class").search('toc-item') == -1) {
    e.preventDefault();
  }
  
  var from  = $(this).attr("href");
  
  $(".menu-list > .menu-container").load(from + ' #content > *');
}

/**
 *  When html is ready run following script...
 */
$(document).ready(function() {
//    Redirect unfinished pages
//    $(".link-place, .link-picture, .link-source-citation, .link-social-entity").attr("href", "home.htm");
    $(".family-toc-item a").delegate(".family-toc-depth-3", "click", function(e) { e.preventDefault(); });

//    Toggler for different lists...
    $("body").delegate("ul, li", "hover", function () {
      $(this).toggleClass("mouse-is-over").delegate("span", "click", toggler);
    });
    
//    $(".menu-toc").delegate("a", "mouseover", load_menu_item);
    $(".menu-toc").delegate("a", "click", load_menu_item);
});
