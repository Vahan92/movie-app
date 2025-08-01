export interface Movie {
    Id: string;
    Title: string;
    CoverImage: string;
    TitleImage: string;
    Date: string;
    ReleaseYear: string;
    MpaRating: string;
    Category: string;
    Duration: string;
    VideoUrl?: string;
    Description: string;
}
export interface MovieData {
    Featured: Movie;
    TendingNow: Movie[];
}
export interface MenuItem {
    id: string;
    label: string;
    icon: string;
    active?: boolean;
}
