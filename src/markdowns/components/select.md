---
title: Select
path: select
number: 2
---

## Installation
First step, install the component from radix-ui using npm.
```js
npm install @radix-ui/react-select
```

## Create a reusable component
Create reusable component in your shared components folder "/components/shared".
```js
import React from 'react';
import * as Select from '@radix-ui/react-select';
import classnames from 'classnames';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import "./Select.scss"

const SelectInput = React.forwardRef(({ ...props }: any, ref) => {
    const { options, placeholder, ariaLabel } = props
    return (
        <Select.Root {...props} ref={ref}>
            <Select.Trigger className="SelectTrigger" aria-label={ariaLabel}>
                <Select.Value placeholder={placeholder} />
                <Select.Icon className="SelectIcon">
                    <ChevronDownIcon />
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal>
                <Select.Content className="SelectContent">
                    <Select.ScrollUpButton className="SelectScrollButton">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="SelectViewport">
                        <Select.Group>
                            <Select.Label className="SelectLabel">Test</Select.Label>
                            {options?.map((option: any) => (<SelectItem key={option.value} value={option.value} > {option.label}</SelectItem>))}
                        </Select.Group>

                        <Select.Separator className="SelectSeparator" />
                    </Select.Viewport>
                    <Select.ScrollDownButton className="SelectScrollButton">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
        </Select.Root >
    )
})

const SelectItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => {
    return (
        <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
            <Select.ItemText>{children}</Select.ItemText>
            <Select.ItemIndicator className="SelectItemIndicator">
                <CheckIcon />
            </Select.ItemIndicator>
        </Select.Item>
    );
});

export default SelectInput;
```


## Usage

Import the select from shared/components folder 

```js
import SelectInput from '../../shared/components/Select/Select';
```

Using the `Controller` from react hook form allows you to modify the `onChange` function of the reusbale component.

```js
<Controller
    render={({ field: { onChange } }) => (
        <SelectInput
            options={[
                { value: "chocolate", label: "Chocolate" },
                { value: "strawberry", label: "Strawberry" },
                { value: "vanilla", label: "Vanilla" }
            ]}
            placeholder="Select flavor"
            onValueChange={(e: any) => {
            onChange(e);
            }}
        />
    )}
    name="Flavor"
    control={control}
/>
```

