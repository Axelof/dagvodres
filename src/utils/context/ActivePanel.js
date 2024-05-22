import React from "react";

export const ActivePanelContext = React.createContext({activePanel: "main", setActivePanel: (activePanel) => {}});
