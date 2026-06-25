export default function Loader() {
  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="ring ring1"></div>
        <div className="ring ring2"></div>

        <div className="orbit orbit1">
          <span className="dot"></span>
        </div>

        <div className="orbit orbit2">
          <span className="dot"></span>
        </div>

        <div className="center-core"></div>
      </div>

      <h2 className="loader-title">Sachin</h2>

      <div className="loading-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}