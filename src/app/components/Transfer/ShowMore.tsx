import * as React from 'react'
import {FunctionComponent} from 'react'
import './ShowMoreStyles.module.scss'
import {Match} from "app/components/Transfer/Match";
import {Order} from "app/components/Transfer/Interfaces";

export interface ShowMoreProps {
    showMore: Order
}

export const ShowMore: FunctionComponent<ShowMoreProps> = (props) => {
    return (
        <div className="dropdown">
            <Match title={"total"}>

                {props.showMore.total} persons:
                {props.showMore.identificatePol}
            </Match>
            <Match title={"baggage"}>
                {props.showMore.baggage}
            </Match>
            <Match title={"car"}>
                {props.showMore.car}
            </Match>
            <Match title={"client"}>
                <span>{props.showMore.client.name}</span>
                <span>{props.showMore.client.phone}</span>
                <span>{props.showMore.client.mail}</span>
            </Match>
            <Match title={"name sign"}>
                {props.showMore.nameSign}
            </Match>
            <Match title={"requeierennts"}>
                {props.showMore.requeierennts}

            </Match>
        </div>
    )
}
