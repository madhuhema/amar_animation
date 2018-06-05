var IntervalId;
var currentXPos = 0;
var currentYPos = 0;
var temp;
var IntervalId;
var count = 1;
var speed = 8;
var startDate = new Date().getTime();
var seconds = 0;
var timer;
var rightIndex = 446;
var leftIndex = 0;
var topIndex = 0;
var bottomIndex = 396; 

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
    
    function getPlayTime()
    {
        seconds++;
        console.log(seconds);
    }

    if(eventValue == spaceASCII) {
        if(count%2 == 1)
        {
            moveRight();
            timer = setInterval(getPlayTime,1000);
        }
        else
        {
            clearInterval(timer);
            clearInterval(IntervalId);
        }
        count++;
        
    }
    else if(eventValue == downASCII) {
        var p = document.getElementById('pixel');
        if(currentXPos)
            clearInterval(IntervalId);
        document.getElementById("img").src="down.jpg";

        if(seconds < 10)
            IntervalId = setInterval(TopBottom, speed);
        else if(seconds >=10 && seconds <20)
            IntervalId = setInterval(TopBottom, speed-3);
        else if(seconds >=20 && seconds <30)
            IntervalId = setInterval(TopBottom, speed-6);
        else
            IntervalId = setInterval(TopBottom, speed-8);
        function TopBottom() {
            if(currentYPos == bottomIndex)
            {
                clearInterval(IntervalId);
                alert('Game Over '+seconds);
                p.style.left = 0 + 'px';
                p.style.top = 0 + 'px';
                temp = p.style.left;
                currentXPos = parseInt(temp.substring(0,temp.length-2));
                document.getElementById("img").src="download.jpg";
                clearInterval(timer);
                document.location.reload(true);
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
        if(seconds < 10)
            IntervalId = setInterval(RightLeft, speed);
        else if(seconds >=10 && seconds <20)
            IntervalId = setInterval(RightLeft, speed-3);
        else if(seconds >=20 && seconds <30)
            IntervalId = setInterval(RightLeft, speed-6);
        else
            IntervalId = setInterval(RightLeft, speed-8);
        function RightLeft() {
            if(currentXPos == leftIndex) {
                clearInterval(IntervalId);
                alert('Game Over '+seconds);
                p.style.left = 0 + 'px';
                p.style.top = 0 + 'px';
                temp = p.style.left;
                currentXPos = parseInt(temp.substring(0,temp.length-2));
                document.getElementById("img").src="download.jpg";
                clearInterval(timer);
                document.location.reload(true);
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

        if(seconds < 10)
            IntervalId = setInterval(BottomTop, speed);
        else if(seconds >=10 && seconds <20)
            IntervalId = setInterval(BottomTop, speed-3);
        else if(seconds >=20 && seconds <30)
            IntervalId = setInterval(BottomTop, speed-6);
        else
            IntervalId = setInterval(BottomTop, speed-8);
        function BottomTop() {
            if(currentYPos == 0) {
                clearInterval(IntervalId);
                alert('Game Over '+seconds);
                p.style.left = 0 + 'px';
                p.style.top = 0 + 'px';
                temp = p.style.left;
                currentXPos = parseInt(temp.substring(0,temp.length-2));
                document.getElementById("img").src="download.jpg";
                clearInterval(timer);
                document.location.reload(true);
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
    if(seconds < 10)
        IntervalId = setInterval(LeftRight, speed);
    else if(seconds >=10 && seconds <20)
        IntervalId = setInterval(LeftRight, speed-3);
    else if(seconds >=20 && seconds <30)
        IntervalId = setInterval(LeftRight, speed-6);
    else
        IntervalId = setInterval(LeftRight, speed-8);
    function LeftRight() {
        if(currentXPos == rightIndex)
        {
            clearInterval(IntervalId);
            alert('Game Over '+seconds);
            p.style.left = 0 + 'px';
            p.style.top = 0 + 'px';
            temp = p.style.left;
            currentXPos = parseInt(temp.substring(0,temp.length-2));
            document.getElementById("img").src="download.jpg";
            clearInterval(timer);
            document.location.reload(true);
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

