const isLemon = value => {
	if (typeof value !== "string") {
		return false;
	}

	if (value.toLowerCase() === "lemon") {
		return true;
	}

	if (value === "🍋") {
		return true;
	}

	return false;
};

export default isLemon;
