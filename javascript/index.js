let a  =document.getElementById('content')
		function abc()
		{
			if(a.style.display == "block")
			{
				a.style.display = "none"
			}
			else
			{
				a.style.display = "block"
			}
		}


ScrollReveal({ 
    reset: true,
    distance :"100px",
    duration :2000,
    delay :400 
 });
    ScrollReveal().reveal('h1,#card2,.about1,#feature2,.about3', { easing:'ease-in-out', origin:'top'});

    ScrollReveal().reveal('#card3,#feature2_1,.about4', {  origin:'bottom'  });
    ScrollReveal().reveal('#card1,.about1 img,.feature1', {  opacity:0, scale:0.8 ,interval: 600    });
