export interface IThumbnail {
  alt_text: string; 
  height: number;
  lqip: string;
  width: number;
}

export interface IBook {
  id: number;
  title: string;
  artist_display: string;
  date_display: string;
  main_reference_number: string;
  thumbnail: IThumbnail;
  dimensions: string;
}


export interface ICategory {
  id: string;
  title: string;
}


export interface ISearchValues  {
  title: string;
  categories: ICategory[]
}
