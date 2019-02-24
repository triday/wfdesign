import React from "react";
import * as style from './style.less';

export interface ICanvasProps {

}
export interface ICanvasStates {

}

export default class Canvas extends React.Component<ICanvasProps, ICanvasStates>  {
    render() {
        return <div className={style.canvas} ></div>;
    }
}