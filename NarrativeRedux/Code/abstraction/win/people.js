/**
 * File: people.js
 * Part of Abstract Layer.
 *
 * This is abstract layer for collection of individuals.
 * Its purpose is to use same code in skin even if you change default 'Report Generator' for different (alternative) one.
 */
function People() {
  this.collection = Individuals;

  /**
   * Sets collection to be ordered.
   * @param is_in_order If true collection is in specified order, if false: not.
   */
  this.ordered = function(is_in_order) {
    this.collection = (is_in_order ? Individuals.SortBy("name.last, name.first, name.middle") : Individuals);
  }

  /**
   * Returns item which this class collects.
   * @param index Item number in collection.
   */
  this.item = function(index) {
    return new Person(Individuals(index));
  }

  /**
   * Returns number of items in collection.
   * (Used for better reading code in other places)
   */
  this.count = function() {
    return Individuals.count;
  }
  /**
   * Returns different values on different depths.
   * @param p Item from this collection
   * @param depth Depth in ToC tree e.g. 0 = first letter of surname, 1 = last name, 2 = first name.
   */
  this.item_at_depth = function(p, depth) {
    switch(depth) {
      case 1:
        return p.name_last().charAt(0);
      case 2:
        return p.name_last();
      case 3:
        return p.name_first_and_middle();
      default:
        return "";
    }
  }
};
