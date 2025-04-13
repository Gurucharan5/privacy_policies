import React from "react";

const AccountDeletion: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Aida Group Chat - Account & Data Deletion Request</h1>

      <section style={styles.section}>
        <h2>Steps to Delete Your Account:</h2>
        <ol>
          <li>Open the <strong>Aida Group Chat</strong> app.</li>
          <li>Go to <strong>Settings &gt; Delete My Account</strong>.</li>
          <li>Confirm your choice — your account will be permanently deleted.</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2>If You Cannot Access the App:</h2>
        <p>
          You may email us at: <a href="mailto:gc.enterprise.app@gmail.com">gc.enterprise.app@gmail.com</a>
        </p>
        <p>Please include your:</p>
        <ul>
          <li>User ID (if available)</li>
          <li>Email address linked to your account</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Data That Will Be Deleted:</h2>
        <ul>
          <li>Your user account and profile</li>
          <li>All group memberships</li>
          <li>Messages and chat history</li>
          <li>Media and uploaded content (if any)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Data That May Be Retained:</h2>
        <ul>
          <li>Metadata like timestamps (up to 30 days)</li>
          <li>Abuse reports or flagged content (up to 90 days)</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Timeframe for Deletion:</h2>
        <p>All data will be permanently deleted within <strong>7 business days</strong> after your request is confirmed.</p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "sans-serif",
    lineHeight: 1.6,
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  section: {
    marginTop: "2rem",
  },
};

export default AccountDeletion;
