const SideMenu = () => {
  return (
    <div className="w-[346px] bg-color-white flex flex-col items-center justify-start pt-[155px] pb-[765px] pr-4 pl-[46px] box-border relative gap-[47px] max-w-full text-left text-lg text-gray font-xs-regular mq450:gap-[23px] mq450:pl-5 mq450:box-border mq850:pt-[66px] mq850:pb-[323px] mq850:box-border mq1225:pt-[101px] mq1225:pb-[497px] mq1225:box-border">
      <div className="w-[345px] h-[1311px] relative bg-color-white hidden max-w-full z-[0]" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-3.5 pr-[31px] pl-0">
        <button className="cursor-pointer [border:none] py-4 px-6 bg-primary-900 flex-1 rounded-2xl shadow-[0px_20px_50px_rgba(55,_69,_87,_0.1)] flex flex-row items-center justify-start gap-[0px_24px] z-[1] hover:bg-mediumslateblue">
          <img className="h-8 w-8 relative" alt="" src="/graph-1.svg" />
          <div className="relative text-lg font-semibold font-xs-regular text-color-white text-left">
            Dashboard
          </div>
        </button>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[21px] pl-[17px]">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_29px]">
          <img
            className="h-[30.5px] w-[37.2px] relative z-[2]"
            loading="lazy"
            alt=""
            src="/group.svg"
          />
          <h2 className="m-0 flex-1 relative text-inherit font-medium font-inherit z-[2]">
            Leaderboard
          </h2>
        </div>
      </div>
      <div className="self-stretch h-[34px] flex flex-row items-start justify-start pt-0 pb-1 pr-0 pl-[17px] box-border">
        <div className="flex-1 flex flex-row items-center justify-start gap-[0px_29px]">
          <img
            className="h-[30.5px] w-[37.2px] relative overflow-hidden shrink-0 z-[2]"
            alt=""
          />
          <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[2]">
            Track Progress
          </h2>
        </div>
      </div>
      <div className="w-[30px] h-[27.9px] relative overflow-hidden shrink-0 hidden z-[4]" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[17px]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[31px_0px] mq450:gap-[15px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-0 gap-[0px_28px]">
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-[37px] h-[45px] relative z-[3]"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
            </div>
            <h2 className="m-0 h-[25.8px] w-[163.9px] relative text-inherit font-medium font-inherit inline-block shrink-0 z-[2]">
              Exercise Progression
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[0px_29px]">
            <img
              className="h-[30.5px] w-[37.2px] relative overflow-hidden shrink-0 z-[2]"
              alt=""
            />
            <h2 className="m-0 flex-1 relative text-inherit font-medium font-inherit z-[2]">
              Activity Log
            </h2>
          </div>
        </div>
      </div>
      <img
        className="w-[33px] h-[34px] absolute !m-[0] top-[356px] left-[63px] overflow-hidden shrink-0 z-[3]"
        loading="lazy"
        alt=""
        src="/activitylogicon-2.svg"
      />
      <img
        className="w-[34px] h-[33px] absolute !m-[0] top-[511px] left-[64px] overflow-hidden shrink-0 z-[3]"
        loading="lazy"
        alt=""
        src="/workinghoursicon-3.svg"
      />
    </div>
  );
};

export default SideMenu;
