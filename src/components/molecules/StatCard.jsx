const StatCard = ({ title, value }) => {
  return (
    <div className="w-full bg-white rounded-xl overflow-hidden shadow-sm border border-purple-200">
      <div className="bg-primary py-2 px-4 text-center">
        <h3 className="text-white text-sm font-semibold tracking-wide font-lexend">
          {title}
        </h3>
      </div>

      <div className="bg-gray-50/50 py-5 text-center">
        <span className=" font-lexend font-semibold text-2xl sm:text-[40px]  tracking-normal text-black">
          {value}
        </span>
      </div>
    </div>
  );
};

export default StatCard;
