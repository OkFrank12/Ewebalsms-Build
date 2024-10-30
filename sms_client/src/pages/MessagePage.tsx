import Logo from "../static/Logo";
import ewebalLogo from "../assets/Ewebal_Logo.png";

const MessagePage = () => {
  return (
    <div style={styles.container}>
      <Logo color="#043260" image={ewebalLogo} />
      <div style={styles.messageBox}>
        <h1 style={styles.heading}>Registration Successful!</h1>
        <p style={styles.message}>
          Thank you for registering on our Bulk SMS platform. A confirmation
          email has been sent to your account. Please check your email and
          follow the instructions to complete the registration process.
        </p>
        <br />
        <a style={styles.a} href="https://mail.google.com">
          Go to Gmail
        </a>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    background: "#f4f4f4",
  },
  messageBox: {
    background: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  heading: {
    color: "#007BFF",
  },
  message: {
    fontSize: "16px",
    lineHeight: "1.6",
    marginTop: "15px",
  },
  a: {
    padding: "10px",
    width: "100px",
    height: "100px",
    backgroundColor: "#043260",
    textDecoration: "none",
    color: "white",
  },
};

export default MessagePage;
