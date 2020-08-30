window.addEventListener('scroll', function(){
				var scroll= document.querySelector('.scrollTop');
				scroll.classList.toggle("active", window.scrollY > 300)


				var scrollC= document.querySelector('.scrollTopCuadro');
				scrollC.classList.toggle("active", window.scrollY > 300)
			})


				
				
		


			function scrollToTop(){
				window.scrollTo({
					top:0,
					behavior:'smooth'
				})
			}