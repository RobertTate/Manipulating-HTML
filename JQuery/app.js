
// Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
$('body').append('<button id="click-me">Click Me</button>');

$('#click-me').click(function (event) {
    alert('Have a nice Day!');
});


// Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
$('#button-id').click(function (event) {
    let content = $('#input-field').val();
    alert(content);
});



// Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
$("#div-1").hover(function () {
    $(event.currentTarget).css("background-color", "red");
}, function () {
    $(event.currentTarget).css("background-color", "blue");
});




// Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
$('p').attr('id', 'p-id');

function getRandomColor() {
    let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randColor;
}

$('#p-id').click(function () {
    $('#p-id').css("color", getRandomColor());
})



// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
$('#button-id2').click(function () {
    $('#div-2').append('<span>Robert Tate</span>');
})


//Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
let friends = ['Thomas', 'Ives', 'Kenny', 'Chris', 'Justin', 'Nate', 'Shane', 'Parker', 'Josiah', 'Caleb'];
let position = 0;

$('#button-id3').click(function () {
    if (position < friends.length) {
        $('#ul-id').append(`<li>${friends[position]}</li>`);
        position++;
    } else {
        alert('No More Friends!');
    }

})
