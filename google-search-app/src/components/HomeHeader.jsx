import ProfileIcon from "./ProfileIcon";

const HomeHeader = () => {
  return (
    <header className="h-16 flex justify-between md:justify-end item-center gap-4 px-0.5">
      <div className="flex gap-4 ">
        <span className="text-black/[0.87] text-[13px] line-height hover:underLine cursor-pointer">
          Gmail
        </span>
        <span className="text-black/[0.87] text-[13px] line-height hover:underLine cursor-pointer">
          Images
        </span>
      </div>
      <ProfileIcon />
    </header>
  );
};

export default HomeHeader;
