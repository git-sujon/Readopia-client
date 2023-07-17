export interface IBook {
  _id: string;
  title: string;
  bookDetails:string
  author: string;
  genre: string;
  publicationDate: Date;
  imgUrl:string;
  rating:number;
  reviews:string[];
}


export interface ICreateBook {
  title: string;
  author: string;
  bookDetails:string
  genre: string;
  publicationDate: Date;
  imgUrl:string;
  rating?:number;
  reviews?:string[];
}

 