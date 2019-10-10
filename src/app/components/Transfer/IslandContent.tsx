import * as React from 'react'
import {FunctionComponent} from 'react'
import {ItemAndIcon} from "app/components/Transfer/ItemAndIcon";
import './IslandContentStyles.module.scss'
import {mdiCalendarAlert} from '@mdi/js'
import {BaseInput, BaseInputSize, BaseInputType} from "app/components/form/BaseInput";
import {Button, ButtonType} from "app/components/form/Button";
import {Order} from "app/components/Transfer/Interfaces";


export interface IslandContentProps {
    renderContent: Order
    renderForm: boolean,
    isCurrent: boolean,
    isFixed?: boolean,
    inputValue?: string,
    selectValue?: string,
    onOrderTake: () => void
    onSelect: (text: string) => void,
    onChange: (text: string) => void,
    onDropdownClick: () => void,
}

export interface Car {
    id: number,
    model: string,
    size?: number,
    placeAmount?: number,
    invalidPlace?: number,
    color?: string,
    number?: number
}

export const cars: Car[] = [
    {model: "Rehaut", id: 0},
    {model: "Tesla", id: 1},
    {model: "Peugeot", id: 2},
    {model: "BMW", id: 3},
]


export const IslandContent: FunctionComponent<IslandContentProps> = (props) => {

    const value = props.inputValue
    const render = props.renderForm
    const salary = props.renderContent.salary
    return (


        <div className={"islandContent"}>
            <table>
                <tr className="column">
                    <td> Request info</td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}
                                     text={props.renderContent.ReqInfoStart}
                                     icon={mdiCalendarAlert}/>
                    </td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}
                                     text={props.renderContent.ReqInfoEnd}
                                     icon={mdiCalendarAlert}/></td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}
                                     text={props.renderContent.places}
                                     icon={mdiCalendarAlert}/></td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}

                                     icon={mdiCalendarAlert}/></td>
                </tr>
                <tr className="column">
                    <td>Return transfer</td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}
                                     text={props.renderContent.RetTrnsfStart}
                                     icon={mdiCalendarAlert}/>
                    </td>
                    <td><ItemAndIcon size={1}
                                     color={"#97E3E5"}
                                     text={props.renderContent.RetTrensfEnd}
                                     icon={mdiCalendarAlert}/>
                    </td>
                </tr>
            </table>
            <React.Fragment>
                {!render ?
                    <div className="ready">

                        <div className={props.isCurrent && value ? "salaryGrey" : "salary"}>
                                <span>
                                    {salary === null ? "setters" : "fixed"}
                                </span>
                            <span>
                                    {salary !== null ? salary + "$" : value + "$"}
                                </span>
                        </div>

                        {props.isCurrent ?
                            <Button type={ButtonType.YELLOW} children={"Contact customer"}/>
                            :
                            <Button type={ButtonType.MAIN} children={"Take the order"} onClick={props.onOrderTake}
                            />
                        }
                    </div>
                    :
                    <div className="setPrice">
                        <BaseInput type={BaseInputType.TEXT}
                                   size={BaseInputSize.S}
                                   placeholder={"price"}
                                   onChange={event => props.onChange(event.target.value)}

                        />


                        <select className={"select"}
                                value={props.selectValue}
                                onChange={event => props.onSelect(event.target.value)}
                                placeholder={"choice a car"}
                        >

                            {cars.map(car =>

                                <option value={car.model} key={car.id}>{car.model}</option>
                            )}
                        </select>
                    </div>
                }

            </React.Fragment>

        </div>
    )
}

