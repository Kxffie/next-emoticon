import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '../styles/suggestion.module.scss'

function ContactForm() {
    const [state, handleSubmit] = useForm("xnqwvqnl");

    if (state.succeeded) {
        return <center><h2>Thanks for suggesting!</h2></center>;
    }

    return (
        <div className={styles.main}>

            <form onSubmit={handleSubmit} className={styles.form}>
                <u><center><h2>Suggestions</h2></center></u>

                <label htmlFor="email" className={styles.emailName}>Email Address</label> <br />
                <input id="email" type="email" name="email" className={styles.email} />
                <ValidationError prefix="Email" field="email" errors={state.errors} />

                <br />

                <label htmlFor="message" className={styles.messageName}>Message</label> <br />
                <textarea id="message" name="message" className={styles.message} />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <br />

                <button type="submit" disabled={state.submitting} className={styles.submit}>
                    Submit
                </button>

            </form>
        </div>
    );
}
    function SuggestionForm() {
    return (
        <ContactForm />
    );

}
export default SuggestionForm;