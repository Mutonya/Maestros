
import {Text} from "@/components/ui/text";
import {useLocalSearchParams} from "expo-router";
import products from "@/assets/products.json";
import {Card} from "@/components/ui/card";
import {Image} from "@/components/ui/image";
import {Heading} from "@/components/ui/heading";
import {VStack} from "@/components/ui/vstack";
import {Box} from "@/components/ui/box";
import {Button, ButtonText} from "@/components/ui/button";


export default function ProductDetails(){
    const {id} = useLocalSearchParams<{id:string}>()
    const product = products.find((p =>p.id ===Number(id)));

    if (!product){
       return <Text>Details Page</Text>
    }

    return(
        <Card className="p-5 rounded-lg max-w-[560px] m-3 flex-1">
            <Image
                source={{
                    uri: product.image,
                }}
                className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
                alt={'${product.name}  image'}
            />
            <Text className="text-sm font-normal mb-2 text-typography-700">
                {product.name}
            </Text>

            <VStack className="mb-6">
                <Heading size="md" className="mb-4">
                    {product.price}
                </Heading>
                <Text size="sm">
                    {product.description}
                </Text>
            </VStack>
        </Card>
    );
}