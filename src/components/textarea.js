import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { shade } from "./_functions";
import Label from "./label";

const StyledTextarea = styled.textarea`
    width: 100%;
    border-radius: ${props => props.theme.radius}em;
    border: 1px solid ${props => props.theme.colors.mediumGray};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    padding: 0 ${props => props.theme.sizes[props.size] / 4}em;
    margin: 0
        ${props => (props.expanded || props.align == "right" ? 0 : "0.4em")}
        auto ${props => (props.align == "right" ? "0.4em" : 0)}em;
    font-size: 1em;
    margin-bottom: ${props => props.theme.margin}em;
`;

const Textarea = ({
    input,
    type,
    name,
    label,
    readOnly,
    rows,
    columns,
    meta,
    ...rest
}) => {
    let fieldOptions = {};

    if (readOnly) {
        fieldOptions["readOnly"] = "readOnly";
    }

    return (
        <div>
            {label && (
                <Label name={name} label={label} {...rest}>
                    {label}
                </Label>
            )}
            <StyledTextarea
                {...input}
                type={type}
                {...fieldOptions}
                rows={rows}
                cols={columns}
                {...rest}
            />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    );
};

Textarea.displayName = "Input";

Textarea.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    expanded: PropTypes.bool,
    inlineLabel: PropTypes.bool,
    input: PropTypes.object,
    rows: PropTypes.number,
    columns: PropTypes.number,
    label: PropTypes.string,
    readOnly: PropTypes.bool,
    meta: PropTypes.shape({
        touched: PropTypes.bool,
        error: PropTypes.string
    })
};
Textarea.defaultProps = {
    size: "default",
    expanded: false,
    inlineLabel: true,
    rows: 6,
    columns: 20,
    type: "text",
    readOnly: false,
    meta: {}
};
export default Textarea;
