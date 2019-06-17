const assert = require("assert");
const isLemon = require("..");

const test = () => {
	assert.strictEqual(isLemon("lemon"), true);
	assert.strictEqual(isLemon("LEMON"), true);
	assert.strictEqual(isLemon("LeMoN"), true);
	assert.strictEqual(isLemon("🍋"), true);

	assert.strictEqual(isLemon(""), false);
	assert.strictEqual(isLemon(0), false);
	assert.strictEqual(isLemon(null), false);
	assert.strictEqual(isLemon(NaN), false);
	assert.strictEqual(isLemon(() => {}), false);
	assert.strictEqual(isLemon(["lemon"]), false);
	assert.strictEqual(isLemon({ lemon: "lemon" }), false);
	assert.strictEqual(isLemon(1337), false);
	assert.strictEqual(isLemon("foo"), false);
	assert.strictEqual(isLemon("🍌"), false);
	assert.strictEqual(isLemon("🍏"), false);
	assert.strictEqual(isLemon("🍎"), false);
	assert.strictEqual(isLemon("🍊"), false);
	assert.strictEqual(isLemon("🍍"), false);

	console.log(`\u001B[32m✓\u001B[39m isLemon`);
}

test();
