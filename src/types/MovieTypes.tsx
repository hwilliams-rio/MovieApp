export type Movie = {
  id: number;
  title: string;
  description: string;
};

export type Movies = {
  movies: Array<Movie>;
};
