import React from 'react'

const TurnOffAutocompleteApp = () => {
    return (
        <>
            <NoAutocompleteForm />
        </>
    )
}

export default TurnOffAutocompleteApp

const NoAutocompleteForm = () => {
    return (
        <form>
            {/* Input field with autocomplete turned off */}
            <input type="text" name="username" autoComplete="off" placeholder="Username" />

            {/* Input field with autocomplete turned off (for password) */}
            <input type="password" name="password" autoComplete="new-password" placeholder="Password" />

            <button type="submit">Submit</button>
        </form>
    );
};
