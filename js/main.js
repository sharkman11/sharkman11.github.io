let theme = localStorage.getItem('theme');

if(theme == null) {
	setTheme('light');
} else {
	setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme_dot');

for (let i = 0; themeDots.length > i; i++){
	themeDots[i].addEventListener('click', function() {
		let mode = this.dataset.mode;
		console.log('Option clicked:', mode);
		setTheme(mode);
	});
}

function setTheme(mode) {
	if(mode == 'light') {
	    document.getElementById('theme_style').href = './css/style.css';
	}

	if(mode == 'blue') {
		document.getElementById('theme_style').href = './css/blue.css';
	}

	localStorage.setItem('theme', mode);
}


let buttonSedona = document.getElementById(`sedona`);
let popupSedona = document.getElementById(`sedona_popup`);
let closepopupSedona = document.getElementById(`closepopupsedona`);

buttonSedona.onclick = () => {
	popupSedona.style.display = "flex"
}

closepopupSedona.onclick = () => {
	popupSedona.style.display = "none"
}

let buttonKeks = document.getElementById(`kekstagram`);
let popupKeks = document.getElementById(`kekstagram_popup`);
let closepopupKeks = document.getElementById(`closepopupkeks`);

buttonKeks.onclick = () => {
	popupKeks.style.display = "flex"
}

closepopupKeks.onclick = () => {
	popupKeks.style.display = "none"
}