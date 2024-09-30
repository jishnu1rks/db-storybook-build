import { useEffect } from "react";

const GridLayout = () => {
  useEffect(() => {
    let dragSrcEl = null;
    function handleDragStart(e) {
      e.currentTarget.style.opacity = "0.4";
      dragSrcEl = e.currentTarget;
      e.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault();
      }
      e.dataTransfer.dropEffect = "move";

      return false;
    }

    function handleDragEnter(e) {
      e.currentTarget.classList.add("over");
      e.currentTarget.style.border = "1px solid black";
    }

    function handleDragLeave(e) {
      e.currentTarget.classList.remove("over");
      e.currentTarget.style.border = "1px solid transparent";
    }

    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation();
      }

      if (dragSrcEl != e.currentTarget) {
        e.currentTarget.replaceWith(e.currentTarget, dragSrcEl);
      }
      return false;
    }

    function handleDragEnd(e) {
      e.currentTarget.style.opacity = "1";
      items.forEach(function (item) {
        item.classList.remove("over");
        item.style.border = "1px solid transparent";
      });
    }
    let items = document.querySelectorAll(".grid-item");
    items.forEach(function (item) {
      item.addEventListener("dragstart", handleDragStart, false);
      item.addEventListener("dragenter", handleDragEnter, false);
      item.addEventListener("dragover", handleDragOver, false);
      item.addEventListener("dragleave", handleDragLeave, false);
      item.addEventListener("drop", handleDrop, false);
      item.addEventListener("dragend", handleDragEnd, false);
    });
  }, []);

  return (
    <div className="grid grid-cols-3 gap-5 w-[50vw]">
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Spazio
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Automate
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        VMS
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Wayfinder
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Survey
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Optima
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Help Desk
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Pantry
      </div>
      <div
        className="h-[10rem] flex justify-start cursor-pointer grid-item shadow-xl p-[2rem] rounded-[10px] font-bold hover:scale-105"
        draggable
      >
        Asset Manager
      </div>
    </div>
  );
};

export default GridLayout;
