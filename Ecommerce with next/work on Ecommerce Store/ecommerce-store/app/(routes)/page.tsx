import fetchBillboard from "@/actions/fetchBillboard";
import fetchProducts from "@/actions/fetchProducts";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import { Billboard as BillboardType } from "@/types";

export const revalidate = 0;
const HomePage = async () => {
  const billboard: BillboardType = await fetchBillboard("d654a891-c9aa-4875-b717-4a57109c5c8c");
  const products = await fetchProducts({isFeatured: true});
  console.log(billboard, "BILLBOARD___DATA")
  
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
