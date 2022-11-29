---
title: Input
path: input
---


## Installation
First step, install the component from radix-ui using npm.

```js
npm install @radix-ui/react-label

```


## Create a reusable component
Create reuable components in your shared components folder "/components/shared".

```js
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
```


## Usage

Import the input from shared/components folder.
```js
import Input from '../../shared/components/InputForm/Input';
```

Reuse the components with `{...register}` to get the value of the input.
 

```js
 <Input placeholder="Name" label="Name"   {...register("name")} />
```

