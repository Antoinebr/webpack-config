import css from '@css/app.scss'


import {
	lol
} from './lol.js';



const $codes = [...document.querySelectorAll('code')];

if($codes){


	// we dynamically import the module
	(async () => {

		// let lodashEscape = await import('lodash.escape');

		// lodashEscape = lodashEscape.default;

		// for( const code of $codes ){

		// 	code.innerText = lodashEscape(code.innerHTML);
		// }


		let hljs = await import('highlight.js');

		hljs = hljs.default;

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