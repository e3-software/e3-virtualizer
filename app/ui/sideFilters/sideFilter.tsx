"use client";
import { Fragment, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

import {
  Button,
  Dialog,
  Transition,
  Field,
  Fieldset,
  Input,
  Label,
} from "@headlessui/react";
import clsx from "clsx";
import GMaps from "./map";

const SideFilters = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        className="block rounded-md bg-astral-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-astral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-astral-600"
      >
        <div className="group flex gap-x-3 rounded-md text-sm leading-6 font-semibold">
          <AdjustmentsHorizontalIcon className="h-6 w-6 shrink-0" />
          Filters
        </div>
      </Button>
      <Transition show={open} as={Fragment}>
        <Dialog className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-gray-200 py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Address Search
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md  text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="px-4 sm:px-6">
                        <Fieldset className="space-y-4 rounded-xl bg-black/5 p-10">
                          <Field>
                            <Label className="text-sm/6 font-medium text-gray-900">
                              ZipCode
                            </Label>
                            <Input
                              className={clsx(
                                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-900",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
                              )}
                            />
                          </Field>
                          <Field>
                            <Label className="text-sm/6 font-medium text-gray-900">
                              Radius in Miles
                            </Label>
                            <Input
                              type="number"
                              className={clsx(
                                "mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-sm/6 text-gray-900",
                                "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25",
                              )}
                            />
                          </Field>
                        </Fieldset>
                        <div className="p-3">
                          <button className="block rounded-lg py-2 px-3 transition hover:bg-black/5 w-full outline-black/25 outline">
                            <p className="font-semibold text-gray-900">
                              Lets DO IT
                            </p>
                          </button>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6 flex-col">
                        <GMaps />
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SideFilters;
