import * as React from 'react';
import classNames from 'classnames';
import { mapStylesToClassNames as mapStyles } from '../../../utils/map-styles-to-class-names';
import FormBlockType from '.';

export default function FormBlock(props: FormBlockType) {
    const { elementId, className, fields = [], submitButton, styles = {} } = props;
    const formName = 'contact';

    return (
        <form
            className={classNames('sb-component', 'sb-component-block', 'sb-component-form-block', className)}
            name={formName}
            id={elementId}
            method="POST"
            data-netlify="true"
            netlify="true"
        >
            {/* Required hidden input for Netlify forms */}
            <input type="hidden" name="form-name" value={formName} />

            <div className={classNames('w-full', 'flex', 'flex-col', mapStyles(styles?.self))}>
                {fields.map((field, index) => {
                    const fieldType = field.type;
                    if (!fieldType) {
                        throw new Error(`form field does not have the 'type' property`);
                    }
                    const FormControl = require(`../../molecules/${fieldType}`).default;
                    return <FormControl key={index} {...field} />;
                })}
                {submitButton && (
                    <div className={classNames('mt-8', 'flex', 'items-center', 'justify-center')}>
                        <button
                            type="submit"
                            className={classNames(
                                'sb-component',
                                'sb-component-block',
                                'sb-component-button',
                                submitButton.style === 'primary' ? 'sb-component-button-primary' : 'sb-component-button-secondary'
                            )}
                        >
                            {submitButton.label}
                        </button>
                    </div>
                )}
            </div>
        </form>
    );
}
