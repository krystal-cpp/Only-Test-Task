export interface HistoricalEvent {
    year: number;
    description: string;
}

export interface TimePeriod {
    id: number;
    label: string;
    startYear: number;
    endYear: number;
    events: HistoricalEvent[];
}