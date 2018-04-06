// Make a button appear on the page when it's first loaded. The button cannot already be in your html. When the button is clicked, you should display an Alert box with any (nice) message.
let clickMe = document.createElement("button");
let clickMeText = document.createTextNode('Click Me');
clickMe.appendChild(clickMeText);
document.body.appendChild(clickMe);

clickMe.addEventListener('click', function () {
    alert('Have a nice day!');
});


// Make a button and text box (you can just put them in your HTML). When the button is clicked, display an alert with the message that is typed in the text box.
let button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
    let content = document.getElementsByTagName('input')[0].value;
    alert(content);
});


// Create a div in HTML. Without using CSS :hover, make the div change to a different background color when your mouse hovers over it. The div should return to its original color when the mouse exits the div.
let div = document.getElementsByTagName('div')[0];

div.addEventListener('mouseenter', function () {
    this.style.backgroundColor = "red";
})

div.addEventListener('mouseleave', function () {
    this.style.backgroundColor = "blue";
})

// Put some text in a paragraph. Make it where when you click on the paragraph, the color of the text switches to red. Once you get that working, try to rewrite your code to make it switch to a random color each click (you don't have to show the code for just red once you get random working).
let paragraph = document.getElementsByTagName('p')[0];

paragraph.addEventListener('click', function () {
    this.style.color = getRandomColor();
})

function getRandomColor() {
    let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    return randColor;
}

// Add a button and an empty div. When the button is clicked, add a span that contains your name to the empty div.
let button2 = document.getElementsByTagName('button')[1];
let div2 = document.getElementsByTagName('div')[1];


button2.addEventListener('click', function () {
    let span = document.createElement('span');
    let spanText = document.createTextNode('Robert Tate');
    span.appendChild(spanText);
    div2.appendChild(span); 
})


// Create a button and a ul in your HTML. In JavaScript, create an array containing the names of your friends (at least 10. If you don't have that many, include your imaginary ones). When the button is clicked, add each friend's name as an li to the ul on the page.
let friends = ['Thomas','Ives','Kenny','Chris','Justin','Nate','Shane','Parker','Josiah','Caleb'];
let position = 0;

let button3 = document.getElementsByTagName('button')[2];
let ul = document.getElementsByTagName('ul')[0];

button3.addEventListener('click', function () {
    let liText = document.createTextNode(friends[position]);
    let li = document.createElement('li');
    if(position < friends.length) {
        li.appendChild(liText);
        ul.appendChild(li);
        position++;
    } else {
        alert('No More Friends!');
    }
})
