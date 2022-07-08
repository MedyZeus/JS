(function() {

	let elSelect = document.querySelector('[data-js-select]'),
		elResult = document.querySelector('[data-js-result]');


	elSelect.addEventListener('change', function() {

		if (elSelect.value != 0) {
			fetch(`txt/${elSelect.value}.txt`)
				.then(function(reponse){
					console.log(reponse);
					console.log(reponse.status);
					console.log(reponse.ok);
					if (reponse.ok) {
						return reponse.text();
					} else {
					throw new Error('Failed!');
					}
				})
				.then(function(data){
					console.log(data);
					elResult.innerHTML = data;
				})
				.catch(function(error){
					console.log(error.msg);
				})
			
			

				
			}
	});

})();