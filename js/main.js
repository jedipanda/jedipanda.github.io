(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  });
  $('#sidebarCollapse').on('click', function () {
    $('#content').toggleClass('active');
});
})(jQuery);


filterSelection("all") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

(($ => {
  $(() => {
    $.prototype.fullscreen = function()
    {
      var $e = $(this);
      if(!$e.hasClass('modal-fullscreen')) return;
      bind($e);
    }
    
    function cssn($e, props) {
      let sum = 0;
      props.forEach(p => {
        sum += parseInt($e.css(p).match(/\d+/)[0]);
      });
      return sum;
    }
    function g($e)
    {
      return {
        width: cssn($e, ['margin-left', 'margin-right', 'padding-left', 'padding-right', 'border-left-width', 'border-right-width']),
        height: cssn($e, ['margin-top', 'margin-bottom', 'padding-top', 'padding-bottom', 'border-top-width', 'border-bottom-width']),
      };
    }
    function calc($e)
    {
      const wh = $(window).height();
      const ww = $(window).width();
      const $d = $e.find('.modal-dialog');
      $d.css('width', 'initial');
      $d.css('height', 'initial');
      $d.css('max-width', 'initial');
      $d.css('margin', '5px');
      const d = g($d);
      const $h = $e.find('.modal-header');
      const $f = $e.find('.modal-footer');
      const $b = $e.find('.modal-body');
      $b.css('overflow-y', 'scroll');
      const bh = wh - $h.outerHeight() - $f.outerHeight() - ($b.outerHeight()-$b.height()) - d.height;
      $b.height(bh);
    }
    function bind($e)
    {
       $e.on('show.bs.modal', e => {
        const $e = $(e.currentTarget).css('visibility', 'hidden');
       });
       $e.on('shown.bs.modal', e => {
        calc($(e.currentTarget));
        const $e = $(e.currentTarget).css('visibility', 'visible');   
       });
    }
    $(window).resize(() => {
      calc($('.modal.modal-fullscreen.in'));
    });
    bind($('.modal-fullscreen'));
  });
}))(jQuery);



// Filter documents

$(document).ready(function(){
  $('input[type=checkbox]').change(function(){
      if($(this).is(':checked')){           $('.'+$(this).attr('rel')).css('display','block');
      }else{
      $('.'+$(this).attr('rel')).css('display','none');
      }
  });
});

// Check all button

//
// function that toggles switch from iframe

function toggleCheck() {
  
  if(document.getElementById("myCheckbox").checked === true){
    document.getElementById("aLink").style.opacity = "1";
    document.getElementById("aLink").style.height = "150";
    console.log("works");
  } else {
    document.getElementById("aLink").style.opacity = "0";
    document.getElementById("aLink").style.height = "0";
    console.log("not work");
    
  }
}
  


// functiont that toggles switch from modal parent
/*  function toggleCheck2(){
  console.log("test1");
  document.getElementById('iframez').contentWindow.toggleCheck();
  
   console.log("test2");

 } */

/*  var iframe = document.getElementById('iframez');
 var innerDoc = iframe.contentWindow.document;
 var innerDoc2 = iframe.contentDocument;
 var glass = innerDoc.getElementById("aLink");
 var glass2 = document.getElementById('iframez').contentWindow.document.getElementById('aLink')
  */


//acces iframe content from parent

