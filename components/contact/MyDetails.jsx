import { myInfo } from "@/db";
import BoxComponent from "../contact/Box";
import BoxAnimate from "../contact/BoxAnimate";

const MyDetails = () => {
  return (
    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center w-[90%] mx-auto">
      {myInfo.map((item) => (
        <BoxAnimate key={item.id}>
          <BoxComponent
            icon={item.icon}
            title={item.title}
            content={item.content}
          />
        </BoxAnimate>
      ))}
    </div>
  );
};

export default MyDetails;
