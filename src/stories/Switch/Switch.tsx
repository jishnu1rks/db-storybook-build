import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const SwitchComponent = ({
  label,
  disabled = false,
  onClick,
  ...props
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" disabled={disabled} {...props} />
      <Label htmlFor="airplane-mode">{label}</Label>
    </div>
  );
};

export default SwitchComponent;
