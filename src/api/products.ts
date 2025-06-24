import {z} from "zod";


const API_URL: string = import.meta.env.VITE_API_URL;
const TENANT_ID: string = import.meta.env.VITE_TENANT_ID;


export const  productSchema = z.object({
    id: z.coerce.number().int(),
    name: z.string().min(1,"Required"),
    slug: z.string().min(1,"Required")
        .regex(/^[a-zA-Z0-9-_]+$/, "Slug must use ony Latin letters, numbers, - or _"),
    description: z.string().optional(),
    image: z.string().url("Must be a valid URL").optional(),
    price: z.number().nonnegative("Must greater than 0"),
    is_active: z.boolean(),
    is_favorite: z.boolean(),
    sort: z.coerce.number().int().min(0, "Must greater than 0"),
    category_id: z.coerce.number().int().min(1, "Category is required"),
})

export const productFormSchema = productSchema.omit({ id: true });

export type ProductType = z.infer<typeof productSchema>;


// export type Product = {
//     id: number,
//     name: string,
//     slug: string,
//     description: string,
//     image: string,
//     price: number,
//     is_active: boolean,
//     is_favorite: boolean,
//     sort: number,
//     category_id: number,
// }

export async function getProducts(): Promise<ProductType[]> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`);
    if (!response.ok)  throw new Error(response.statusText);
    console.log(response.body);
    return await response.json();
}

export async function getProductById(id: number): Promise<ProductType> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`);
    if (!response.ok) throw new Error(response.statusText);
    console.log(response.body);
    return await response.json();
}

export async function updateProduct(id: number, data:{
    name: string;
    slug: string;
    description?: string | undefined;
    image?: string | undefined;
    price: number;
    is_active: boolean;
    is_favorite: boolean;
    category_id: number;
    sort: number;
    }): Promise<ProductType> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
    });
    if (!response.ok)  throw new Error(response.statusText);
    console.log(response.body);
    return await response.json();
}

export async function deleteProduct(id: number): Promise<void> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/${id}`, {
        method: 'DELETE',
    });
    if (!response.ok)  throw new Error(response.statusText);
    console.log(response.body);
    return await response.json();
}

export async function createProduct(
    data: Omit<ProductType, "id">
): Promise<ProductType> {
    const response = await fetch(`${API_URL}tenants/${TENANT_ID}/products/`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
    if (!response.ok)  throw new Error(response.statusText);
    return await response.json();
}
