import * as React from 'react';

class Modal extends React.Component<any, any> {
    render() {
        if(this.props.isOpen){
            return (
                <div className="modal">
                  {this.props.children}
                </div>
            );
        } else {
            return null;
        }
    }
}
