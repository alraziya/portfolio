function Showdata({ users }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Verified Users</h1>

      <div style={styles.grid}>
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} style={styles.card}>
              <div style={styles.avatar}>
                {(user.name?.charAt(0) ?? "U").toUpperCase()}
              </div>

              <h2>{user.name}</h2>

              <p style={styles.username}>@{user.username}</p>

              <p>✉️ {user.email}</p>

              <p>📞 {user.phone?.split(" ")[0]}</p>
            </div>
          ))
        ) : (
          <p style={styles.empty}>No users found</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#0f172a",
    color: "white",
    fontFamily: "sans-serif",
  },

  title: {
    textAlign: "center",
    marginBottom: "40px",
    fontSize: "2.5rem",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    margin: "auto",
  },

  card: {
    background: "#1e293b",
    padding: "25px",
    borderRadius: "20px",
    textAlign: "center",
  },

  avatar: {
    width: "70px",
    height: "70px",
    margin: "0 auto 15px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #06b6d4, #9333ea)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },

  username: {
    color: "#94a3b8",
    marginBottom: "10px",
  },

  empty: {
    gridColumn: "1 / -1",
    textAlign: "center",
    color: "#94a3b8",
  },
};

export default Showdata;