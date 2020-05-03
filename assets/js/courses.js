var syllabusData = {
  "9": {
    "icse": {
      "phy":
        "https://www.nasa.gov/sites/default/files/thumbnails/image/color-swath-use-12-10-15-vertical.jpg", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "cbse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "wbb": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    }
  },
  "10": {
    "icse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "cbse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "wbb": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    }
  },
  "11": {
    "icse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "cbse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "wbb": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    }
  },
  "12": {
    "icse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "cbse": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    },
    "wbb": {
      "phy":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "chem":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "maths":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "bio":
        "", // SYLLABUS IMAGE SRC TO BE PASTED HERE
      "eng":
        "" // SYLLABUS IMAGE SRC TO BE PASTED HERE
    }
  }
};


!(function ($) {
  "use strict";

  var selectedClass = 9;
  var selectedBoard = 'icse';
  var selectedSubject = 'phy1';

  var classTab = $("#classTab");
  var class_9 = $("#class_9");
  var class_10 = $("#class_10");
  var class_11 = $("#class_11");
  var class_12 = $("#class_12");

  var boardTab = $("#boardTab");
  var icse = $("#icse");
  var cbse = $("#cbse");
  var wbb = $("#wbb");

  var tab_9_10_cbse = $("#tab_9_10_cbse");
  var tab_11_12 = $("#tab_11_12");

  var phy = $("#phy");
  var chem = $("#chem");
  var maths = $("#maths");
  var bio = $("#bio");
  var eng = $("#eng");

  var sylImg = $("#sylImg");

  showContent();

  $(classTab).click(function (e) {

    selectedClass = e.target.dataset.class;

    var selectedId = e.target.id;

    // change tabs
    if (selectedId === 'class_9') {
      $(class_9).addClass("active");
      $(class_10).removeClass("active");
      $(class_11).removeClass("active");
      $(class_12).removeClass("active");
    }
    else if (selectedId === 'class_10') {
      $(class_9).removeClass("active");
      $(class_10).addClass("active");
      $(class_11).removeClass("active");
      $(class_12).removeClass("active");
    }
    else if (selectedId === 'class_11') {
      $(class_9).removeClass("active");
      $(class_10).removeClass("active");
      $(class_11).addClass("active");
      $(class_12).removeClass("active");
    }
    else if (selectedId === 'class_12') {
      $(class_9).removeClass("active");
      $(class_10).removeClass("active");
      $(class_11).removeClass("active");
      $(class_12).addClass("active");
    }

    // set subject list
    if ((selectedId === 'class_9' || selectedId === 'class_10') && (selectedBoard === 'cbse')) {
      $(tab_9_10_cbse).removeClass("hide");
      $(tab_11_12).addClass("hide");
      $(tab_9_10_wbboard).addClass("hide");
    }
    else if ((selectedId === 'class_9' || selectedId === 'class_10') && (selectedBoard === 'wbb')){
      $(tab_9_10_cbse).addClass("hide");
      $(tab_11_12).addClass("hide");
      $(tab_9_10_wbboard).removeClass("hide");
    }
    else {
      $(tab_9_10_cbse).addClass("hide");
      $(tab_11_12).removeClass("hide");
      $(tab_9_10_wbboard).addClass("hide");
    }

    $(phy).addClass("active");
    $(chem).removeClass("active");
    $(maths).removeClass("active");
    $(bio).removeClass("active");
    $(eng).removeClass("active");

    selectedSubject = 'phy';

    // show content markup
    showContent();
  });

  $(boardTab).click(function (e) {

    selectedBoard = e.target.dataset.board;

    var selectedId = e.target.id;

    // change tabs
    if (selectedId === 'icse') {
      $(icse).addClass("active");
      $(cbse).removeClass("active");
      $(wbb).removeClass("active");
    }
    else if (selectedId === 'cbse') {
      $(icse).removeClass("active");
      $(cbse).addClass("active");
      $(wbb).removeClass("active");
    }
    else if (selectedId === 'wbb') {
      $(icse).removeClass("active");
      $(cbse).removeClass("active");
      $(wbb).addClass("active");
    }
    console.log(selectedClass);
    console.log(selectedId);
    if ((selectedClass === '9' || selectedClass === '10') && (selectedId === 'cbse')) {
      $(tab_9_10_cbse).removeClass("hide");
      $(tab_11_12).addClass("hide");
      $(tab_9_10_wbboard).addClass("hide");
    }
    else if ((selectedClass === '9' || selectedClass === '10') && (selectedId === 'wbb')){
      $(tab_9_10_cbse).addClass("hide");
      $(tab_11_12).addClass("hide");
      $(tab_9_10_wbboard).removeClass("hide");
    }
    else {
      $(tab_9_10_cbse).addClass("hide");
      $(tab_11_12).removeClass("hide");
      $(tab_9_10_wbboard).addClass("hide");
    }

    // show content markup
    showContent();
  });

  
  $(tab_9_10_cbse).click(function (e) {
    var selectedId = e.target.id;
    console.log (selectedId);

    selectedSubject = e.target.dataset.sub;

    document.getElementsByClassName(name);
  

    if (selectedId === 'phy') {
      $(phy).addClass("active");
      $(chem).removeClass("active");
      $(maths).removeClass("active");
      $(bio).removeClass("active");
      $(eng).removeClass("active");
    }
    else if (selectedId === 'chem') {
      console.log ("Inside Chemistry");
      $(phy).removeClass("active");
      $(chem).addClass("active");
      $(maths).removeClass("active");
      $(bio).removeClass("active");
      $(eng).removeClass("active");
    }
    else if (selectedId === 'maths') {
      $(phy).removeClass("active");
      $(chem).removeClass("active");
      $(maths).addClass("active");
      $(bio).removeClass("active");
      $(eng).removeClass("active");
    }
    else if (selectedId === 'bio') {
      $(phy).removeClass("active");
      $(chem).removeClass("active");
      $(maths).removeClass("active");
      $(bio).addClass("active");
      $(eng).removeClass("active");
    }
    else if (selectedId === 'eng') {
      $(phy).removeClass("active");
      $(chem).removeClass("active");
      $(maths).removeClass("active");
      $(bio).removeClass("active");
      $(eng).addClass("active");
    }

    showContent();
  });

  $(tab_11_12).click(function (e) {
    var selectedId = e.target.id;
    console.log (selectedId);

    selectedSubject = e.target.dataset.sub;

    if (selectedId === 'phy1') {
      $(phy1).addClass("active");
      $(chem1).removeClass("active");
      $(maths1).removeClass("active");
      $(bio1).removeClass("active");
      $(eng1).removeClass("active");
    }
    else if (selectedId === 'chem1') {
      console.log ("Inside Chemistry");
      $(phy1).removeClass("active");
      $(chem1).addClass("active");
      $(maths1).removeClass("active");
      $(bio1).removeClass("active");
      $(eng1).removeClass("active");
    }
    else if (selectedId === 'maths1') {
      $(phy1).removeClass("active");
      $(chem1).removeClass("active");
      $(maths1).addClass("active");
      $(bio1).removeClass("active");
      $(eng1).removeClass("active");
    }
    else if (selectedId === 'bio1') {
      $(phy1).removeClass("active");
      $(chem1).removeClass("active");
      $(maths1).removeClass("active");
      $(bio1).addClass("active");
      $(eng1).removeClass("active");
    }
    else if (selectedId === 'eng1') {
      $(phy1).removeClass("active");
      $(chem1).removeClass("active");
      $(maths1).removeClass("active");
      $(bio1).removeClass("active");
      $(eng1).addClass("active");
    }

    showContent();
  });
   
  $(tab_9_10_wbboard).click(function (e) {
    var selectedId = e.target.id;
    console.log (selectedId);

    selectedSubject = e.target.dataset.sub;

    if (selectedId === 'lsc') {
      $(lsc).addClass("active");
      $(psc).removeClass("active");
      $(maths-wb).removeClass("active");
      $(eng-wb).removeClass("active");
    }
    else if (selectedId === 'psc') {
      $(lsc).removeClass("active");
      $(psc).addClass("active");
      $(maths-wb).removeClass("active");
      $(eng-wb).removeClass("active");
    }
    else if (selectedId === 'maths-wb') {
      $(lsc).removeClass("active");
      $(psc).removeClass("active");
      $(maths-wb).addClass("active");
      $(eng-wb).removeClass("active");
    }
    else if (selectedId === 'eng-wb') {
      $(lsc).removeClass("active");
      $(psc).removeClass("active");
      $(maths-wb).removeClass("active");
      $(eng-wb).addClass("active");
    }

    showContent();
  });  
 

  function showContent() {

    $(sylImg).removeAttr('src');

    try {

      var imgSrc = syllabusData[selectedClass][selectedBoard][selectedSubject];

      if (imgSrc) {
        $(sylImg).attr('src', imgSrc);
      }
      else {
        $(sylImg).removeAttr('src');
      }
    } catch (e) {
      console.log("could not load image!")
    }

  }

})(jQuery);
