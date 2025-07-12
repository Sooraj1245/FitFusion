import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

export default function DropDown(props) {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["calories"]));

  const selectedValue = React.useMemo(() => {
    const key = Array.from(selectedKeys)[0];
    return (
      props.options.find((option) => option.key === key)?.label ||
      "Select option"
    );
  }, [selectedKeys]);

  const selectedIcon = React.useMemo(() => {
    const key = Array.from(selectedKeys)[0];
    return props.options.find((option) => option.key === key)?.icon || "📝";
  }, [selectedKeys]);

  return (
    <Dropdown
      backdrop="opaque"
      className="font-Inter"
      classNames={{
        content: "bg-card/95 backdrop-blur-md shadow-lg rounded-lg p-1 border border-border",
      }}
    >
      <DropdownTrigger>
        <Button
          className="capitalize bg-card/80 hover:bg-background text-text text-[15px] font-semibold font-Inter border border-border shadow-sm transition-all duration-200 hover:shadow-md min-w-[140px] focus:outline-none"
          variant="faded"
          size={props.size}
          startContent={<span className="text-[16px] text-accent">{selectedIcon}</span>}
          endContent={<span className="text-text-secondary text-[12px]">▼</span>}
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>

      <DropdownMenu
        className="p-1"
        disallowEmptySelection
        aria-label="Data type selection"
        selectedKeys={selectedKeys}
        selectionMode="single"
        variant="solid"
        onSelectionChange={setSelectedKeys}
      >
        {props.options.map((option) => (
          <DropdownItem
            key={option.key}
            className="rounded-md hover:bg-accent-hover/10 transition-colors duration-200 p-3 outline-none text-text"
            startContent={<span className="text-[16px] text-accent">{option.icon}</span>}
          >
            <div className="flex flex-col">
              <span className="font-medium text-[14px] text-text-secondary">{option.label}</span>
            </div>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
