/**  Use the DOM method document.getElementById()
 to access the element and its attributes
 onclick event handler, changes square color 
*/
    
function paint(color) {
    const square = document.getElementById('squareID');
    square.style = `background-color:${color}`;
  }