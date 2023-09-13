import React from "react";


const FriendsList = props => {
    const friends = [{
        name: 'John Doe',
        email: 'johndoe@johndoe.com'
    }, 
    {
        name: 'Rick James',
        email: 'imrickjames@yahoo.com'
    },
    {
        name: 'Jimmy Buffet',
        email: 'jamesbuff@margaritaville.com'
    }];

    return(
        <>
            <h2>Friends List</h2>
            <div className="friend-container">
                {
                    friends.map((fr, i) => (
                        
                        <div key={i} className="friend-card">
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