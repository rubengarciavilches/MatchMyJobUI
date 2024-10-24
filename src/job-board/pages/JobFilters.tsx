import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useFilters, ValidDates } from "@/lib/useFilters";

interface JobFiltersProps {
	filters: ReturnType<typeof useFilters>;
}

function JobFilters({ filters }: JobFiltersProps) {
	const handleDateChange = (value: string) => {
		const numValue: ValidDates = [0, 1, 3, 7, 30].includes(Number(value))
			? (Number(value) as ValidDates)
			: 0;
		filters.setters.setDatePosted(numValue);
	};

	return (
		<header className="relative z-10 h-12 shadow-[0_4px_4px_rgba(0,0,0,0.25)] border-gray-300">
			<Select onValueChange={handleDateChange}>
				<SelectTrigger className="w-[180px]">
					<SelectValue placeholder="Date posted" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value="0">Any time</SelectItem>
						<SelectItem value="30">Past Month</SelectItem>
						<SelectItem value="7">Past Week</SelectItem>
						<SelectItem value="3">Past 3 Days</SelectItem>
						<SelectItem value="1">Past 24h</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</header>
	);
}

export default JobFilters;
