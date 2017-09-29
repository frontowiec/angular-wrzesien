export interface Spotify {
}

export interface Entity {
  id: string;
  name: string;
}

export interface Album extends Entity {
  artists: Artist[];
  images: AlbumImage[];
}

export interface AlbumImage {
  url: string;
  height: number;
  width: number;
}

export interface Artist extends Entity {
}
