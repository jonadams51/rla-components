import React from "react";
import moment from "moment";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

import {
    InputField,
    TextareaField,
    Button,
    RadioField,
    SelectField,
    MultiCheckbox,
    DatePicker,
    TimePicker
} from "../../src/index";

storiesOf("Form Inputs", module)
    .add(
        "Text Inputs",
        withInfo(
            "This is the default input. It is automatically set to type='text'. The inputField accepts all of the standard HTML5 attributes such as placeholder, value etc. Styles are applied based on type."
        )(() => (
            <div>
                <InputField
                    name="test"
                    defaultValue="default"
                    label="With Label"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="default"
                    label="With Label Block"
                    inlineLabel={false}
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    placeholder="with placeholder"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="password"
                    type="password"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="small"
                    size="small"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="default"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="large"
                    size="large"
                    onChange={value => {
                        console.log(value);
                    }}
                />
                <InputField
                    name="test"
                    defaultValue="large"
                    size="large"
                    onChange={value => {
                        console.log(value);
                    }}
                    status="alert"
                    statusMessage="Required"
                />
            </div>
        ))
    )
    .add(
        "Textarea",
        withInfo("This is an example textarea.")(() => {
            return (
                <div>
                    <TextareaField
                        name="test"
                        placeholder="placeholder text"
                        label="With Label"
                        onChange={value => {
                            console.log(value);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Radio Buttons",
        withInfo("This is for radio buttons.")(() => {
            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <RadioField
                        name="test"
                        label="With Label"
                        options={options}
                        onChange={value => {
                            console.log(value);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Select",
        withInfo("This is for select menus.")(() => {
            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <SelectField
                        name="test-select"
                        defaultValue="default"
                        label="With Label"
                        emptyOption="--Pick an Option--"
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Checkboxes",
        withInfo("This is for checkboxes.")(() => {
            const options = [
                { value: "1", text: "first" },
                { value: "2", text: "second" },
                { value: "3", text: "third" },
                { value: "4", text: "forth" }
            ];
            return (
                <div>
                    <MultiCheckbox
                        name="test-checkboxes"
                        defaultValue="default"
                        label="Checkboxes"
                        options={options}
                        onChange={selection => {
                            console.log(selection);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Date Picker",
        withInfo("This is a date picker.")(() => {
            return (
                <div>
                    <DatePicker
                        name="deadline"
                        minDate={moment()}
                        maxDate={moment().add(5, "days")}
                        label="Deadline"
                        style={{ display: "block" }}
                        value={moment()}
                        onChange={newDate => {
                            console.log(newDate);
                        }}
                    />
                </div>
            );
        })
    )
    .add(
        "Time Picker",
        withInfo("This is a time picker.")(() => {
            return (
                <div>
                    <TimePicker
                        name="deadline"
                        label="Deadline"
                        onChange={newTime => {
                            console.log(newTime);
                        }}
                    />
                </div>
            );
        })
    );
