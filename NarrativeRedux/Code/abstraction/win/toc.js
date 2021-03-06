/**
 * File: toc.js
 */

/**
 * Universal class for writing ToCs.
 * To use it, you need class with functions: count, item(item_number), item_at_depth(item, depth)
 * Check People class for example.
 *
 * @param abstract_collection
 * @param class_name class used in css
 */
function ToC(abstract_collection, class_name) {
  this.collapsed = false;

  /**
   * Indicates if toc should be collapsed
   * @param collapsed
   */
  this.is_collapsed = function(collapsed) {
    this.collapsed = collapsed;
  }
  /**
   * @param depth Depth in ToC tree e.g. 0 = first letter of surname, 1 = last name, 2 = first name.
   */
  this.write = function() {
    var abstract_list_class_name = "toc-list " + class_name + "-toc-list";
    var abstract_list_item_class_name = "toc-item " + class_name + "-toc " + class_name + "-toc-item";

//All people-->
    Report.WriteFormatted("<ul class='{0} {1}'>", abstract_list_class_name, "toc-list-depth-0");

    for (var i = 0; i < abstract_collection.count(); i++) {
      var last_item = new abstract_collection.item(i-1);
      var current_item = new abstract_collection.item(i);
      var next_item = new abstract_collection.item(i+1);

      var start_of_1 = abstract_collection.item_at_depth(last_item, 1) != abstract_collection.item_at_depth(current_item, 1);
      var start_of_2 = abstract_collection.item_at_depth(last_item, 2) != abstract_collection.item_at_depth(current_item, 2);
      var end_of_1 = abstract_collection.item_at_depth(current_item, 1) != abstract_collection.item_at_depth(next_item, 1);
      var end_of_2 = abstract_collection.item_at_depth(current_item, 2) != abstract_collection.item_at_depth(next_item, 2);

//Start of first letter of surname
      if((i == 0) || start_of_1) {
        Report.WriteFormatted("<li class='{0}'>", abstract_list_item_class_name);
        Report.WriteFormatted ("<span class='{1} {2}-{1}'>{0}</span>", abstract_collection.item_at_depth(current_item, 1), "toc-depth-1", class_name)
        Report.WriteFormatted  ("<ul class='{0} {1} {2}'>", abstract_list_class_name, (this.collapsed ? "collapsed" : ""), "toc-list-depth-1");
      }
//Start of surname
      if((i == 0) || start_of_2) {
        Report.WriteFormatted   ("<li class='{0}'>", abstract_list_item_class_name);
        Report.WriteFormatted    ("<span class='{1} {2}-{1}' id='{0}'>{0}</span>", abstract_collection.item_at_depth(current_item, 2), "toc-depth-2", class_name);
        Report.WriteFormatted     ("<ul class='{0} {1} {2}'>", abstract_list_class_name, (this.collapsed ? "collapsed" : ""), "toc-list-depth-2");
      }
//Start of person info
      Report.WriteFormatted        ("<li class='{0}'>", abstract_list_item_class_name);
      Report.WriteFormatted         ("<a href='./{0}.html'>", current_item.id());
      Report.WriteFormatted          ("<span class='{2} {3}-{2} {1}'>{0}</span>", abstract_collection.item_at_depth(current_item, 3), (current_item.pictures_count() > 0 ? "photographied" : ""), "toc-depth-3", class_name);
      Report.Write                  ("</a>");
      Report.WriteFormatted         ("<span class='{0}'></span>", "date" + class_name + "-toc-date");
      Report.Write                 ("</li>");
//End of person info

//End of surname
      if(end_of_2) {
        Report.Write        ("</ul>");
        Report.Write      ("</li>");
      }

//End of first letter of surname
      if(end_of_1) {
        Report.Write    ("</ul>");
        Report.Write  ("</li>");
      }

      delete last_item;
      delete current_item;
      delete next_item;
    }
    Report.Write("</ul>");
  }
}