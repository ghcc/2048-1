var sec2b = 0;
var secs = 0;
var min = 0;
var minn = 0;
var timerID = null;
var timerRunning = false;
var ttclock = "00 : 00 . 000";

function InitializeTimer(form) {
	var now = new Date();
	sec2b = parseFloat(now.getTime());
	secs = 0;
	min = 0;
	minn = 0;
	StopTheClock();
	StartTheTimer();
}

function StopTheClock() {
	if (timerRunning)
		clearTimeout(timerID)
	timerRunning = false
}

function StartTheTimer() {
	var dmSecs2 = "";
	var now2 = new Date();
	var sec2a = parseFloat(now2.getTime());
	var difference = sec2a - sec2b;
	var dMins = Math.floor(difference / (1000 * 60));
	var dSecs = Math.floor((difference - (dMins * 1000 * 60)) / 1000);
	var dmSecs = difference - ((dMins * 60000) + (dSecs * 1000));

	dmSecs = Math.floor(dmSecs / 10);
	dmSecs2 = pad(dmSecs);

	if (dSecs < 10) {
		dSecs = "0" + dSecs;
	}
	if (dMins < 10) {
		dMins = "0" + dMins;
	}

	ttclock = dMins + " : " + dSecs + " . " + dmSecs2 + "";

	document.all.timer.innerText = ttclock;

	timerRunning = true;
	timerID = self.setTimeout("StartTheTimer()", 10);
	
}

function countdown_clock(ttclock) {
	html_code = '<div id="countdown"></div>';
	document.write(html_code);
	countdown();
}

function countdown(ttclock) {

	document.all.countdown.innerHTML = ttclock;
	setTimeout('countdown(ttclock);', 10);

}

function pad(n) {

	if (n < 10) {
		return "0" + n;
	} else {
		return n;
	}
}
