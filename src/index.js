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

		if(request.method == "GET") {

			let originURL = "https://www.jcardinalli.work/";
			const bot_score = request.cf.botManagement.score;

			if (bot_score < 30) {
				originURL = "https://httpbin.org/get";
				let response = await fetch(origin);
				return response
			};

			let response = await fetch(origin);
			return response

        } else {
            return new Response('Used non-get request', {
              		headers: {'Content-Type': 'text/plain'},
              	});
			}
        }
    };

export {
	src_default as default
};


