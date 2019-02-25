import * as React from "react";
export interface IHlayout {

}
export interface IHlayoutProps {
    id: string,
    className: string,
}
export interface IHlayoutStates {

}

export class Hlayout extends React.Component<IHlayoutProps, IHlayoutStates>  {
    render() {

        // let cnames = classNames({
        //     btn: true,

        // });


        return <div id={this.props.id} className={this.props.className}>
            <div className="left">

            </div>
            <div className="main">

            </div>
            <div className="right">

            </div>
        </div>;
    }
}