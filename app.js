// feature detection
setTimeout(() => {
	if (navigator.clipboard) {
		navigator.clipboard
			.writeText('copied text')
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	} else {
		alert('Feature not available, please manually copy text');
	}
});