function toggleCheck1(){
  var x = document.getElementById("iframez");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink');
  
  if(document.getElementById("myCheckbox").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}


/* // iframe2
function toggleCheck2(){
  var x2 = document.getElementById("iframez2");
var y2 = x2.contentDocument;
var z3 = x2.contentDocument.getElementById('aLink2');

if(document.getElementById("myCheckbox2").checked === true){
    z3.style.opacity = "1";
    z3.style.height = "150";
    console.log("works");}
 else {
  z3.style.opacity = "0";
  z3.style.height = "0";
  console.log("not work");
}
} */

/* function myFunction() {
  var a = document.getElementById("iframez2");
  var b = a.contentDocument;
  var c = a.contentDocument.getElementById('aLink2');
  if (b.document)b = b.document;
  x.style.opacity = "1";
  
  b.body.style.backgroundColor = "red";
  
} */

function toggleCheck2(){
  var x = document.getElementById("iframez2");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink2');
  
  if(document.getElementById("myCheckbox2").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A015 toggle function
function toggleCheck3(){
  var x = document.getElementById("iframez3");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink3');
  
  if(document.getElementById("myCheckbox3").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A020 toogle switch

function toggleCheck4(){
  var x = document.getElementById("iframez4");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink4');
  
  if(document.getElementById("myCheckbox4").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A025 toggle switch

function toggleCheck5(){
  var x = document.getElementById("iframez5");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink5');
  
  if(document.getElementById("myCheckbox5").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A030 toggle switch

function toggleCheck6(){
  var x = document.getElementById("iframez6");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink6');
  
  if(document.getElementById("myCheckbox6").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// 0035 toggle switch

function toggleCheck7(){
  var x = document.getElementById("iframez7");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink7');
  
  if(document.getElementById("myCheckbox7").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A040 toggle switch

function toggleCheck8(){
  var x = document.getElementById("iframez8");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink8');
  
  if(document.getElementById("myCheckbox8").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A045 toggle switch

function toggleCheck9(){
  var x = document.getElementById("iframez9");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink9');
  
  if(document.getElementById("myCheckbox9").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A050 toggle switch

function toggleCheck10(){
  var x = document.getElementById("iframez10");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink10');
  
  if(document.getElementById("myCheckbox10").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A055 toggle switch

function toggleCheck11(){
  var x = document.getElementById("iframez11");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink11');
  
  if(document.getElementById("myCheckbox11").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A060 toggle switch

function toggleCheck12(){
  var x = document.getElementById("iframez12");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink12');
  
  if(document.getElementById("myCheckbox12").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A065 toggle switch

function toggleCheck13(){
  var x = document.getElementById("iframez13");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink13');
  
  if(document.getElementById("myCheckbox13").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A070 toggle switch

function toggleCheck14(){
  var x = document.getElementById("iframez14");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink14');
  
  if(document.getElementById("myCheckbox14").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A075 toggle switch

function toggleCheck15(){
  var x = document.getElementById("iframez15");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink15');
  
  if(document.getElementById("myCheckbox15").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A080 toggle switch

function toggleCheck16(){
  var x = document.getElementById("iframez16");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink16');
  
  if(document.getElementById("myCheckbox16").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A085 toggle switch

function toggleCheck17(){
  var x = document.getElementById("iframez17");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink17');
  
  if(document.getElementById("myCheckbox17").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A090 toggle switch

function toggleCheck18(){
  var x = document.getElementById("iframez18");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink18');
  
  if(document.getElementById("myCheckbox18").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A095 toggle switch

function toggleCheck19(){
  var x = document.getElementById("iframez19");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink19');
  
  if(document.getElementById("myCheckbox19").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A100 toggle switch

function toggleCheck20(){
  var x = document.getElementById("iframez20");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink20');
  
  if(document.getElementById("myCheckbox20").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}
// A105 toggle switch

function toggleCheck21(){
  var x = document.getElementById("iframez21");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink21');
  
  if(document.getElementById("myCheckbox21").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A110 toggle switch

function toggleCheck22(){
  var x = document.getElementById("iframez22");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink22');
  
  if(document.getElementById("myCheckbox22").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A115 toggle switch

function toggleCheck23(){
  var x = document.getElementById("iframez23");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink23');
  
  if(document.getElementById("myCheckbox23").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}

// A120 toggle switch

function toggleCheck24(){
  var x = document.getElementById("iframez24");
  var y = x.contentDocument;
  var z = x.contentDocument.getElementById('aLink24');
  
  if(document.getElementById("myCheckbox24").checked === true){
      z.style.opacity = "1";
      z.style.height = "150";
      }
   else {
    z.style.opacity = "0";
    z.style.height = "0";
    
  }
}