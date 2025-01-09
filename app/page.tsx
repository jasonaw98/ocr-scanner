import HomePage from "@/components/pages/HomePage";
import { TabsContent } from "@/components/ui/tabs";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col w-full h-full">
        <TabsContent value="home">
          <HomePage />
        </TabsContent>

        <TabsContent value="scan">
          Camera
        </TabsContent>

        <TabsContent value="profile">
          Foirth
        </TabsContent>
      </div>
    </main>
  );
}
