import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import type { OptionType } from "./NestedCheckbox.stories";

export function NestedCheckbox({
  options,
  onClick = () => {},
}: {
  options: any;
  onClick: () => void;
}) {
  const [checkboxData, setCheckboxData] = useState(options);

  useEffect(() => {
    transformOptions(options);
  }, [options]);

  const transformOptions = (options: OptionType[]) => {
    let id = 1;
    const updatedData = options.map((item) => {
      item.id = id++ + "";
      item.checked = false;
      if (item.children) {
        item.children = transformChildren(item);
      }
      return item;
    });

    function transformChildren(item: OptionType) {
      item.children = item?.children?.map((child) => {
        child.id = item.id + "." + id++;
        child.checked = false;
        if (child.children != undefined) {
          child.children = transformChildren(child);
        }
        return child;
      });
      return item.children;
    }
    setCheckboxData(updatedData);
  };

  const handleCheckboxClick = (item) => {
    const updateCheckedStatus = (item, checked) => {
      item.checked = checked;
      if (item.children) {
        item.children.forEach((child) => updateCheckedStatus(child, checked));
      }
    };

    const updatedData = [...checkboxData];
    const findAndUpdateItem = (items) => {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id === item.id) {
          updateCheckedStatus(items[i], !items[i].checked);
          break;
        }
        if (items[i].children) {
          findAndUpdateItem(items[i].children);
        }
      }
    };

    findAndUpdateItem(updatedData);
    setCheckboxData(updatedData);
    onClick(); // Trigger callback if needed
  };

  return (
    <div className="flex flex-col mb-2">
      {checkboxData.map((item) => (
        <CheckboxComponent
          key={item.id}
          item={item}
          onClickCheckbox={handleCheckboxClick}
        />
      ))}
    </div>
  );
}

function CheckboxComponent({ item, onClickCheckbox }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="space-y-2 mb-2">
      <div className="flex items-center space-x-2">
        {item.children ? (
          <ChevronDown
            onClick={() => setOpen((prev) => !prev)}
            style={{ transform: open ? "rotate(-90deg)" : "rotate(0)" }}
          />
        ) : (
          <div style={{ width: "1.5rem" }} />
        )}
        <Checkbox
          id={item.id}
          checked={item.checked}
          onClick={() => onClickCheckbox(item)}
        />
        <label
          htmlFor={item.id}
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {item.label}
        </label>
      </div>
      {item.children && open && (
        <div className="ml-5">
          {item.children.map((nestedItem) => (
            <CheckboxComponent
              key={nestedItem.id}
              item={nestedItem}
              onClickCheckbox={onClickCheckbox}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default NestedCheckbox;
