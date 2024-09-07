import { useEffect, useState } from "react";
import { Job } from "@/lib/db/jobs.ts";
import { createClient } from "@supabase/supabase-js";

const projectURL = import.meta.env.VITE_SUPABASE_URL;
const publicSupabaseKey = import.meta.env.VITE_SUPABASE_PUBLIC_KEY;
const supabase = createClient(projectURL, publicSupabaseKey);

export function useGetJobs() {
	const [jobs, setJobs] = useState<Job[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [isDisabled, setIsDisabled] = useState<boolean>(false);

	async function fetchJobs() {
		setIsLoading(true);
		try {
			const { data, error } = await supabase.from("job").select();
			if (error) {
				throw error;
			}
			setJobs(data);
		} catch (err) {
			setIsDisabled(true);
			console.log(err);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchJobs();
	}, []);

	return { jobs, isLoading, isDisabled };
}
