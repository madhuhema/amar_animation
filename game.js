var IntervalId;
var currentXPos = 0;
var currentYPos = 0;
var temp;
var IntervalId,seconds;
var count = 1;
var speed = 8;
var startDate = new Date().getTime();

var beforemm = new Date().getMinutes();
var beforess = new Date().getSeconds();
var score = 0;

function startBySpace(event) {
    var eventValue = event.which;
    var spaceASCII = 32;
    var leftASCII = 37;
    var upASCII = 38;
    var rightASCII = 39;
    var downASCII = 40;
    var Xaxis = document.getElementById('pixel');
    var Yaxis = document.getElementById('pixel');
    var rightIndex = 442;
    var leftIndex = 440;
    var topIndex = 0;
    var bottomIndex = 0; 

    if(eventValue == spaceASCII) {
        if(count%2 == 1)
            moveRight();
        else
        {
            clearInterval(IntervalId);
            var stopDate = new Date().getTime();
            seconds = parseInt((stopDate-startDate))/1000;
            console.log('startDate '+startDate);
            console.log('stopDate '+stopDate);
        }
        count++;
        console.log(count);
    }
    else if(eventValue == downASCII) {
        if(currentXPos)
        clearInterval(IntervalId);
        document.getElementById("img").src="down.jpg";
        IntervalId = setInterval(TopBottom, speed-count);
        function TopBottom() {
            if(currentYPos == 440)
            {
                clearInterval(IntervalId);
                console.log(seconds);
                alert('Game Over '+seconds);
            }
            else
            {
                currentYPos++;
                Yaxis.style.top = currentYPos + 'px';
                temp = Yaxis.style.top;
                currentYPos = parseInt(temp.substring(0,temp.length-2));
            }
        }
    }
    else if(eventValue == leftASCII)
    {
        var p = document.getElementById('pixel');
        clearInterval(IntervalId);
        document.getElementById("img").src="left.jpg";
        IntervalId = setInterval(RightLeft, speed-count);
        function RightLeft() {
            if(currentXPos == 0) {
                clearInterval(IntervalId);
                alert('Game Over '+seconds);
            }
            else {
                currentXPos--;
                p.style.left = currentXPos + 'px';
                temp = p.style.left;
                currentXPos = parseInt(temp.substring(0,temp.length-2));
            }
        }
    }
    else if(eventValue == rightASCII)
        moveRight();
    else if(eventValue == upASCII)
    {
        var p = document.getElementById('pixel');
        clearInterval(IntervalId);
        document.getElementById("img").src="top.jpg";
        IntervalId = setInterval(BottomTop, speed-count);
        function BottomTop() {
            if(currentYPos == 0) {
                clearInterval(IntervalId);
                alert('Game Over '+seconds);
            }
            else {
                currentYPos--;
                p.style.top = currentYPos + 'px';
                temp = p.style.top;
                currentYPos = parseInt(temp.substring(0,temp.length-2));
            }
        }
    }
}

function moveRight() {
    var p = document.getElementById('pixel');
    clearInterval(IntervalId);
    document.getElementById("img").src="download.jpg";
    IntervalId = setInterval(LeftRight, speed-count);
    function LeftRight() {
        if(currentXPos == 442)
        {
            clearInterval(IntervalId);
            alert('Game Over '+seconds);
        }
        else
        {
            currentXPos++;
            p.style.left = currentXPos + 'px';
            temp = p.style.left;
            currentXPos = parseInt(temp.substring(0,temp.length-2));
        }
    }
}

