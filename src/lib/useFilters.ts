import { useState } from "react";

export type ValidDates = 0 | 1 | 3 | 7 | 30;

export const useFilters = () => {
	const [datePosted, setDatePosted] = useState<ValidDates>(30);

	return {
		getters: {
			datePosted,
		},
		setters: {
			setDatePosted,
		},
	};
};
