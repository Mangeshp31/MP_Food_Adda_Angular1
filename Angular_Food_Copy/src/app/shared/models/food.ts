export class Foods {
    id!:number;
    price!:number;
    name!:string;
    favorite:boolean = false;
    star:number = 0;
    tags?:string[];
    imgUrl!:string;
    cookTime!:string;
    origins!:string[];

}