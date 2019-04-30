import React from 'react';
import Git from '../img/git.svg';

const GitUserForm = (props) => {
    return(
        <div className="findGit">
            <img src={Git} alt="Git" />
            <form onSubmit={props.getUser}>
                <input type="text" name="username" placeholder="I need Git Login..." required/>
            </form>
        </div>
    )
}
export default GitUserForm;