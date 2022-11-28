---
title: Input
path: input
steps:
  - description: First step, install the input from radix-ui using npm.
    code:
      code: >- 
        npm install @radix-ui/react-label
  - description: Second step, create a reusable component in your components folder.
    code:
      code: >-
        import * as Label from '@radix-ui/react-label';

        import React, { useId, forwardRef } from 'react'

        import './Input.scss'


        export type InputType = 'text' | 'email' | 'number';

        export type InputProps = {
            label?: string;
            type?: InputType;
            placeholder?: string,
            className?: string;
        }




        const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }: any, ref) => {
            const { label, placeholder, name, type } = props
            const id = useId()
            return (
                <div className='form-group'>
                    <Label.Root className="LabelRoot" htmlFor={id}>
                        {label}
                    </Label.Root>
                    <input className="Input" type={type} id={id} placeholder={placeholder} name={name} ref={ref} {...props} />
                </div>
            )
        })

        export default Input
      lang: typescript
---
