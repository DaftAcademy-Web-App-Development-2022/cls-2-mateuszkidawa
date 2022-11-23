export interface PlaylistModel {
    "name": string,
    "owner": string,
    "slug": string,
    "spotifyId": string,
    "color"?: string,
  }
  
  export interface PlaylistModelWithId extends PlaylistModel {
    id: string
  }