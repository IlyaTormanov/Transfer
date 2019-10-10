import * as React from 'react'
import {FunctionComponent, useState} from "react";
import {Content} from "app/components/Transfer/Content";
import {Header} from "app/components/Transfer/Header";
import './TransferStyles.module.scss'


import {FormContainer} from "app/components/Transfer/FormContainer";
import {OrderEnt} from "app/components/Transfer/Entities";


export interface TransferProps {

}

export const Transfer: FunctionComponent<TransferProps> = () => {


    return (
        <div className={"Transfer"}>
            <Header/>
            <FormContainer/>

            {OrderEnt.map(item =>
                <React.Fragment key={item.id}>
                    <Content order={item}/>
                </React.Fragment>
            )}
        </div>
    )
}
