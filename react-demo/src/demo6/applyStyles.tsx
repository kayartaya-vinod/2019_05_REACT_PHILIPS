import React, { Component } from 'react';

// applyStyles is not really HOC by itself, but it returns a HOC
function applyStyles_1(customStyles?: any) {
    return function hoc(OldComponent: any) {
        return class NewComponent extends Component<any> {
            render() {

                const defaultStyles = {
                    ...customStyles,
                    padding: '50px',
                    border: '1px solid black'
                };

                return <div style={defaultStyles}>
                    <OldComponent {...this.props} />
                </div>
            }
        }
    }
}

const applyStyles = (customStyles?: any) => (OldComponent: any) => (props: any) => {

    const defaultStyles = {
        ...customStyles,
        padding: '30px',
    };

    return <div style={defaultStyles}>
        <OldComponent {...props} />
    </div>
}

export default applyStyles;

// let someHoc = (hocProps) => (OldComp) => NewComp;
// let someHoc = (hocProps) => (OldComp) => (props) => JSX;