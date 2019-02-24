import React from 'react';
export interface IAction {
    name: string,
    ref: string,
    icon: string,
    description: string
}
export interface IActionListProps {

}
export interface IActionListStates {

}

export class ActionList extends React.Component<IActionListProps, IActionListStates>{
    render() {
        return (<div>
            <ul>

            </ul>
        </div>);
    }
}