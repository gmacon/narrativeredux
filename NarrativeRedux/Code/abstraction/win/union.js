/**
 * File: union.js
 * Part of Abstract Layer.
 *                                        
 * This is an abstract layer for family.
 * Its purpose is to use same code in skin even if you change default 'Report Generator' for different (alternative) one.
 */
// TODO:
//Rename class and this file

function Unions() {
  this.collection = Families;
  
  this.ordered = function(is_in_order) {
//    Todo:
    this.collection = (is_in_order ? Families.SortBy("name") : Families);
  }
  
  /**
   * Returns item which this class collects.
   * @param index Item number in collection.
   */
  this.item = function(index) {
    return new Union(Families(index));
  }
  
  /**
   * Returns number of items in collection.
   * (Used for better reading code in other places)
   */
  this.count = function() {
    return Families.count;
  }
  /**
   * Returns different values on different depths.
   * @param f Item from this collection
   * @param depth Depth in ToC tree e.g. 0 = first letter of surname, 1 = last name, 2 = first name.
   */
  this.item_at_depth = function(f, depth) {
    switch(depth) {
      case 1:
        return f.name().charAt(0);
      case 2:
//        return f.husband().name_last();
        return f.name();
      case 3:
//        return f.parents(1).name_first_and_middle() + " & " + f.parents(0).name_first_and_middle();
        return "?";
      default:
        return "";
    }
  }
}; 

function Union(family) {
  this.display_text = function() {
    return family.DisplayText;
  }
  this.id = function() {
    return family.ID;
  }
  this.husband = function() {
    return family.Husband;
  }
  this.name = function() {
    return family.Name;
  }
  this.parents = function(index) {
    return family.Parents(index);
  }
  this.pictures_count = function() {
    return family.Pictures.Count;
  }
};
