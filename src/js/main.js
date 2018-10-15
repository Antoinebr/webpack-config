import css from '@css/app.scss'
import yop from '@css/yop.css'


let test = () => {

    console.log('yiiii');
}

test();


function get5(){
	return new Promise( (resolve, reject) => resolve(5) );
}


( async() => {

	let resp = await get5();

	console.log(resp);

})();


document.querySelector('button').addEventListener('click', function(e){

	e.preventDefault();


	import('lodash').then(_ => {

		let element = document.createElement('h3');
		element.classList.add('txt-Center')
		element.innerHTML = _.camelCase("Hello Friends this sentance have been camecased");
		document.body.appendChild(element);

	});

});




