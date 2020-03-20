import { Chapitre } from './chapitre';

export class Course 
{
    id:number;
    title:string;
    logo:string;
    chapitres:Chapitre[];
    constructor() { }
}