---
title: Radio
path: radio
---

## Installation
First step, install the component from radix-ui using npm.

```js
npm install @radix-ui/react-radio-group
```

## Create a reusable component

To illustrate how the Open/Closed principle would be violated, consider this code:

```js
import React, { useId, forwardRef } from 'react'
import * as RadioGroup from '@radix-ui/react-radio-group';
import './RadioGroup.scss'

export type InputProps = {
    value?: string;
    label?: string,
    className?: string;
}
const RadioButtons = forwardRef<RadioNodeList, InputProps>(({ ...props }: any, ref: any) => {
    const { label, value } = props
    const id = useId()
    return (

        <div className='radioButtonContainer'>
            <RadioGroup.Item className="RadioGroupItem" value={value} id={id} {...props}>
                <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="RadioLabel" htmlFor={id}>
                {label}
            </label>
        </div>

    )
})

export default RadioButtons
```


## Usage

Import the component from radix-ui.


```js
import * as RadioGroup from '@radix-ui/react-radio-group';
```

Import the components from /shared/components folder.

```js
import RadioButton from '../../shared/components/RadioButton/RadioButton';
```

Using the `Controller` from react hook form allows you to modify the `onChange` function of the reusbale component.

```js
<Controller
render={({ field: { onChange } }) => (
    <RadioGroup.Root className="RadioGroupRoot" aria-label="Stackable" onValueChange={(e) => {
        onChange(e)
    }}>
        <RadioButton label="On" value="on" />
        <RadioButton label="Off" value="off" />
    </RadioGroup.Root>
)}
name="stackable"
control={control}
/>
```

