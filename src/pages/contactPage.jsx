import React from 'react'

const ContactPage = () => {
    return (
        <>
            <h1>Let’s talk.</h1>
            <p>If you’d like to work together, start a project, or just ask a question — feel free to reach out. I respond to all messages personally.</p>
            <form>
                <h2>Send me a message</h2>
                <label>Name</label>
                <input />
                <label>Email</label>
                <input />
                <label>What can I help you with?</label>
                <select />
                <label>Message</label>
                <textarea></textarea>
            </form>
            <div>
                <p>You can also find me on:</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>LinkedIn</p>
            </div>
        </>
    )
}

export default ContactPage