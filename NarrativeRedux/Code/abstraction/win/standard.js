/**
 * File: standard.js
 */
 
/**
 * Writes Default Menu
 */
function WriteStandardMenu() {
    Report.Write("<ul class='menu-list'>");
    Report.Write  ("<li class='menu-item menu-home'>");
    Report.WriteFormatted("<a href='./home.html' title='{0}'></a>", Dic("AltHome"));
    Report.Write  ("</li>");
    Report.Write  ("<li class='menu-item menu-individuals-toc'>");
    Report.WriteFormatted("<a href='./individuals_toc.html' title='{0}'></a>", Dic("AltIndividuals"));
    Report.Write  ("</li>");
    Report.Write  ("<li class='menu-container'></li>");
    Report.Write("</ul>");
}

/**
 * Writes Default Footer
 */
function WriteStandardFooter() {
    Report.Write("<p><small>");
    /*
    Report.WriteFormatted(Dic("FmtHtmlHomeSkin"),
                                ReportGenerator.SoftwareVersion,
                                Year(Date()),
                                Month(Date()),
                                Day(Date()),
                                (ReportGenerator.PathSkin ? "" : Dic("Custom") + " "),
                                ReportGenerator.SkinName,
                                ReportGenerator.SkinVersion);
                                */
    Report.Write("</small></p>");
    Report.Write("<p><a target='_blank' href='http://www.genopro.com/'>");
    Report.WriteFormatted("<img src='./images/genopro.logo.gif' alt='{0}' title='{1}' />", Dic("AltGenoProLogo"), Dic("AltGenoProLogo"));
    Report.Write("</a></p>");
}
