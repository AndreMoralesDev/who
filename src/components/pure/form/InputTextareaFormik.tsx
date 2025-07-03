"use client";

import ErrorCircleIcon from "@/components/icons/ErrorIcon";
import { ErrorMessage, Field, useField } from "formik";
import { useEffect } from "react";

type InputTextareaFormikProps = {
    name: string;
    label?: string;
    placeholder?: string;
    autoFocus?: boolean;
    disabled?: boolean;
    onChange?: (value: string | number | Date) => void;
};

export const InputTextareaFormik = ({
    label,
    name,
    placeholder,
    autoFocus,
    onChange,
    disabled,
}: InputTextareaFormikProps) => {
    const [field] = useField({ name });

    useEffect(() => {
        if (onChange !== undefined) onChange(field.value);
    }, [field.value, onChange]);

    if (disabled) {
        return (
            <div className="flex flex-col gap-1 items-start">
                {label && <p>{label}</p>}

                <p
                    data-clarity="confidencial"
                    className="h-[50px] py-2 px-4 w-full border-[1px] border-input-default-border-color outline-none rounded-[4px] bg-white text-background-bold"
                >
                    {field.value}
                </p>
            </div>
        );
    }

    return (
        <div className="flex flex-col text-sm">
            <div className="flex flex-col gap-1 items-start">
                {label && <label htmlFor={name}>{label}</label>}
                <Field
                    as="textarea"
                    rows={4}
                    id={name}
                    name={name}
                    autoFocus={autoFocus}
                    placeholder={placeholder}
                    className="py-2 px-4 w-full border-[1px] bg-white border-secondary outline-none rounded-[4px] focus:border-secondary-focus focus:shadow-[0_0_0_1px] focus:shadow-secondary-focus transition-all duration-300 [transition-property:transform,box-shadow,border-color]"
                    data-clarity="confidencial"
                />
            </div>

            <ErrorMessage name={name}>
                {(msg) => (
                    <p
                        className="font-normal pt-[6px] text-[12px] text-red-600 flex items-center gap-[6px] leading-none"
                        data-testid={`${name}-error-message`}
                    >
                        <ErrorCircleIcon className="size-4" />
                        <span>{msg}</span>
                    </p>
                )}
            </ErrorMessage>
        </div>
    );
};
