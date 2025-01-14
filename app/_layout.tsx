import {Stack, Tabs} from "expo-router";

import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";

export default function RootLayout (){
//you confingure global providers here
    return <GluestackUIProvider mode="light">
        <Stack screenOptions={{ headerShown: false }} />
    </GluestackUIProvider>;

}