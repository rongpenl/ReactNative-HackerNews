const he = require('he');

const removeHTML = input => {
	let output = input;
	output = output.replace(/<\/?[^>]+(>|$)/g, "");
	output = he.decode(output);
	return output;
};

export {
	removeHTML,
}