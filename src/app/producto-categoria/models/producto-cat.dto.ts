export interface Productos{ 
    id: number; 

    nombreProducto: string; 

    descripcionProducto: string

    idCategoria:number

    stockProducto:number

    imgReferencia: string

    nombreCategoria: string




}

export interface Categorias{ 
    id: number; 

    nombreCategoria: string; 

    descripcionCategoria: string;
}