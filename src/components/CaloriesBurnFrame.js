import { useMemo } from "react";

const CaloriesBurnFrame = ({
  group,
  textBlockFrame,
  frameVectorLorem,
  frameVectorLorem1,
  propRight,
  propLeft,
  propHeight,
  propHeight1,
  propHeight2,
}) => {
  const groupIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  const textBlockFrameStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameVectorLoremStyle = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  const groupGroupStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className="flex-1 flex flex-col items-end justify-start gap-[7px_0px] min-w-[103px] text-center text-3xs text-black font-xs-regular">
      <div className="self-stretch flex flex-row items-end justify-start gap-[0px_19px]">
        <div className="flex flex-row items-start justify-start relative">
          <img
            className="h-[7px] w-[374px] absolute !m-[0] right-[-313px] bottom-[-4.5px] z-[2]"
            alt=""
            src={group}
            style={groupIconStyle}
          />
          <img
            className="h-[134px] w-10 relative z-[3]"
            alt=""
            src={textBlockFrame}
            style={textBlockFrameStyle}
          />
        </div>
        <img
          className="h-[113.6px] w-10 relative z-[3]"
          alt=""
          src={frameVectorLorem}
        />
        <img
          className="h-[74.4px] w-10 relative z-[3]"
          alt=""
          src={frameVectorLorem1}
          style={frameVectorLoremStyle}
        />
      </div>
      <div
        className="flex flex-row items-start justify-start gap-[0px_30px]"
        style={groupGroupStyle}
      >
        <div className="relative z-[2]">Lorem</div>
        <div className="relative z-[2]">Lorem</div>
        <div className="relative z-[2]">Lorem</div>
      </div>
    </div>
  );
};

export default CaloriesBurnFrame;
