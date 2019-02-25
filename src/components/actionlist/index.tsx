import React from 'react';
import * as style from './style.less';
export interface Action {
    name: string,
    ref: string,
    icon: string,
    description: string
}
export interface DefaultProps {
    id?: string,
    className?: string,
}
export interface ActionListProps {
    actions: Action[]
}
export interface ActionListStates {

}

export default class ActionList extends React.Component<ActionListProps, ActionListStates>{
    render() {
        return (<div className={style.actionList}>
            <ul>
                {
                    this.props.actions.map(p => <li key={p.ref}>
                        <img src={p.icon} />
                        <h4>{p.ref}</h4>
                        <span>{p.description}</span>
                    </li>)
                }
            </ul>
        </div>);
    }
}