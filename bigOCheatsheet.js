
function addOption(dropdown, selection) {
	var op = new Option();
	op.value = selection;
	op.text = selection;
	dropdown.options.add(op); 
}

function isCorrect(correct) {
let checkWindow = document.createElement("div");
checkWindow.style.width = "300";
checkWindow.style.height = "100";
checkWindow.style.position = "fixed";
checkWindow.style.top = "0px";
checkWindow.style.left = "50%";
checkWindow.style.padding = "20px 40px";
checkWindow.style.borderRadius = "5px";
if(correct) {
	checkWindow.innerText = 'Correct';
	checkWindow.style.backgroundColor = "lightgreen";
} else {
	checkWindow.innerText = 'Incorrect';
	checkWindow.style.backgroundColor = "pink";
}

checkWindow.style.zIndex = "10000";
document.body.appendChild(checkWindow);
setTimeout(function(){ document.body.removeChild(checkWindow); }, 1000);
}


Array.from(document.getElementsByTagName('code')).forEach(code => {
	let answer = code.innerText;
	let header = '';
	let color = code.className;
	code.className = "";
	code.innerText = '';
		if(answer !== "N/A") {
	 let text1 = document.createElement("span");
	 header = answer.charAt(0) + '(';
	 text1.innerText = header;
	 code.appendChild(text1);
	}
	let dropdown = document.createElement("select");
	addOption(dropdown, '');
	addOption(dropdown, '1');
	addOption(dropdown, 'n');
	addOption(dropdown, 'log(n)');
	addOption(dropdown, 'N/A');
	addOption(dropdown, 'n^2');
	addOption(dropdown, 'n+k');
	dropdown.onchange = function(){
    let selectedString = dropdown.options[dropdown.selectedIndex].value;
    let selectedAnswer = selectedString === "N/A" ? "N/A" : header + selectedString + ")"
    if(selectedAnswer === answer){
    	isCorrect(true);
    	code.className= color;
    } else {
    	isCorrect(false);
    }
}
	code.appendChild(dropdown);
	if(answer !== "N/A") {
	 let text1 = document.createElement("span");
	 text1.innerText = ')'
	 code.appendChild(text1);
	}

})

