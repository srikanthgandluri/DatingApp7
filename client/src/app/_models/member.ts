import { photo } from "./photo";

export interface member{
    id:number;
    userName:string;
    photoUrl:string;
    age:number;
    knownAs:string;
    created:Date;
    lastActive:string;
    gender:string;
    introduction:string;
    lookingFor:string;
    intrests:string;
    city:string;
    country:string;
    photos:photo[]
}