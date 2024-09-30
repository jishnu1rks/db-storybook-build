import { Checkbox } from "@/components/ui/checkbox";

export function CheckboxDemo({
  label,
  disabled = false,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="checkbox" onClick={onClick} disabled={disabled} />
      <label
        htmlFor="checkbox"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </label>
    </div>
  );
}
