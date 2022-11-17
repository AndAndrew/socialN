import styles from './FormControls.module.css'
// @ts-ignore
import FieldProps from "redux-form/es/FieldProps.types.js.flow";

export const FormControl = (props: FieldProps) => {
    const hasError = props.meta.touched && props.meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{props.meta.error}</span>}
        </div>
    )
}

export const Textarea = (props: FieldProps) => {
    return <FormControl {...props}><textarea {...props.input} {...props}/></FormControl>
}

export const Input = (props: FieldProps) => {
    return <FormControl {...props}><input {...props.input} {...props}/></FormControl>
}