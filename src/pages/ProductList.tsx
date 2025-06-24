import {useState, useEffect} from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import type {ProductType} from "@/api/products.ts";
import {getProducts} from "@/api/products.ts";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import {Pencil, Trash} from "lucide-react";
import {deleteProduct} from "../api/products.ts";
import {toast} from "sonner";

const ProductList = () => {

    const [products, setProducts] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true); // true--> φορτώνει η λίστα(σημαδακι Loading)
    const [deleting, setDeleting] = useState<number | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        getProducts()
            .then((data) => setProducts(data))
            .finally(() => setLoading(false));
    }, [])

    const handleDelete = async (id: number) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            setDeleting(id)
        }
        try {
            await deleteProduct(id);
            setProducts((prev) => prev.filter((p) => p.id !== id));
            console.log("Product deleted successfully.");
            toast.success("Product deleted successfully.");
        }catch(err) {
            toast.error("Error deleting product " + id);
            console.error(err);
        } finally {
            setDeleting(null);
        }
    }

    if (loading) return <div className="text-center p-8">Loading...</div>;

    return (
        <>

                <div className="p-8">
                    <Table>
                        <TableCaption>A list of your recent invoices.</TableCaption>
                        <TableHeader className="bg-gray-50">
                            <TableRow>
                                <TableHead>#</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((product) => (
                                <TableRow key={product.id}>
                                    <TableCell>{product.id}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell className="text-right">
                                        <Button
                                            variant="outline"
                                            onClick={ () => navigate(`/products/${product.id}`)}
                                        >
                                            <Pencil/>
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            onClick={() => handleDelete(product.id)}
                                            disabled={deleting === product.id}>

                                            <Trash/>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

        </>
    )
}

export default ProductList


