import { Header } from "@/components/common/Header";
import { educationData } from "@/db";
import AboutAnimate from "../AboutAnimate";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <AboutAnimate className="min-h-screen">
      <div>
        <Header>Education</Header>
      </div>

      <div className="space-y-5 my-8">
        {educationData.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </AboutAnimate>
  );
};

export default Education;
