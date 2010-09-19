<%[
/**
 * Merges js-libraries into the one: lib.js.
 */ 
//Skin Directory
var skn_dir = ReportGenerator.PathSkin;
//Scripts Directory
var scr_dir= skn_dir + "Code\\abstraction\\win\\";
//Output Library Directory
//Directory where the generated library will resident
var out_lib_dir = skn_dir + "Code\\abstraction\\";

var fso = new ActiveXObject("Scripting.FileSystemObject");
var library = fso.OpenTextFile(out_lib_dir + "lib.js", 2, true);

//Get current folder, which contains
folder = fso.GetFolder(scr_dir);
filename = new Enumerator(folder.files);

while(!filename.atEnd()) {
  if(filename.item() == scr_dir+"generate.js") {
  }
//  else if(filename.item() == scr_dir+"") {
//  }
  else { 
      var file = fso.OpenTextFile(filename.item());
      library.Write(file.ReadAll());
      file.Close();
  }
  filename.moveNext();
}
library.Close();
Report.LogComment('Abstraction completed');
Report.AbortPage();
]%>