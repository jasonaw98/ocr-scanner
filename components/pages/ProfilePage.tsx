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

      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold pl-4">Queue</h1>
        <div className="px-4">
          <Card>
            <CardHeader>
              <CardTitle>Today</CardTitle>
              <CardDescription>10 patients</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-3">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="grid grid-cols-2">
                    <span className="flex justify-center font-semibold">
                      Ticket {index + 1}
                    </span>
                    {index % 2 === 0 ? (
                      <span className="text-emerald-600 font-semibold text-sm flex justify-center bg-green-300 rounded-md items-center">
                        Approved
                      </span>
                    ) : (
                      <span className="text-yellow-600 font-semibold text-sm flex justify-center bg-amber-300 rounded-md items-center">
                        Pending
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
