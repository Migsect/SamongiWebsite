$(document).ready(function(){
  function tabEvent(identifier){
    return function(){
      $("#" + identifier + ".staff_page").slideDown(500);
      $("div.staff_page").not("#" + identifier).slideUp(500);
    };
  };


  $("#projects.staff_tab_button").click(tabEvent("projects"));
  $("#about.staff_tab_button").click(tabEvent("about"));
  $("#experience.staff_tab_button").click(tabEvent("experience"));
  $("#skills.staff_tab_button").click(tabEvent("skills"));
});
