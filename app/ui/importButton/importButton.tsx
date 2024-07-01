/**
 *
 * @param param import button for import page
 * @returns
 */

"use client";
// import { useState } from "react";
import { ArrowUpOnSquareIcon } from "@heroicons/react/24/outline";
import { Button } from "@headlessui/react";

const ImportButton = () => {
 return (
    <>
      <Button
        // onClick={}
        className="block rounded-md bg-astral-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-astral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-astral-600"
      >
        <div className="group flex gap-x-3 rounded-md text-sm leading-6 font-semibold">
          <ArrowUpOnSquareIcon className="h-6 w-6 shrink-0" />
          Import
        </div>
      </Button>

    </>
  );
};

export default ImportButton;
