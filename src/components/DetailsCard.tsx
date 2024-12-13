type DetailsCardProps = {
  ip: string;
  location: string;
  timeZone: string;
  isp: string;
};

export const DetailsCard = ({
  ip,
  location,
  timeZone,
  isp,
}: DetailsCardProps) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 bg-customPurple p-12 z-[1000] rounded-t-2xl flex justify-around gap-10 text-white">
      <div className="flex flex-col justify-center items-center gap-2 ">
        <p className=" text-xs font-semibold uppercase">IP Address</p>
        <p className="text-md font-bold text-center">{ip}</p>
      </div>
      <div className="border-r-2"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-xs font-semibold uppercase">Location</p>
        <p className=" text-md  font-bold text-center">{location}</p>
      </div>
      <div className="border-r-2"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className=" text-xs font-semibold uppercase">Timezone</p>
        <p className=" text-md   font-bold text-center">{timeZone}</p>
      </div>
      <div className="border-r-2 text-"></div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-xs font-semibold uppercase">ISP</p>
        <p className="text-md font-semibold text-center">{isp}</p>
      </div>
    </div>
  );
};
