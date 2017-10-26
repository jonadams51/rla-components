import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "../_functions";
import FormLabel from "./label";

const types = [
    "date",
    "datetime-local",
    "email",
    "hidden",
    "month",
    "number",
    "password",
    "search",
    "tel",
    "text",
    "time",
    "week"
];

const StyledInput = styled.input`
    ${props => types.indexOf(props.type) !== -1 && css`
            width: 100%;
            max-width: ${props => (props.expanded ? "100%" : "10em")};
            height: ${props => props.theme.input.sizes[props.size]}em;
            border-radius: ${props => props.theme.input.radius}em;
            border: 1px solid ${props => (props.status ? props.theme.input.colors[props.status] : props.theme.input.borderColor)};
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            padding: 0 ${props => props.theme.input.sizes[props.size] / 4}em;
            margin: 0
                ${props => (props.expanded || props.align == "right" ? 0 : "0.4em")}
                auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
            font-size: 1em;
        `};
    margin-bottom: ${props => props.theme.input.margin}em;
`;
const InputField = ({
    type,
    name,
    label,
    readOnly,
    meta,
    onChange,
    status,
    statusMessage,
    ...rest
}) => {
    let fieldOptions = {};

    if (readOnly) {
        fieldOptions["readOnly"] = "readOnly";
    }

    if (status) {
        fieldOptions["status"] = "status";
    }

    const handleChange = event => {
        onChange({
            name: name,
            value: event.target.value
        });
    };

    return (
        <div>
            {label &&
                <FormLabel name={name} label={label} {...rest}>
                    {label}
                </FormLabel>}
            <StyledInput
                type={type}
                name={name}
                {...fieldOptions}
                onChange={handleChange}
                {...rest}
            />
            {statusMessage && <span>{statusMessage}</span>}
        </div>
    );
};

InputField.displayName = "InputField";

InputField.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.string,
    expanded: PropTypes.bool,
    block: PropTypes.bool,
    input: PropTypes.object,
    type: PropTypes.string,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    status: PropTypes.string,
    statusMessage: PropTypes.string
};

InputField.defaultProps = {
    size: "default",
    expanded: false,
    block: true,
    type: "text",
    readOnly: false,
    status: "",
    statusMessage: ""
};

export default InputField;
