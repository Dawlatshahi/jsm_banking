import {
	FormControl,
	FormField,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { AuthFormSchema } from '@/lib/utils';
import React from 'react';
import { Control, FieldPath, Form } from 'react-hook-form';
import { z } from 'zod';
import { Input } from './ui/input';

const formSchema = AuthFormSchema('sign-up');

interface CustomInput {
	control: Control<z.infer<typeof formSchema>>;
	name: FieldPath<z.infer<typeof formSchema>>;
	label: string;
	placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder }: CustomInput) => {
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<div className="form-item">
					<FormLabel>{label}</FormLabel>
					<div className="flex w-full flex-col">
						<FormControl>
							<Input
								placeholder={placeholder}
								className="input-class"
								type={name === 'password' ? 'password' : 'text'}
								{...field}
							/>
						</FormControl>
						<FormMessage className="form-message mt-2" />
					</div>
				</div>
			)}
		/>
	);
};

export default CustomInput;
