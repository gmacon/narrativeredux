/**
 * File: person.js
 * Part of Abstract Layer.
 * 
 * This is abstract layer for individual.
 * Its purpose is to use same code in skin even if you change default 'Report Generator' for different (alternative) one.
 */
 
function People() {
  this.collection = Individuals;
  
  this.ordered = function(is_in_order) {
    this.collection = (is_in_order ? Individuals.SortBy("name.last, -name.first, name.middle") : Individuals);
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
 
function Person(person) {
//  if(person typeof number) {
//    person = Individuals(person);
//  }
  
  this.age = function() {
    return person.Age;
  }
  this.age_at_child_births = function() {
    return person.AgeAtChildBirths;
  }
  this.age_of_death = function() {
    return person.AgeOfDeath;
  }
  this.birth_baptism_date = function() {
    return person.Birth.Baptism.Date;
  }
  this.birth_baptism_godfather = function() {
    return person.Birth.Baptism.Godfather;
  }
  this.birth_baptism_godmother = function() {
    return person.Birth.Baptism.Godmother;
  }
  this.birth_baptism_officiator = function() {
    return person.Birth.Baptism.Officiator;
  }
  this.birth_baptism_officiator_title = function() {
    return person.Birth.Baptism.Officiator.Title;
  }
  this.birth_baptism_place = function() {
    return person.Birth.Baptism.Place;
  }
  this.birth_baptism_source = function() {
    return person.Birth.Baptism.Source;
  }
  this.birth_blood_type = function() {
    return person.Birth.BloodType;
  }
  this.birth_ceremony_type = function() {
    return person.Birth.CeremonyType;
  }
  this.birth_comment = function() {
    return person.Birth.Comment;
  }
  this.birth_date = function() {
    return person.Birth.Date;
  }
  this.birth_doctor = function() {
    return person.Birth.Doctor;
  }
  this.birth_place = function() {
    return person.Birth.Place;
  }  
  this.birth_pregnancy_length = function() {
    return person.Birth.PregnancyLength;
  }
  this.birth_source = function() {
    return person.Birth.Source;
  }
  this.birthday = function() {
    return person.Birthday;
  }
  this.child_no = function() {
    return person.child_no;
  }
  this.children = function() {
    return person.Children;
  }
  this.children_adopted = function() {
    return person.Children.Adopted;
  }
  this.children_age = function() {
    return person.Children.Age;
  }
  this.children_biological = function() {
    return person.Children.Biological;
  }
  this.children_count = function() {
    return person.Children.Count;
  }
  this.children_order = function() {
    return person.Children.Order;
  }
  this.comment = function() {
    return person.Comment;
  }
  this.contact_email = function() {
    return person.Contact.Email;
  }
  this.contact_homepage = function() {
    return person.Contact.Homepage;
  }
  this.contact_telephone = function() {
    return person.Contact.Telephone;
  }
  this.contact_telephone_work = function() {
    return person.Contact.TelephoneWork;
  }
  this.contacts = function() {
    return person.Contacts;
  }
  this.custom = function(tag) {
    return person[tag];
  }
  this.custom_tag1 = function() {
    return person.custom_tag1;
  }
  this.custom_tag2 = function() {
    return person.custom_tag2;
  }
  this.custom_tag3 = function() {
    return person.custom_tag3;
  }
  this.custom_tag4 = function() {
    return person.custom_tag4;
  }
  this.custom_tag5 = function() {
    return person.custom_tag5;
  }
  this.data_level = function() {
    return person.DataLevel;
  }
  this.death_age = function() {
    return person.Death.Age;
  }
  this.death_cause = function() {
    return person.Death.Cause;
  }
  this.death_cause_description = function() {
    return person.Death.Description;
  }
  this.death_childless = function() {
    return person.Death.Childless;
  }
  this.death_comment = function() {
    return person.Death.Comment;
  }
  this.death_date = function() {
    return person.Death.Date;
  }
  this.death_disposition_date = function() {
    return person.Death.Disposition.Date;
  }
  this.death_disposition_place = function() {
    return person.Death.Disposition.Place;
  }
  this.death_disposition_source = function() {
    return person.Death.Disposition.Source;
  }
  this.death_disposition_type = function() {
    return person.Death.Disposition.Type;
  }
  this.death_funerals_agency = function() {
    return person.Death.Funerals.Agency;
  }
  this.death_funerals_date = function() {
    return person.Death.Funerals.Date;
  }
  this.death_funerals_place = function() {
    return person.Death.Funerals.Place;
  }
  this.death_funerals_source = function() {
    return person.Death.Funerals.Source;
  }
  this.death_place = function() {
    return person.Death.Place;
  }
  this.death_source = function() {
    return person.Death.Source;
  }
  this.display_colors_border_fill = function() {
    return person.Display.Colors.Border.Fill;
  }
  this.display_colors_border_outline = function() {
    return person.Display.Colors.Border.Outline;
  }
  this.display_colors_gender_fill = function() {
    return person.Display.Colors.Gender.Fill;
  }
  this.display_colors_gender_fill_bottom_left = function() {
    return person.Display.Colors.Gender.Fill.Bottom.Left;
  }
  this.display_colors_gender_fill_bottom_right = function() {
    return person.Display.Colors.Gender.FillBottom.Right;
  }
  this.display_colors_gender_fill_mask = function() {
    return person.Display.Colors.Gender.Fill.Mask;
  }
  this.display_colors_gender_fill_top_left = function() {
    return person.Display.Colors.Gender.Fill.Top.Left;
  }
  this.display_colors_gender_fill_top_right = function() {
    return person.Display.Colors.Gender.Fill.Top.Right;
  }
  this.display_colors_gender_symbol = function() {
    return person.Display.Colors.Gender.Fill.Symbol;
  }
  this.display_colors_gender_text = function() {
    return person.Display.Colors.Gender.Text;
  }
  this.display_colors_label_bottom = function() {
    return person.Display.Colors.Label.Bottom;
  }
  this.display_colors_label_fill_bottom = function() {
    return person.Display.Colors.Label.Fill.Bottom;
  }
  this.display_colors_label_fill_top = function() {
    return person.Display.Colors.Label.Fill.Top;
  }
  this.display_colors_label_top = function() {
    return person.Display.Colors.Label.Top;
  }
  this.display_flags_disable = function() {
    return person.Display.Flags.Disable;
  }
  this.display_flags_enable = function() {
    return person.Display.Flags.Enable;
  }
  this.display_label_bottom_dimension = function() {
    return person.Display.Label.Bottom.Dimension;
  }
  this.display_label_bottom_text = function() {
    return person.Display.Label.Bottom.Text;
  }
  this.display_label_top_dimension = function() {
    return person.Display.Label.Top.Dimension;
  }
  this.display_label_top_text = function() {
    return person.Display.Label.Top.Text;
  }
  this.display_medical_symbol = function() {
    return person.Display.Medical.Symbol;
  }
  this.dob_dod = function() {
    return person.DoB_DoD;
  }
  this.dob_dod_2 = function() {
    return person.DoB_DoD_2lines;
  }
  this.dob_dod_id = function() {
    return person.DoB_DoD_ID;
  }
  this.educations = function() {
    return person.Educations;
  }
  this.email = function() {
    return person.Email;
  }
  this.employer = function() {
    return person.Employer;
  }
  this.families = function() {
    return person.Families;
  }
  this.families_order = function() {
    return person.Families.Order;
  }
  this.family = function() {
    return person.Family;
  }
  this.family_rank = function() {
    return person.FamilyRank;
  }
  this.father = function() {
    return person.Father;
  }
  this.fathers = function() {
    return person.Fathers;
  }
  this.fathers_age_at_birth = function() {
    return person.FathersAgeAtBirth;
  }
  this.gender = function() {
    return person.Gender;
  }
  this.homepage = function() {
    return person.Homepage;
  }
  this.href = function() {
    return person.Href;
  }
  this.hyperlink = function() {
    return person.Hyperlink;
  }
  this.hyperlink_action = function() {
    return person.Hyperlink.Action;
  }
  this.hyperlink_internal = function() {
    return person.Hyperlink.Internal;
  }
  this.hyperlink_target = function() {
    return person.Hyperlink.Target;
  }
  this.id = function() {
    return person.ID;
  }
  this.individual_internal_hyperlink = function() {
    return person.IndividualInternalHyperlink;
  }
  this.is_adopted = function() {
    return person.IsAdopted;
  }
  this.is_dead = function() {
    return person.IsDead;
  }
  this.is_label = function() {
    return person.IsLabel;
  }
  this.mates = function() {
    return person.Mates;
  }
  this.mates_count = function() {
    return person.Mates.Count;
  }
  this.mother = function() {
    return person.Mother;
  }
  this.mothers = function() {
    return person.Mothers;
  }
  this.mothers_age_at_birth = function() {
    return person.MothersAgeAtBirth;
  }
  this.name = function() {
    return person.Name;
  }
  this.name_alternative = function() {
    return person.Name.Alternative;
  }
  this.name_display = function() {
    return person.Name.Display;
  }   
  this.name_display_format = function() {
    return person.Name.Display.Format;
  }
  this.name_display_lines = function() {
    return person.Name.Display.Lines;
  }
  this.name_first = function() {
    return person.Name.First;
  }
  this.name_first_and_last = function() {
    return person.Name.FirstAndLast;
  }
  this.name_first_and_middle = function() {
    return person.Name.FirstAndMiddle;
  }
  this.name_format = function() {
    return person.Name.Format;
  }
  this.name_last = function() {
    return person.Name.Last;
  }
  this.name_last2 = function() {
    return person.Name.Last2;
  }
  this.name_last_or_last2 = function() {
    return person.Name.LastOrLast2;
  }
  this.name_middle = function() {
    return person.Name.Middle;
  }
  this.name_nick = function() {
    return person.Name.Nick;
  }
  this.name_short = function() {
    return person.Name.Short;
  }
  this.name_suffix = function() {
    return person.Name.Suffix;
  }
  this.name_title = function() {
    return person.Name.Title;
  }
  this.occupation = function() {
    return person.Occupation;
  }
  this.occupations = function() {
    return person.Occupations;
  }
  this.parents = function() {
    return person.Parents;
  }
  this.parents_other = function() {
    return person.Parents.Other;
  }
  this.pictures = function() {
    return person.Pictures;
  }
  this.pictures_count = function() {
    return person.Pictures.Count;
  }
  this.pictures_primary = function() {
    return person.Pictures.Primary;
  }
  this.position = function() {
    return person.Position;
  }
  this.position_boundary_rect = function() {
    return person.Position.BoundaryRect;
  }
  this.position_genomap = function() {
    return person.Position.GenoMap;
  }  
  this.position_is_hidden = function() {
    return person.Position.IsHidden;
  }
  this.position_size = function() {
    return person.Position.Size;
  }
  this.position_x = function() {
    return person.Position.x;
  }
  this.position_y = function() {
    return person.Position.y;
  }
  this.position_z = function() {
    return person.Position.z;
  }
  this.references = function() {
    return person.References;
  }
  this.references_count = function() {
    return person.References.Count;
  }
  this.siblings = function() {
    return person.Siblings;
  }
  this.siblings_adopted = function() {
    return person.Siblings.Adopted;
  }
  this.siblings_all = function() {
    return person.Siblings.All;
  }
  this.siblings_biological = function() {
    return person.Siblings.Biological;
  }
  this.siblings_half = function() {
    return person.Siblings.Half;
  }
  this.siblings_other = function() {
    return person.Siblings.Other;
  }
  this.siblings_step = function() {
    return person.Siblings.Step;
  }
  this.siblings_twins = function() {
    return person.Siblings.Twins;
  }
  this.sources = function() {
    return person.Siblings.Sources;
  }
  this.yob_yod = function() {
    return person.YoB_YoD;
  }
  this.yob_yod_id = function() {
    return person.YoB_YoD_ID;
  }
}


/*
  var p = new Person;
  for (property in p) {
    writeme(property);
    writeme(p[property]);
    writeme("<br />");
  }
*/
