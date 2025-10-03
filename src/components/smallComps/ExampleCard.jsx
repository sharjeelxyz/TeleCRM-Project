import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import ArrowIcon from "@/assets/arrow.png";

export default function ExampleCard() {
  const cardData = [
    {
      title: "Pending Tasks",
      value: "85",
      highlight: "Down 15% this month",
      description: "Engagement exceeds targets",
      percent: "+15%",
      arrow: "rotate-0",
    },
    {
      title: "Total Records",
      value: "3580",
      highlight: "20% increase this month",
      description: "Engagement exceeds targets",
      percent: "-15%",
      arrow: "rotate-180",
    },
    {
      title: "Weekly Prospects",
      value: "200",
      highlight: "Up 15% this month",
      description: "Engagement exceeds targets",
      percent: "+15%",
      arrow: "rotate-0",
    },
    {
      title: "Hot Leads",
      value: "80",
      highlight: "Strong user retention",
      description: "Engagement exceeds targets",
      percent: "-5%",
      arrow: "rotate-180",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-col-4 gap-3 sm:gap-4 w-full mb-4 bg-blue-">
      {cardData.map((card, index) => (
        <Card
          key={index}
          className="flex flex-col justify-center px-4 sm:px-6 py-2 bg-white border border-gray-200 xl:h-[177px] lg:h-[190px] lg:pb-9 xl:pb-0"
        >
          <CardHeader className="p-0 mb-2 grid grid-cols-2 items-start ">
            <CardTitle className="text-[14px] h-[16px] text-gray-800">
              {card.title}
            </CardTitle>

            <div className="flex items-center w-[63px] h-[22px] gap-1 text-[10px] border border-gray-200 rounded-md px-2 py-0.5 justify-self-end">
              <img
                src={ArrowIcon}
                alt="arrow"
                className={`w-3 h-3 ${card.arrow}`}
              />
              <span className="font-semibold text-xs">{card.percent}</span>
            </div>

            <div className="text-2xl text-[28px] w-[41px] h-[20px] font-bold lg:mt-3 xl:mt-0">
              {card.value}
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[13px] h-[13px] sm:text-sm font-semibold lg:mb-5">
              {card.highlight}
            </p>
            <p className="text-[13px] h-[16px] sm:text-sm text-gray-500 mt-1 mb-1 lg:py-3 xl:py-0">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
