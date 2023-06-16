# Javascript
## Square change color
![sq-ch-color](https://github.com/danielurra/javascript-square-change-colors/assets/51704179/2050c8d5-ad05-4a82-9597-aba9a2decb4d)<br>
Learn the basics of `JavaScript` by completing this small project<br>
## HTML
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <script src="./script.js"></script>
    <title>Dani Square Color</title>
</head>

<body>
    <div class="container">
        <h1>Press button to change color</h1>
        <p class="subheading">
          Dani Square Color
          a basic JavaScript project
        </p>
        <div class="square" id="squareID"></div>
        <div class="action">
          <!-- set element onclick event handler -->
          <button onclick="paint('red')">Red</button>
          <button onclick="paint('green')">Green</button>
          <button onclick="paint('yellow')">Yellow</button>
          <button onclick="paint('brown')">Brown</button>
        </div>
    </div>

</body>

</html>
```
<br>
## CSS
```css
.container {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}

.square {
border: 5px solid #000;
width: 200px;
height: 200px;
}

.action {
margin: 10px;
}

button {
    cursor: pointer;
}
```
## JavaScript code
```javascript
/**  Use the DOM method document.getElementById()
 to access the element and its attributes
 onclick event handler, changes square color 
*/
    
function paint(color) {
    const square = document.getElementById('squareID');
    square.style = `background-color:${color}`;
  }
```
```

