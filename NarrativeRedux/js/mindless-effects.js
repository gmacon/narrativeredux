/**
 *  Toggle between collapsed and expanded styles
 */
function toggler() {
      $(this).parent("ul").toggleClass("collapsed");
}


function loader(e) {
    e.preventDefault();
//    In name attribute is hidden place where to load links content
    var where = $(this).attr("name");
//    Where is content to read?
    var from  = $(this).attr("href");
    
//    ./home.html -> home
//    var class_name = from.substring(2, from.lastIndexOf('.'));
//    e.g.: get #content, set class: home, load: ./home.html #content > *
//    $('#'+where).attr("class", class_name).load(from + ' #' + where + '> *');

    
}

/**
 *  When html is ready run following script...
 */
$(document).ready(function() {
//    Redirect unfinished pages
//    $(".link-place, .link-picture, .link-source-citation, .link-social-entity").attr("href", "home.htm");

//    Toggler for different lists...
    $("ul, li").hover(function () {
      $(this).addClass("mouse-is-over").children("span").bind("click", toggler);    
    }, function () {
      $(this).removeClass("mouse-is-over").children("span").unbind("click", toggler);
    });

//    $(".header-item > a").click(loader);
    $(".menu-item > a").bind("click", loader);
    
});
