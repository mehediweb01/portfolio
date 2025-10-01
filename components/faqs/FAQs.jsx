import { Header } from "@/components/common/Header";
import { FAQsInfo } from "@/db";
import FaqAnimate from "./FaqAnimate";
import FaqsCard from "./FaqsCard";

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
