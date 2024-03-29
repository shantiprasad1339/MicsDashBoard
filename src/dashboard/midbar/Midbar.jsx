import React from 'react';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';

function Midbar(props) {
    return (
        <>
            <Header />
            <Sidebar />
                <div style={{margin: "45px 0 0 80px"}}>
                    {props.children}
                </div>
        </>
    );
}

export default Midbar;