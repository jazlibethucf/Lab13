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
    document.getElementById('mychange').style.borderBlockColor='purple';
    document.getElementById('mychange').style.color='white';
    document.getElementById('mychange').style.borderBlockStyle='dotted';
    document.getElementById('mychange').style.fontSize='25px';
    document.getElementById('mychange').style.backgroundColor="orange";
    document.getElementById('mychange').style.borderBlockStartWidth='8px'
    document.getElementById('mychange').style.borderBlockEndWidth='8px'
    document.getElementById('mychange').style.fontFamily='Arial';
}

/*when the window loads, the function loads and start function loads*/
window.onload = start;