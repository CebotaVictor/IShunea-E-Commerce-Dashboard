import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";

export default function Home() {
  return (
    <ClerkProvider>
    <div>
      <Button>
        click
      </Button>
    </div>
    </ClerkProvider>
  );
}
