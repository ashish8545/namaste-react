const Shimmer = () => {
  const cardsLength = 20;

  return (
    <div className="shimmer-container">
      {Array.from({ length: cardsLength }).map((_, i) => (
        <div className="shimmer-card" key={i}>
          <div className="shimmer-image"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
          <div className="shimmer-text"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
