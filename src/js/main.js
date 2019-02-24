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






const get5 = () => new Promise((resolve, reject) => resolve(5));


(async () => {

	let resp = await get5();

	console.log(resp);

})();

