import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const TextArea = () => {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here." />
      <p className="text-sm text-muted-foreground">
        Your message will be copied to the support team.
      </p>
    </div>
  );
};

export default TextArea;
