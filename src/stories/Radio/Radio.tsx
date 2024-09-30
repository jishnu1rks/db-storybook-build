import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Radio = ({
  options,
  disabled = false,
  defaultValue,
  ...props
}: {
  options: string[];
  disabled?: boolean;
  defaultValue?: string;
}) => {
  return (
    <RadioGroup defaultValue="option-one" disabled={disabled} {...props}>
      {options.map((option) => (
        <div className="flex items-center space-x-2" key={option}>
          <RadioGroupItem value={option} id={option} />
          <Label htmlFor={option}>{option}</Label>
        </div>
      ))}
    </RadioGroup>
  );
};

export default Radio;
