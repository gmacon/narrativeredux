/**
 * File: standard.js
 */
 
/**
 * Writes Default Menu
 */
function WriteStandardMenu() {
    print("<ul class='menu-list'>");
    print  ("<li class='menu-item menu-home'>");
    Report.WriteFormatted("<a href='./home.html' title='{0}'></a>", Dic("AltHome"));
    print  ("</li>");
    print  ("<li class='menu-item menu-individuals-toc'>");
    Report.WriteFormatted("<a href='./individuals_toc.html' title='{0}'></a>", Dic("AltIndividuals"));
    print  ("</li>");
    print  ("<li class='menu-container'></li>");
    print("</ul>");
}

/**
 * Writes Default Footer
 */
function WriteStandardFooter() {
    print("<p><small>");
    
//    Report.WriteFormatted(Dic("FmtHtmlHomeSkin"),
//                                ReportGenerator.SoftwareVersion,
//                                Year(Date()),
//                                Month(Date()),
//                                Day(Date()),
//                                (ReportGenerator.PathSkin ? "" : Dic("Custom") + " "),
//                                ReportGenerator.SkinName,
//                                ReportGenerator.SkinVersions);
    print("</small></p>");
    print("<p><a target='_blank' href='http://www.genopro.com/'>");
    Report.WriteFormatted("<img src='./images/genopro.logo.gif' alt='{0}' title='{1}' />", Dic("AltGenoProLogo"), Dic("AltGenoProLogo"));
    print("</a></p>");
}

function WriteStandardIntro() {
  Report.WriteFormatted(Dic("FmtHtmlHomeIntro"), 0, (new People()).count(), 0);
}