// p.213

let foo = 1;
{
	// ReferenceError: Cannot access 'foo' before initialization
	console.log(foo);
	let foo = 2;
}