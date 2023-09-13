import React from "react";


const AddFriend = props => {
    const {handleChange, handleSubmit, inputValues} = props;

    return(
        <div>
            <h3>Add Friend</h3>
            <form>
                <input 
                    type='text'
                    name='friend-username'
                    placeholder="Enter friend's username..."
                /><br/>
                <input 
                    type='text'
                    name='friend-email'
                    placeholder="Enter friend's email..."
                /><br/>
                <input 
                    type='submit'
                    value='Add Friend!'
                />
            </form>
        </div>
    )
}

export default AddFriend;