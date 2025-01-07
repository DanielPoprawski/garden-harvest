export default function Card({ icon, text }) {
        return (
                <div style={styles.card}>
                        <div style={styles.icon}>{icon}</div>
                        <div style={styles.text}>{text}</div>
                </div>
        );
}

const styles = {
        card: {
                backgroundColor: "#006032",
                padding: "16px",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.38)",
                width: "200px",
                height: "200px",
                justifyContent: "center",
                flexDirection: "column",
                border: "none",
                borderRadius: "0px",
                color: "white",
                fontWeight: "700",
                alignItems: "bottom",
        },
        icon: {
                marginBottom: "8px",
                fontSize: "48px",
        },
        text: {
                fontSize: "1.1rem",
        },
};
