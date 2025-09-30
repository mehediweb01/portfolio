import { FAQsInfo } from "../db";
import { Header } from "./common/Header";
import FaqAnimate from "./faqs/FaqAnimate";
import FaqsCard from "./faqs/FaqsCard";

const FAQs = () => {
  return (
    <div id="FAQs" className="py-16">
      <div>
        <Header>FAQs</Header>
      </div>
      <FaqAnimate>
        {FAQsInfo.map((item, index) => (
          <FaqsCard
            key={index}
            Question={item.question}
            Answer={item.answer}
            NumberOfKey={item.id}
          />
        ))}
      </FaqAnimate>
    </div>
  );
};

export default FAQs;
