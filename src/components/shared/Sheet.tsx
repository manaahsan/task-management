// ui
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

// components
import { Nav } from "@/components/shared/Nav";
import { Logout } from "@/components/shared/Logout";

// useContext
import { useAppContext } from "@/context/AppContext";

export const CustomSheet = () => {
  const { isSheetOpen, setIsSheetOpen } = useAppContext();
  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <div className="space-y-4">
            <Nav />
            <Logout />
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
