import { ModeToggle } from "@/components/ModeToggle/ModeToggle";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen h-full flex items-center justify-center gap-4">
      <ModeToggle />
      <Button
        type="button"
        onClick={() => navigate("/new-opportunity")}
        variant={"default"}
      >
        Nova vaga
      </Button>
    </div>
  );
};
