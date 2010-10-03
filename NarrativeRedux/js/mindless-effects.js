/**
 *  Toggle between collapsed and expanded styles
 */
function toggler() {
      if($(this).next().hasClass("collapsed") ^ $(this).next().hasClass("expanded")) {
        $(this).next().toggleClass("collapsed").toggleClass("expanded");
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

//    Toggler for different lists...
    $("body").delegate("ul, li", "hover", function () {
      $(this).toggleClass("mouse-is-over").delegate("span", "click", toggler);
    });
    
    $(".menu-individuals-toc").delegate("a", "click", load_menu_item);
});
