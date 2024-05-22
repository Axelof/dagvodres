import {
    Avatar, Caption,
    ContentCard,
    Div,
    Gradient,
    Group,
    MiniInfoCell,
    Panel,
    Separator,
    Subhead,
    Title
} from "@vkontakte/vkui";
import {Icon20PhoneCircleFillGreen, Icon28MailCircleFillBlue} from "@vkontakte/icons";

import {Header} from "../components/Header.js";

import React, {useEffect, useState} from "react";
import logo from "../assets/logo.png"
import front_view from "../assets/front_view.jpg"
import observe from "../assets/observe.png"
import axios from "axios";


const styles = {
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 32,
}


export const GeneralPanel = ({ id }) => {

    return (
        <Panel id={id}>
            <Header/>
            <Group>
                <Gradient style={styles}>
                    <Subhead width={"3"} style={{paddingBottom: "16px"}}>
                        ФЕДЕРАЛЬНОЕ АГЕНТСТВО ВОДНЫХ РЕСУРСОВ
                    </Subhead>
                    <Avatar size={96} src={logo}/>
                    <Title level={"3"} weight={"2"} style={{marginTop: "20px", marginBottom: "8px"}}>
                        МИНИСТЕРСТВО ПРИРОДНЫХ РЕСУРСОВ И ЭКОЛОГИИ
                        РОССИЙСКОЙ ФЕДЕРАЦИИ
                        ФГБВУ "ЦЕНТРРЕГИОНВОДХОЗ"
                    </Title>
                </Gradient>
                <Div><Separator/></Div>
                <ContentCard src={front_view} maxHeight={450} header={"Филиал «Дагводресурсы»"}/>
                <Div><Separator/></Div>
                <MiniInfoCell onClick={() => {window.location.href = "mailto:contact@dagvodres.ru"}} before={<Icon28MailCircleFillBlue/>}>Почта: contact@dagvodres.ru</MiniInfoCell>
                <MiniInfoCell onClick={() => {window.location.href = "tel:+79882921337"}} before={<Icon20PhoneCircleFillGreen width={28} height={28}/>}>Телефон: +7 (988) 292-13-37</MiniInfoCell>
                <Div><Separator/></Div>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A541b0ec9d1cc5223b12d78c43184c947141324dca791bdb6bf6d50b2143e7f39&amp;source=constructor" width="100%" height="400"></iframe>
                <Div><Separator/></Div>
                <ContentCard src={observe} maxHeight={450} text={<Caption>Место слияния рек `Аварское Койсу` и `Андийское Койсу`</Caption>}/>
            </Group>
        </Panel>

    )
}