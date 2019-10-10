import * as React from 'react'
import {FunctionComponent, useState} from 'react'

import "./ContentStyles.module.scss"
import {Island} from "app/components/Island/Island";
import {TitleIsland} from "app/components/Transfer/TitleIsland";
import {IslandContent} from "app/components/Transfer/IslandContent";
import {SetThePrice} from "app/components/Transfer/SetThePrice";
import {ButtonType} from "app/components/form/Button";
import {ShowMore} from "app/components/Transfer/ShowMore";
import {Order} from "app/components/Transfer/Interfaces";


export interface ContentProps {
    order: Order,
}

export const Content: FunctionComponent<ContentProps> = (props) => {
    const [select, setSelect] = useState<string>()
    const [input, setInput] = useState('')
    const [edit, setEdit] = useState(!props.order.salary)
    const [dropdown, setDropdown] = useState()

    const [current, setCurrent] = useState()

    return (
        <div className={"containerContent"}>


            <Island>

                <TitleIsland fromPlace={props.order.fromPlace}
                             to={props.order.to}
                             isCurrent={current}

                />
                <IslandContent onSelect={setSelect}
                               onChange={setInput}
                               renderForm={edit}
                               onDropdownClick={() => setDropdown(!dropdown)}
                               isFixed={true}
                               renderContent={props.order}
                               inputValue={input}
                               selectValue={select}
                               isCurrent={current}
                               onOrderTake={() => setCurrent(true)}
                />

                {
                    edit && <SetThePrice disabled={!input || !select}
                                         type={!input || !select?ButtonType.__VK:ButtonType.MAIN}
                                         handleClick={() => setEdit(false)}
                                         text={(input && select) ? '' : "choose a car and set the price"}
                    />

                }

                {
                    !edit && <div className={"showMoreString"}>
                        <div onClick={() => setDropdown(!dropdown)}>Show more</div>
                        <div className="pointerBorder"/>
                    </div>
                }
                {
                    dropdown && <ShowMore showMore={props.order}/>
                }
            </Island>
        </div>
    )
}
