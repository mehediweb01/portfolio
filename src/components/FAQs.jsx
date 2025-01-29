import { FAQsInfo } from "../db";
import FaqsCard from "./common/FaqsCard";
import { Header } from "./common/Header";
const FAQs = () => {
  return (
    <div id="faqs" className="py-16">
      <div>
        <Header>FAQs</Header>
      </div>
      <div className="space-y-3 mt-16">
        {FAQsInfo.map((item, index) => (
          <div key={index} className="w-[90%] mx-auto">
            <FaqsCard
              Question={item.question}
              Answer={item.answer}
              NumberOfKey={item.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
