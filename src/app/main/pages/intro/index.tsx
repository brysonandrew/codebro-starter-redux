import * as React from 'react';
const s = require('./Intro.css');

interface IProps {
    isTriggered?: boolean;
}

interface IState {}

export class Intro extends React.Component<IProps, IState> {

    public constructor(props?: any, context?: any) {
        super(props, context);
    }

    render(): JSX.Element {

        return (
            <section className={s.section}>
                Welcome to the KOZM redux starter pack!
            </section>
        );
    }
}
