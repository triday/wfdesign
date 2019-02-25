import * as React from "react";

import Canvas from '../components/canvas';
import ActionList from '../components/actionlist';
import actions from './actions';
import * as style from './app.less';

export interface IAppProps {

}
export interface IAppStates {

}

export default class App extends React.Component<IAppProps, IAppStates>{
    render() {
        return <div className={style.pageContainer}>
            <ActionList actions={actions}></ActionList>
            <Canvas/>
        </div>;
    }
}