import React, {useContext, useRef} from 'react';

import {ActionSheet, ActionSheetItem, Alert, PanelHeader, PanelHeaderButton} from "@vkontakte/vkui";
import { ActivePanelContext } from "../utils/context/ActivePanel.js";
import { PopoutContext } from "../utils/context/Popout.js";
import { Icon28Menu } from "@vkontakte/icons";



export const Header = () => {
    const buttonRef = useRef();
    const { setActivePanel } = useContext(ActivePanelContext)
    const { setPopout } = useContext(PopoutContext)

    const closePopout = () => {
        setPopout(null);
    };

    const openAction = () => {
        setPopout(
            <ActionSheet onClose={closePopout} toggleRef={buttonRef} mode="sheet">
                <ActionSheetItem
                    autoclose="true"
                    mode="default"
                    onClick={() => {setActivePanel("general")}}
                >
                    Главная
                </ActionSheetItem>
                <ActionSheetItem
                    autoclose="true"
                    mode="default"
                    onClick={() => {setActivePanel("events")}}
                >
                    События
                </ActionSheetItem>
                <ActionSheetItem
                    autoclose="true"
                    mode="default"
                    onClick={() => {setActivePanel("documents")}}
                >
                    Документы
                </ActionSheetItem>
            </ActionSheet>
        );
    };


    return (
        <PanelHeader
            className={"AppHeader"}
            after={
                <PanelHeaderButton onClick={openAction} aria-label={"ok"} getRootRef={buttonRef}>
                    <Icon28Menu/>
                </PanelHeaderButton>
            }

        >
            Дагводресурсы
        </PanelHeader>
    )
};
