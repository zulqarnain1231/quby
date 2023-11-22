import React from "react";
import Dialog from "@mui/material/Dialog";
import { RxCross1 } from "react-icons/rx";

interface Props {
  Open: boolean;
  CloseEvent: () => void;
  style?: string;
  children: React.ReactNode;
  height?: string;
}

function DialogueWrapper({
  Open,
  CloseEvent,
  style,
  children,
  height = "h-[500px]",
}: Props) {
  return (
    <Dialog
      open={Open}
      sx={{
        "& .MuiPaper-root": {
          background: "#0C152C",
          maxWidth: "unset",
        },
        "& ::-webkit-scrollbar": {
          width: "0px",
          height: "0px",
        },
      }}
    >
      <div className={`sm:w-[600px] w-[300px] ${style} relative`}>
        <button
          type="button"
          onClick={CloseEvent}
          className="font-semibold p-1.5 text-white-main rounded-full absolute top-3 right-3"
        >
          <RxCross1 size={25} />
        </button>

        <div className={`p-4 sm:px-6 ${height} overflow-auto`}>{children}</div>
      </div>
    </Dialog>
  );
}

export default DialogueWrapper;
