import { JobType, ValidSites } from "./jobs";

export const JOBS_WITH_RATINGS_SELECT = `
      id,
      site,
      job_url,
      job_url_direct,
      title,
      company,
      location,
      job_type,
      job_function,
      emails,
      description,
      logo_photo_url,
      date_posted,
      matched_words,
      job_level,
      created_at,
      rating(
        rating, 
        justification,
        display_data
      )
    `;

export type JobWithRating = {
	id: number | undefined; // int8
	site: ValidSites | undefined; // text
	job_url: string | undefined; // text
	job_url_direct: string | undefined; // text
	title: string | undefined; // text
	company: string | undefined; // text
	location: string | undefined; // text
	job_type: JobType | undefined; // text
	job_function: string | undefined; // text
	emails: string | undefined; // text
	description: string | undefined; // text
	logo_photo_url: string | undefined; // text
	date_posted: string | undefined; // date (can be ISO 8601 string)
	matched_words: string | undefined; // text
	job_level: string | undefined; // text
	created_at: Date | string; // timestamptz (Date or ISO 8601 string)
	rating: {
		rating: number | undefined; // Rating from the Rating type
		justification: string | undefined; // Justification from the Rating type
		display_data: Record<string, string> | undefined; // Display data from the Rating type
	}[];
};
