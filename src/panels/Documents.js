import {ContentCard, Div, Group, IconButton, MiniInfoCell, Panel, SimpleCell} from "@vkontakte/vkui";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Header} from "../components/Header.js";
import {Icon28DocumentTextOutline, Icon28DownloadCloudOutline} from "@vkontakte/icons";

export const DocumentsPanel = ({ id }) => {
    const [documents, setDocuments] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocuments = async () => {
            try {
                const response = await axios.get("https://api.dagvodres.ru/getDocuments");
                const documentIds = response.data.documents.map(document => document.$oid);
                for (const documentId of documentIds) {
                    const documentResponse = await axios.get(`https://api.dagvodres.ru/getDocument/${documentId}`);
                    setDocuments(prevDocuments => [...prevDocuments, documentResponse.data]);
                }
                setLoading(false);
            } catch (error) {
                console.error("Error fetching documents:", error);
            }
        };

        void fetchDocuments();
    }, []);

    return (
        <Panel id={id}>
            <Header/>
            <Group>
                {loading && <Div style={{textAlign: "center"}}>Документы загружаются, ожидайте!</Div>}
                {!loading && documents.map((document, index) => (
                    <MiniInfoCell
                        key={index}
                        mode="accent"
                        textWrap="full"
                        before={<Icon28DocumentTextOutline/>}
                        after={<a download={document.uname} href={document.src}>
                            <IconButton>
                                <Icon28DownloadCloudOutline/>
                            </IconButton>
                        </a>}
                    >
                        {document.uname}
                    </MiniInfoCell>
                ))}
            </Group>
        </Panel>
    )
};