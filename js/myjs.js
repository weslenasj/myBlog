	<!-- MENU -->
			function menuTop() {
			    var x = document.getElementById("menutop");
			    if (x.className === "menutop") {
			        x.className += " responsive";
			    } else {
			        x.className = "menutop";
			    }
			}

	<!-- CASAS -->
	function openCasas(evt, casasNome) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		tablinks = document.getElementsByClassName("tablinks");
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		document.getElementById(casasNome).style.display = "block";
		evt.currentTarget.className += " active";
	}		