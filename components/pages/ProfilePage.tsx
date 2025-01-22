import { CloudSun } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 pl-2 pt-2">
        <CloudSun size={30} strokeWidth={2.5} className="text-yellow-400" />
        <h1 className="text-xl font-bold">Good Morning</h1>
      </div>

      <div className="flex flex-col gap-4 px-4">
        <Card>
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Welcome to IdRead Verification</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col">
            <span className="text-lg font-semibold">ID: John@123213123</span>
            <span className="text-lg font-semibold">Name: John Doe</span>
            <span className="text-lg font-semibold">Contact: 0123456789</span>
            <span className="text-lg font-semibold">Email: john.doe@example.com</span>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
