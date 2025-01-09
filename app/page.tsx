import HomePage from "@/components/pages/HomePage";
import ProfilePage from "@/components/pages/ProfilePage";
import { TabsContent } from "@/components/ui/tabs";
import UploadImageComponent from "@/components/UploadImageComponent";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full">
      <div className="flex flex-col w-full h-full">
        <TabsContent value="home">
          <HomePage />
        </TabsContent>

        <TabsContent value="scan" className="h-full">
          <UploadImageComponent />
        </TabsContent>

        <TabsContent value="profile">
          <ProfilePage />
        </TabsContent>
      </div>
    </main>
  );
}
