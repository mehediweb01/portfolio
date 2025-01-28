const FaqsCard = ({ Question, Answer }) => {
  return (
    <div className="bg-faqBg px-4 py-2 rounded-md shadow-inner shadow-black">
      <h2>Q: {Question}</h2>
      <p>A: {Answer}</p>
    </div>
  );
};

export default FaqsCard;
