<!-- include script always  -->
<script src="https://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>

<!-- ready function listens for DOM content loaded -->
$(document).ready(function () {
    $('.demo').click(function () {
        $(this).hide(200);
    });
});

<!-- DOM SELECTORS INCLUDE -->
$('*')                      // all elements
$('p.demo')                 // <p> elements with class='intro'
$('p:first')                // the first <p> element
$('p span')                 // span, descendant of p
$('p > span')               // span, direct child of p
$('p + span')               // span immediately proceeded by a p
$('p ~ span')               // strong element proceeded by p
$('ul li:first')            // the first <li> element of the first <ul>
$('ul li:first-child')      // the first <li> element of every <ul>
$('ul li:nth-child(3)')     // third <li> child
$('[href]')                 // any element with an href attribute
$('a[target="_blank"]')     // <a> elements with a target '_blank' attribute
$('a[target!="_blank"]')    // <a> elements with a target attribute value other than '_blank'
$(':input')                 // all form elements
$(':button')                // <button> and <input> elements of type='button'
$('tr:even')                // even <tr> elements
$('tr:odd')                 // odd <tr> elements
$('span:parent')            // element which has child element
$('span:contains("demo")')  // element conaining the specified text


<!-- jquery content -->
$('.demo').text();                      // returns text content
$('.demo').html();                      // returns content, including HTML markup
$('.demo').val();                       // returns field value
$('.demo').html('Hey <em>peeps</em>!'); // sets HTML content

<!-- NODE attributes -->
$('#link').attr('href');                       // get an attribute
$('#link').attr('href','https://covalence.io');// set attribute
$('#link').attr({
    href: 'https://covalence.io',              // setting multiple attributes
    title: 'HTML Editor'
});
$('#link').attr('href', function (i, origValue) {
    return origValue + '/help';                // callback function gets and changes the attribute
});

<!-- ADDING -->
$('.demo').prepend('Yo!');          // adds content at the beginning in the selected elements
$('.demo').append('<em>Hey!</em>'); // adds content at the end in the selected elements
$('.demo').before('Cheers');        // adds content before the selected elements
$('.demo').after('<em>Later</em>'); // adds content after the selected elements

<!-- REMOVE -->
$('.demo').remove();            // removes the selected element
$('.demo').empty();             // removes children
$('div').remove('.cl1, .cl2');  // removes divs with the listed classes

<!-- ADD/REMOVE CLASSES -->
$('.demo').addClass('big');     // add class
$('.demo').addClass('big red'); // add classes
$('h1, p').removeClass('red');  // remove class
$('.demo').toggleClass('big');  // toggle between adding and removing

<!-- CSS -->
$('.demo').css('background-color');                     // returns CSS value
$('.demo').css('color', 'blue');                        // sets CSS rule
$('.demo').css({ color: 'blue', 'font-size': '20px' }); // sets multiple CSS property

<!-- ELEMENT DIMENSIONS -->
$('.demo').width();       // width of first element in set
$('.demo').height();      // height of first element in set
$('.demo').innerWidth();  // computed width of first element in set including padding
$('.demo').innerHeight(); // computed height of first element in set including padding
$('.demo').outerWidth();  // computed width of first element in set including padding and border
$('.demo').outerHeight(); // computed height of first element in set including pad

<!-- TRAVERSING -->
$('.demo').parent();                // accessing direct parent
$('span').parent().hide();          // changing parent color
$('.demo').parents();               // all ancestors of the element
$('.demo').parentsUntil('.demo2');  // all ancestors between two - demo is inside demo2
$('.demo').children();              // all direct children
$('.demo').children('.first');      // all direct children having a specified class
$('.demo').find('span');            // all span elements inside .demo
$('.demo').find('*');               // all descendants
$('.demo').siblings('span');        // span siblings of .demo
$('.demo').next();                  // the next sibling
$('p').nextAll();                   // all next siblings
$('.demo').nextUntil('.demo2');     // siblings between two arguments
$('.demo').prev();                  // the previous sibling
$('p').prevAll();                   // all previous siblings
$('.demo').prevUntil('.demo2');     // previous siblings between two arguments

<!-- FILTERING -->
$('span strong').first();   // first strong in first span
$('span strong').last();    // last strong in last span
$('div').eq(9);             // element with a specific index
$('div').filter('.big');    // all div elements with .big class
$('div').not('.big');       // opposite of filter

<!-- EVENTS -->
<!-- ADD EVENT HANDLERS -->
$('.demo').click(function () { // adds click handler to all elements with class demo
    $(this).hide(200);
});

$('#demo').bind('blur', function (e) { // add the blur event to the element with id demo
    //dom event fired
});

<!-- ADD EVENT TRIGGERS -->
$('a#mylink').trigger('click'); // triggers click event on an <a> element with id 

<!-- AJAX -->
// Using the core $.ajax() method
$.ajax({
    // The URL for the request
    url: '/post-example',
    // The data to send (will be converted to a query string)
    data: {
        id: 123
    },
    // Whether this is a POST or GET request
    type: 'POST',
    // The type of data we expect back
    dataType : 'json',
})
// Code to run if the request succeeds (is done);
// The response is passed to the function
.done(function (json) {
    $('<h1>').text( json.title ).appendTo('body');
    $('<div class="content">').html(json.html).appendTo('body');
})
// Code to run if the request fails; the raw request and
// status codes are passed to the function
.fail(function (xhr, status, errorThrown) {
    alert('Sorry, there was a problem!');
    console.log('Error: ' + errorThrown);
    console.log('Status: ' + status);
    console.dir(xhr);
})
// Code to run regardless of success or failure;
.always(function (xhr, status) {
    alert( 'The request is complete!' );
});

<!-- EFFECTS TO USE -->
<!-- HIDE AND SHOW EFFECT -->
$('.demo').hide();      // sets to display: none
$('.demo').show(200);   // shows hidden elemnt with animation (speed)
$('.demo').toggle();    // toggle between show and hide

$('#element').hide('slow', function () {  // hide with callback function
    console.log('Animation complete.');
});

<!-- FADE EFFECT -->
$('.demo').fadeIn();                // fade in a hidden element
$('.demo').fadeOut(300);            // fade out
$('.demo').fadeToggle('slow');      // toggle between fadeIn and hadeOut
$('.demo').fadeTo('slow', 0.25);    // fades to 0.25 opacity

<!-- SLIDE EFFECT -->
('.demo').slideDown();     // slides in hidden element downwards
$('.demo').slideUp('slow'); // slides in hidden element upwards with animation
$('.demo').slideToggle();   // toggle show/hide with sliding motion

<!-- ANIMATION EFFECTS -->
$('div').animate({ //$(selector).animate({ params }, speed, callback);
    opacity: '0.5',
    left: '200px',
    height: '200px'
});

<!-- COMBONATION AND STOP ANIMATIONS -->
$('.demo').stop();
$('.demo').mouseleave(function (event) {     // hover end
    $('.tab').stop().animate({              // stop() method
        opacity : '0.5',
        marginTop: '10px'
    }, 500, function() {                    // animation complete
        $('.demo').removeClass('hovered');  // callback function
    });
});
$('.demo').mouseover(function (event) {      // hover begin
    $('.tab').stop().animate({              // stop() method
        opacity : '1',
        marginTop: '0px'
    }, 300, function () {                    // animation complete
        $('.demo').addClass('hovered');     // callback function
    });
});

<!-- CHAINING EFFECT -->
$('.demo').css('backgroundColor', 'green').slideUp(500).slideDown(500);