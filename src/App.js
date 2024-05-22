import React, {useContext, useState} from 'react';
import {
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Group,
  SimpleCell,
} from '@vkontakte/vkui';
import { Icon28UserOutline, Icon28SettingsOutline } from '@vkontakte/icons';

import '@vkontakte/vkui/dist/vkui.css';

import { Header } from "./components/Header.js";
import { ActivePanelContext } from "./utils/context/ActivePanel.js";
import { PopoutContext } from "./utils/context/Popout.js";
import {GeneralPanel} from "./panels/General.js";
import {EventsPanel} from "./panels/Events.js";
import {DocumentsPanel} from "./panels/Documents.js";

export function App() {
  const [popout, setPopout] = useState(null)
  const [activePanel, setActivePanel] = useState("general");

  return (
    <ActivePanelContext.Provider value={{ activePanel, setActivePanel }}>
      <PopoutContext.Provider value={{ popout, setPopout }}>

        <SplitLayout
            style={{ justifyContent: 'center' }}
            header={<PanelHeader delimiter="none" />}
            popout={popout}
        >
          <SplitCol width="100%" maxWidth="900px" stretchedOnMobile autoSpaced>

            <View activePanel={activePanel}>
              <GeneralPanel id="general"/>
              <EventsPanel id="events"/>
              <DocumentsPanel id="documents"/>
            </View>
          </SplitCol>
        </SplitLayout>
      </PopoutContext.Provider>
    </ActivePanelContext.Provider>
  );
}
