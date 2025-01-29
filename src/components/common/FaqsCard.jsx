import { Accordion, AccordionItem } from "@heroui/react";

const FaqsCard = ({ Question, Answer, NumberOfKey }) => {
  return (
    <Accordion
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            height: "auto",
            overflowY: "unset",
            transition: {
              height: {
                type: "spring",
                stiffness: 500,
                damping: 30,
                duration: 1,
              },
              opacity: {
                easings: "ease",
                duration: 1,
              },
            },
          },
          exit: {
            y: -10,
            opacity: 0,
            height: 0,
            overflowY: "hidden",
            transition: {
              height: {
                easings: "ease",
                duration: 0.25,
              },
              opacity: {
                easings: "ease",
                duration: 0.3,
              },
            },
          },
        },
      }}
      variant="splitted"
      defaultExpandedKeys={"1"}
      selectionMode="single"
    >
      <AccordionItem
        key={NumberOfKey}
        aria-label={Question}
        title={Question}
        className="bg-faqBg rounded-md shadow-inner shadow-black"
      >
        <p className="font-itim text-sm sm:text-base text-black ms-4">
          {Answer}
        </p>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqsCard;
