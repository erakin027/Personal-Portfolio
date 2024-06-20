function startBlinking(spanId, colors, interval) {
    var span = document.getElementById(spanId);
    var currentColorIndex = 0;

    function changeColor() {
        span.style.color = colors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % colors.length;
    }

    setInterval(changeColor, interval);
}
var colors1 = ['red', 'blue', 'purple', 'green'];
var colors2 = ['purple', 'green', 'red', 'blue'];
var colors3 = ['purple', 'green', 'brown', 'white'];

startBlinking('blinkingSpan1', colors1, 500); 
startBlinking('blinkingSpan2', colors2, 500);
startBlinking('blinkingSpan3', colors3, 500);
startBlinking('blinkingSpan4', colors1, 500);
startBlinking('blinkingSpan5', colors3, 500);





    