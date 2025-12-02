import { Skills } from "./skills.model";

export interface Proyecto {
    id: string;
    titulo: string;
    subtitle: string;
    descripcion: string;
    cover: string
    web: string,
    tipo:string
    skills: Skills[];
}