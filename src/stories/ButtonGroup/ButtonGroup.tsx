import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ToggleGroupProps = {
  values: { value: string; label: string }[];
  type: "single" | "multiple";
  variant?: "outline";
  size?: "lg";
  disabled?: boolean;
  onClick?: () => void;
};

const ToggleGroupDemo = ({
  values,
  type,
  variant,
  size,
  disabled = false,
  onClick,
}: ToggleGroupProps) => {
  return (
    <ToggleGroup
      type={type}
      size={size}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
    >
      {values.map((value) => (
        <ToggleGroupItem value={value.value} aria-label={value.label}>
          {value.label}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};

export default ToggleGroupDemo;
