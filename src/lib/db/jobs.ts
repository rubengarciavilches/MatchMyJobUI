import { getClient } from "./common";

const supabase = getClient();

export async function getJobs(): Promise<Job[]> {
	const { data, error } = await supabase.from("job").select();

	if (error) {
		console.error("Error fetching jobs:", error);
	}
	console.log(data);

	return data || [];
}

export type ValidSites = "linkedin" | "zip_recruiter" | "indeed" | "glassdoor";
export type JobType = "fulltime" | "parttime" | "internship" | "contract";

export type Job = {
	id: number | undefined; // int8
	site: ValidSites | undefined; // text
	job_url: string | undefined; // text
	job_url_direct: string | undefined; // text
	title: string | undefined; // text
	company: string | undefined; // text
	location: string | undefined; // text
	job_type: JobType | undefined; // text
	date_posted: string | undefined; // date (can be ISO 8601 string)
	interval: string | undefined; // text
	min_amount: string | undefined; // text
	max_amount: string | undefined; // text
	currency: string | undefined; // text
	is_remote: string | undefined; // text
	job_function: string | undefined; // text
	emails: string | undefined; // text
	description: string | undefined; // text
	company_url: string | undefined; // text
	logo_photo_url: string | undefined; // text
	created_at: Date | string; // timestamptz (Date or ISO 8601 string)
	job_id: string | undefined; // text
	matched_words: string | undefined; // text
};
