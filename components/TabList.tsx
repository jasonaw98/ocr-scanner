import {
  Fullscreen,
  House,
  UserRoundIcon,
} from "lucide-react";
import { TabsTrigger, TabsList } from "./ui/tabs";

const TabListNav = () => {
  return (
    <div className="w-full">
      <TabsList className="flex justify-evenly h-fit bg-gradient-to-b from-zinc-700 to-zinc-900 pb-5 pt-2 rounded-none">
        <TabsTrigger value="home">
          <div className="flex flex-col items-center">
            <House />
            <p>Home</p>
          </div>
        </TabsTrigger>
        <TabsTrigger value="scan">
          <div className="flex flex-col items-center">
            <Fullscreen />
            <p>Scan</p>
          </div>
        </TabsTrigger>

        <TabsTrigger value="profile">
          <div className="flex flex-col items-center">
            <UserRoundIcon />
            <p>Profile</p>
          </div>
        </TabsTrigger>
      </TabsList>
    </div>
  );
};

export default TabListNav;
