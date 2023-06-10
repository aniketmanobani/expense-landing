import React, { useState } from 'react';

const DeleteAccountForm = () => {
    const [email, setEmail] = useState('');
    const [confirmationSent, setConfirmationSent] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Send delete account confirmation link to the provided email
        setConfirmationSent(true);
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Delete Account</h2>
            {confirmationSent ? (
                <p style={styles.confirmation}>
                    Delete account confirmation link sent to your email.
                </p>
            ) : (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Email ID:
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            style={styles.input}
                            required
                        />
                    </label>
                    <button type="submit" style={styles.button}>
                        Request Confirmation
                    </button>
                </form>
            )}
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#eaf2f8',
    },
    title: {
        marginBottom: '20px',
        color: '#333',
        textAlign: 'center',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    label: {
        marginBottom: '10px',
        color: '#555',
    },
    input: {
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
        width: '250px',
    },
    button: {
        marginTop: '10px',
        padding: '8px 16px',
        backgroundColor: '#4caf50',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    confirmation: {
        textAlign: 'center',
        color: '#555',
    },
};

export default DeleteAccountForm;
