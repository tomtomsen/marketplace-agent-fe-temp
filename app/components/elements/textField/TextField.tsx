interface TextFieldProps {
    helperText?: string;
}

export default function TextField(props: TextFieldProps) {
    const { helperText } = props;

    return (
        <>
            <input type="text" />
            {helperText && <div>{helperText}</div>}
        </>
    );
}