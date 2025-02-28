"use client"

import {Input} from "@/components/ui/input";
import {renderFieldProps} from "@/types";
import {FieldError} from "react-hook-form";
import {fields} from "@/lib/utils";

export const renderFields = ({register, errors,isPhone}: renderFieldProps) => {
    return (fields.map((item) => {
        const phonePlaceholder = isPhone && item.name === "phone"
        return (
            <div key={item.name}>
                <Input
                    type={item.type}
                    {...register(item.name)}
                    placeholder={phonePlaceholder ? item.placeholder.split(" (")[0] : item.placeholder}
                    className={`w-full px-4 py-2 rounded border ${errors[item.name] ? "border-red-500 mb-1" : "border-gray-300"} rounded-md`}
                    maxLength={item.name === "phone" ? 10 : undefined}
                />
                {phonePlaceholder && <p className="italic mt-1 text-sm text-gray-500">{item.placeholder.split("Number ")[1]}</p>}
                {errors[item.name] &&
                    <p className="text-red-500 text-sm">{(errors[item.name] as FieldError).message}</p>}
            </div>
        )
    }))
}
