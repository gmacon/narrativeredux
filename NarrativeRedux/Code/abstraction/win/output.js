/**
 * File: output.js
 * Part of Abstract Layer.
 * 
 * This is an abstract layer for output functions.
 * Its purpose is to use same code in skin even if you change default 'Report Generator' for different (alternative) one.
 */

function print(str) {
  Report.Write(str);
}

function printf(str, vars) {
  Report.WriteFormatted(str, arguments);
}