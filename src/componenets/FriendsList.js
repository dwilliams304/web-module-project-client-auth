import React, { useState, useEffect } from "react";
import axios from "axios";


const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios.get("http://localhost:9000/api/friends", {
            headers: {
                authorization: token
            }})
            .then(res => setFriends(res.data))
            .catch(err => console.log(err))

    }, [])


    return(
        <>
            <h2>Friends List</h2>
            <div className="friend-container">
                {
                    friends.map(fr => (
                        
                        <div key={fr.id} className="friend-card">
                            <h4>Name: {fr.name}</h4>
                            <p>Email: {fr.email}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default FriendsList;