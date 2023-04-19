/*function to run when the page loads*/
function start () {
    /*button variable*/
    var button = document.getElementById('mytchange');
    /*command when the button is clicked run the fuction below*/
    button.onclick = change;
}

/*function that changes the style of the variable through the button*/
function change(){
    /*manipulates the styles*/
    document.getElementById('mychange').style.borderBlockColor='orange';
    document.getElementById('mychange').style.color='brown';
    document.getElementById('mychange').style.borderBlockStyle='dotted';
}