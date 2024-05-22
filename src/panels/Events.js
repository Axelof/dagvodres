import {ContentCard, Div, Panel} from "@vkontakte/vkui";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "../components/Header.js";

import may from "../assets/9may.png"


export const EventsPanel = ({ id }) => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        const fetchEventsData = async () => {
            try {
                const response = await axios.get("https://api.dagvodres.ru/getEvents");
                const eventIds = response.data.events.map(event => event.$oid);
                const eventsData = await Promise.all(eventIds.map(async (eventId) => {
                    const eventResponse = await axios.get(`https://api.dagvodres.ru/getEvent/${eventId}`);
                    return eventResponse.data;
                }));
                setEvents(eventsData);
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        };

        void fetchEventsData();
    }, []);

    console.log(events)


    return (
        <Panel id={id}>
            <Header/>
            <Div>
                <ContentCard src={may} header={"День победы!"} maxHeight={450} text={"В преддверии Дня Победы коллектив филиала «Дагводресурсы» украсил административное здание и территорию лентами и флажками. В рамках мероприятий, посвященных празднованию Дня Победы организована встреча с ветераном Великой Отечественной войны Арабовым Алиханичем Магомедовичем. В этом году фронтовик будет отмечать свое столетие, ну а в эти дни Арабов А.М. принимает поздравления с Днём Победы! В годы войны Алиханич Магомедович служил пулеметчиком. В беседе с ветераном мы отметили его неоценимый вклад в разгром немецко-фашистских войск и пожелали ему крепкого здоровья и долгих лет жизни!"}/>
            </Div>

            {events.map((event, index) => (
                <Div>
                    <ContentCard key={index} src={event.src} header={event.header} text={event.text} maxHeight={event.max_height}/>
                </Div>
            ))}
        </Panel>
    )
};
