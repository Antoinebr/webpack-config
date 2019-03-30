import css from '@css/app.scss'


import {
	sayHiLaterOn
} from './myModule.js';



const $codes = [...document.querySelectorAll('code')];

if ($codes) {

	// we dynamically import the module
	(async () => {

		let [hljs,scss,xml,css] = await Promise.all([
			import('highlight.js/lib/highlight'),
			import('highlight.js/lib/languages/scss'),
			import('highlight.js/lib/languages/xml'),
			import('highlight.js/lib/languages/css')
		]).catch(console.log)
	

		hljs = hljs.default;
		scss = scss.default;
		xml = xml.default;
		css = css.default;


		hljs.registerLanguage('scss', scss);
		hljs.registerLanguage('xml', xml);
		hljs.registerLanguage('css', css);
		hljs.initHighlightingOnLoad();

	})();

}


document.querySelector('form button').addEventListener('click', function(e){

	e.preventDefault();

	console.log("click");
});



(async () => {

	let resp = await sayHiLaterOn(4000);

	console.log(resp);

})();

