import * as React from "react";

import Canvas from '../components/canvas';
import * as style from './app.less';

export interface IAppProps {

}
export interface IAppStates {

}

export default class App extends React.Component<IAppProps, IAppStates>{
    render() {
        return <div className={style.pageContainer}>
            <Canvas />
        </div>;
    }
}