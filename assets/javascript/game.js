// GLOABAL VARIABLES
// ------------------------------------------------------------------------------------
// Card Variables
//  var cards = {
//    one:
//    {
//      name:"One",
//      value:1,
//    },
//    two:
//    {
//      name: "Two",
//      value:2
//    },
//    four:
//    {
//      name: "four",
//      value:4
//    },
//    eight:
//    {
//      name: "eight",
//      value:8
//    },
//    sixteen:
//    {
//      name: "sixteen",
//      value:16
//    }
//    thirty2:
//    {
//      name: "thirty2",
//      value:32
//    },
//  };
//var flip = $("#card").data("flip-model");

// FUNCTIONS
// ------------------------------------------------------------------------------------
// To Do:
//keep card count function
//click card to conversion function
//post binary number
//post ternery number
//show number under each card when clicked
//show addition process under each card when clicked


// MAIN PROCESSES
// ---------------------------------------------------------------------------------------------
// Starts game the first time
$('.flip').click(function() {
    $(this).find('.card').toggleClass('flipped');

});
