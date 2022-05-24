var $containerBlock = $(".container");

var $thisContainer = $containerBlock[0];
for (var i = 0; i <= 8; i++) {
  // console.log($($thisContainer).children()[i])
  var $thisInputDiv = $($($($thisContainer).children()[i]).children()[1]);