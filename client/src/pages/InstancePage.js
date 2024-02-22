import { useState, useEffect } from "react";
import { Outlet, Link, useParams } from 'react-router-dom'

import { getDoc, getDocs, doc, collection } from "firebase/firestore";
import { db } from "../firebase/config";

import FeedbackCard from "../components/FeedbackCard";

export default function InstancePage() {
    const [instanceName, setInstanceName] = useState("Title");

    const [feedbackID, setFeedbackID] = useState("")
    const [feedbacks, setFeedbacks] = useState([]);

    const { instanceID } = useParams();

    useEffect(() => {
        let fdID = "";
        getDocs(collection(db, "ClientInstances", instanceID, "Feedbacks"))
            .then((snapshot) => {
                let result = [];
                snapshot.docs.forEach((doc) => {
                    console.log(doc.data())
                    let fd = {
                        content: doc.data().content,
                        date: doc.data().date,
                        sentiment: doc.data().sentiment,
                        mainTag: doc.data().mainTag,
                        subTag: doc.data().subTag
                    }

                    result.push(fd);
                })

                setFeedbacks(result);
            });

        const sourceRef = getDocs(collection(db, "ClientInstances"))
            .then((snapshot) => {
                snapshot.docs.forEach((doc) => {
                    if (doc.id === instanceID) {
                        setInstanceName(doc.data().title);
                    }
                })
            });
        // console.log(getDoc(doc(db, "ClientInstance", instanceID)).data())

    }, []);

    return (
        <div className="flex flex-col w-full h-full p-10 space-y-10">
            <div className="shrink flex flex-col space-y-1">
                <h1 className="text-3xl font-bold">{instanceName}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sem arcu, pellentesque id sapien id, ullamcorper sollicitudin mi. Maecenas in elit iaculis, placerat ex id, molestie neque. Praesent lobortis nunc at rhoncus lacinia. Nam maximus tincidunt nibh, quis commodo libero sagittis in.</p>
            </div>
            <Link to={`/instance/config/${instanceID}`} >
                <button className="flex h-5 shrink p-5 justify-center items-center shadow-md rounded-md text-white font-semibold bg-gradient-to-r from-sky-500 to-indigo-500">Edit Config</button>
            </Link>
            <div className="grow flex flex-col space-y-1">
                <h1 className="shrink text-3xl font-bold">All Feedbacks</h1>
                <div className="grow flex flex-col space-y-2 overflow-y-auto">
                    {feedbacks.map((fd, i) => (
                        <FeedbackCard count={i + 1} title={`Feedback ${i + 1}`} content={fd.content} date={fd.date} sentiment={fd.sentiment} tag={fd.mainTag} subTag={fd.subTag} />
                    ))}
                </div>
            </div>
            <Outlet />
        </div>
    )
}