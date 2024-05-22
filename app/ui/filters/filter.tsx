import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
} from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";

const Filter = () => {
  return (
    <div className="flex gap-8">
      <Popover>
        <PopoverButton className="block rounded-md bg-astral-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-astral-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-astral-600">
          <div className="group flex gap-x-3 rounded-md text-sm leading-6 font-semibold">
            <AdjustmentsHorizontalIcon className="h-6 w-6 shrink-0" />
            Filters
          </div>
        </PopoverButton>
        <Transition
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <PopoverPanel
            anchor="left start"
            className="divide-y divide-gray-700 rounded-xl bg-gray-600 text-sm/6 [--anchor-gap:var(--spacing-5)]"
          >
            <div className="p-3">
              <Fieldset className="space-y-4 rounded-xl bg-white/5 p-2">
                <Field>
                  <Label className="text-sm/6 font-medium text-white">
                    ZipCode
                  </Label>
                  <Input
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    )}
                  />
                </Field>
                <Field>
                  <Label className="text-sm/6 font-medium text-white">
                    Radius in Miles
                  </Label>
                  <Input
                    type="number"
                    className={clsx(
                      "mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
                    )}
                  />
                </Field>
              </Fieldset>
              {/* <a
                className="block rounded-lg py-2 px-3 transition hover:bg-white/5"
                href="#"
              >
                <p className="font-semibold text-white">Radius Select</p>
                <p className="text-white/50">
                  We can also provide a dropdown for radius
                </p>
              </a> */}
            </div>
            <div className="p-3">
              <button className="block rounded-lg py-2 px-3 transition hover:bg-white/5 w-full">
                <p className="font-semibold text-white">Lets DO IT</p>
                <p className="text-white/50">Search</p>
              </button>
            </div>
          </PopoverPanel>
        </Transition>
      </Popover>
    </div>
  );
};

export default Filter;
