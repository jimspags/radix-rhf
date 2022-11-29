---
title: Example
path: example
number: 1
---


## Installation
First step, install the component from radix-ui using npm.

```js
npm install react-hook-form

```

Install the icons from radix-ui or you can use other icon libraries.
```js
npm install @radix-ui/react-icons
```



## In your app


```js
import Input from '../../shared/components/InputForm/Input';
import RadioButton from '../../shared/components/RadioButton/RadioButton';
import * as RadioGroup from '@radix-ui/react-radio-group';
import SelectInput from '../../shared/components/Select/Select';
import { useForm, Controller } from 'react-hook-form';

export default function App() {
const { register, control, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
const onSubmit = handleSubmit((data: any) => console.log(data));

  return (
    
    <form onSubmit={onSubmit} className="formContainer">
       /* Input usage" */ 
       <Input placeholder="Name" label="Name"  {...register("name")} />

        /* Radio button usage" */ 
       <Controller
            render={({ field: { onChange } }) => (
                <RadioGroup.Root className="RadioGroupRoot" aria-label="Pickup address" onValueChange={(e) => {
                    onChange(e)
                }}>
                    <RadioButton label="Lift Gate at Pickup Point" value="Lift Gate at Pickup Point" />
                    <RadioButton label="Limited Access Pickup" value="Limited Access Pickup" />
                </RadioGroup.Root>
            )}
            name="pickup_type"
            control={control}

        />

        /* Select usage" */ 
        <Controller
            render={({ field: { onChange } }) => (
                <SelectInput
                    options={[
                        { value: "chocolate", label: "Chocolate" },
                        { value: "strawberry", label: "Strawberry" },
                        { value: "vanilla", label: "Vanilla" }
                    ]}
                    placeholder="Select packaging"
                    onValueChange={(e: any) => {
                        onChange(e);
                    }}

                />
            )}
            name="packaging"
            control={control}
        />

      <input type="submit" />
    </form>
  );
}
```
