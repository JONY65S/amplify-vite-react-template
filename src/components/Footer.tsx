const Footer = () => (
    <footer style={{ padding: "1rem", textAlign: "center", marginTop: "2rem" }}>
      <p>&copy; {new Date().getFullYear()} InSightful</p>
      <a href="/terms">Términos de Uso</a> | <a href="/privacy">Política de Privacidad</a>
    </footer>
  );
  
  export default Footer;
  