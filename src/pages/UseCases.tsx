const UseCases = () => (
    <div style={{ padding: "2rem" }}>
      <h1>Casos de Uso</h1>
      <p>InSightful es útil en múltiples sectores:</p>
      <ul>
        <li>
          <strong>Atención al Cliente:</strong> Mejora la satisfacción de los
          usuarios.
        </li>
        <li>
          <strong>Marketing:</strong> Analiza feedback en redes sociales.
        </li>
        <li>
          <strong>Encuestas Internas:</strong> Optimiza la comunicación dentro de
          los equipos.
        </li>
      </ul>
      <p>Explora ejemplos en nuestros dashboards interactivos.</p>
      <iframe
        src="https://quicksight.aws.amazon.com/embed-url-example"
        title="Dashboard QuickSight"
        style={{
          width: "100%",
          height: "400px",
          border: "none",
          marginTop: "1rem",
        }}
      ></iframe>
    </div>
  );
  
  export default UseCases;
  