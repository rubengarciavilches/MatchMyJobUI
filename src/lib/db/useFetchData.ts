import { useEffect, useState } from "react";
import { getClient } from "./common";

const supabase = getClient();

export type ValidTableNames = "rating" | "job";

export function useFetchData<T>(
	tableName: ValidTableNames,
	selectContent: string = ""
) {
	const [data, setData] = useState<T[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	async function fetchData() {
		setIsLoading(true);
		try {
			const { data: fetchedData, error } = await supabase
				.from(tableName)
				.select(selectContent as "*");
			if (error) {
				throw error;
			}
			setData(fetchedData);
		} catch (err) {
			setIsDisabled(true);
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, [tableName]);

	return { data, isLoading, isDisabled };
}
