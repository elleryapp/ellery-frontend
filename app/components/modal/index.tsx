import * as React from 'react';

var style = require('./style.css');

class Modal extends React.Component<any, any> {
    render() {
        if(this.props.isOpen){
            return (
                <div className={style.modal}>
                  {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Modal;
