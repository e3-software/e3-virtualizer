"use client";
import { Checkbox } from "@headlessui/react";
import { useState } from "react";
import { Address } from "@prisma/client";

const AddressTable = ({ records }: IAddressTable) => {
  const [enabled, setEnabled] = useState(false);

  records = Array(10)
    .fill([...records])
    .reduce((a, b) => a.concat(b));

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th></th>
          <th
            scope="col"
            className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
          >
            Address
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            City
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            State
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Zip
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Tags
          </th>
          <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {records.map((record) => (
          <tr key={record.id}>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              <Checkbox
                checked={enabled}
                onChange={setEnabled}
                className="group block size-4 rounded border bg-white transition data-[checked]:bg-astral-500"
              >
                {/* Checkmark icon */}
                <svg
                  className="stroke-white opacity-0 transition group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M3 8L6 11L11 3.5"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Checkbox>
            </td>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
              {record.addressLine1}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {record.city}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {record.state}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {record.zip}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              tags
            </td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
              <a href="#" className="text-astral-600 hover:text-astral-900">
                Edit<span className="sr-only">, {record.id}</span>
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export interface IAddressTable {
  records: Address[];
}

export default AddressTable;
