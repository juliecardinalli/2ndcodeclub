// src/index.js
var src_default = {
  async fetch(request, env, ctx) {
    if (request.method == 'POST') {
          const responseData = { message; 'Recieved a POST request'};
	  return new Response(JSON.stringify(responseData), {
               headers: {'content-type': 'application/json'},
          });
    }
};



/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `npm run dev` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `npm run deploy` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */


