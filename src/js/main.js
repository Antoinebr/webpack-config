import css from '@css/app.scss'


import {
	lol
} from './lol.js';






const $codes = [...document.querySelectorAll('code')];

if ($codes) {


	// we dynamically import the module
	(async () => {


		// import hljs from 'highlight.js/lib/highlight';
		// import javascript from 'highlight.js/lib/languages/javascript';
		// hljs.registerLanguage('javascript', javascript);


		let [hljs,scss] = await Promise.all([
			import('highlight.js/lib/highlight'),
			import('highlight.js/lib/languages/scss')
		]).catch(console.log)
	

		hljs = hljs.default;
		scss = scss.default;

		hljs.registerLanguage('scss', scss);
		hljs.initHighlightingOnLoad();

	})();

}






function get5() {
	return new Promise((resolve, reject) => resolve(5));
}


(async () => {

	let resp = await get5();

	console.log(resp);

})();


document.querySelector('button').addEventListener('click', function (e) {

	e.preventDefault();


	import('lodash/camelCase').then(camelCase => {

		let element = document.createElement('h3');
		element.classList.add('txt-Center')
		element.innerHTML = camelCase.default("Hello Friends this sentance have been camecased");
		document.body.appendChild(element);

	});

});