const StarRain = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-white animate-star-fall"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 4}s`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 15 + 10}px`,
            opacity: 0.7
          }}
        >
          ★
        </div>
      ))}
    </div>
  );
};
export default StarRain;