import { getClient } from "./common";

const supabase = getClient();

export async function getRatings(): Promise<Rating[]> {
	//Public for testing purposes, will require user auth in the future.
	const { data, error } = await supabase.from("rating").select();

	if (error) {
		console.error("Error fetching ratings:", error);
	}

	return data || [];
}

export type Rating = {
	id: number | undefined; // int8
	user_id: string | undefined; // uuid
	job_id: number | undefined; // int8
	resume_id: number | undefined; // int8
	model: string | undefined; // text
	token_limit: number | undefined; // int4
	system_prompt: Record<string, string> | undefined; // json (empty object)
	user_prompt: Record<string, string> | undefined; // json (empty object)
	temperature: number | undefined; // float4
	rating: number | undefined; // int2
	justification: string | undefined; // text
	display_data: Record<string, string> | undefined; // json (empty object)
	created_at: Date | string; // timestamptz (Date or ISO 8601 string)
};
