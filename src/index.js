/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

var src_default = {
	async fetch(request, env, ctx) {

		function getRandomInt(max) {
			return Math.floor(Math.random() * max);
		};

		const julies_responses = {
			1: "this is julies first response",
			2: "2nd respnse"
			3: "third response is this",
			4: "this is the final response"
		};

		if(request.method == "GET") {
			const n = getRandomInt(4)
			const value = julies_responses[n]

			return new Response(value, {
				headers: {'content-type': 'application/json',
				},
			});
        }
        else {
        	return new Response('Please use a get request', {
        		headers: {
        			'content-type': 'application/json',
               },
           });
        }
    }
};
export{
	src_defaut as deafult 
};


