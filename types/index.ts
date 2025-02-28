import {FieldError, UseFormRegister} from "react-hook-form";

export type formFields = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

export type fieldProps = {
    name: "firstName" | "lastName" | "email" | "phone";
    type: string;
    placeholder: string;
}

export type renderFieldProps = {
    isPhone: boolean;
    register: UseFormRegister<formFields>;
    errors: Partial<Record<keyof formFields, FieldError | undefined>>;
}

export type featureProps = {
    icon: string;
    title: string;
    description: string;
}

export type toastProps = {
    type: 'success' | 'error' | 'info' | 'warning',
    message: string
}