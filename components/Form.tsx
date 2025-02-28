"use client"

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Button} from "@/components/ui/button";
import {formFields} from "@/types";
import {schema} from "@/lib/utils";
import {renderFields} from "@/lib/formFields";
import {ChevronRight} from "lucide-react";
import {useMediaQuery} from "react-responsive";

export default function Form() {
    const isPhone = useMediaQuery({maxWidth: 640});
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<formFields>({
        resolver: zodResolver(schema),
        mode: "onBlur"
    });

    const onSubmit = (data: formFields) => {
        console.log("Form submitted:", data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="font-roboto flex flex-col gap-6 py-4">
            {renderFields({register, errors,isPhone})}
            <Button type="submit" className="w-full py-6">
                Step 2: Find a time that works <ChevronRight className="w-10 h-10"/>
            </Button>
        </form>
    );
}
