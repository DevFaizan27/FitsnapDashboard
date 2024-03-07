import SideMenu from "../components/SideMenu";
import CaloriesBurnFrame from "../components/CaloriesBurnFrame";
import Month202304April from "../components/Month202304April";

const DashboardDesign = () => {
  return (
    <div className="w-full relative bg-whitesmoke-200 box-border overflow-hidden flex flex-col items-end justify-start gap-[82px_0px] tracking-[normal] text-center text-3xs text-black font-xs-regular border-[1px] border-solid border-black mq850:gap-[20px_0px] mq1225:gap-[41px_0px]">
      <main className="mt-[-7px] self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-px pl-0 box-border [row-gap:20px] max-w-full">
        <SideMenu />
        <section className="flex-1 flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[1024px] max-w-full text-left text-3xl text-primary-dark-shade font-xs-regular mq1225:min-w-full">
          <div className="self-stretch flex flex-col items-center justify-start gap-[27px_0px] max-w-full">
            <header className="self-stretch bg-color-white flex flex-row items-center justify-between py-[30px] pr-11 pl-[55px] box-border top-[0] z-[99] sticky gap-[20px] max-w-full text-left text-17xl text-greys-blue-grey-900 font-xs-regular mq1225:pl-[27px] mq1225:pr-[22px] mq1225:box-border">
              <div className="h-[120px] w-[1575px] relative bg-color-white hidden max-w-full" />
              <div className="w-[289px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                <h1 className="m-0 relative text-inherit leading-[140%] font-semibold font-inherit whitespace-nowrap z-[1]">
                  Dashboard
                </h1>
              </div>
              <div className="w-[683px] flex flex-row items-center justify-start gap-[0px_57px] max-w-full text-lg text-greys-blue-grey-700 mq850:gap-[0px_28px]">
                <div className="flex-1 rounded-2xl bg-greys-blue-grey-300 flex flex-row items-center justify-start py-3.5 px-6 box-border gap-[0px_8px] max-w-full z-[1]">
                  <img
                    className="h-8 w-8 relative overflow-hidden shrink-0"
                    alt=""
                    src="/magnifier.svg"
                  />
                  <div className="relative whitespace-nowrap">
                    Search here...
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start gap-[0px_16px] text-color-black">
                  <img
                    className="h-[25px] w-[25px] relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/twemojiflagindia.svg"
                  />
                  <div className="relative font-semibold z-[1]">IND</div>
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="h-[60px] w-[298px] relative text-base">
                <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-center justify-start gap-[0px_22px] h-full">
                  <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                    <img
                      className="w-12 h-12 relative z-[1]"
                      loading="lazy"
                      alt=""
                      src="/notifications.svg"
                    />
                  </div>
                  <img
                    className="h-[60px] w-[60px] relative rounded-2xl object-cover z-[1]"
                    loading="lazy"
                    alt=""
                    src="/rectangle-1393@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
                    <h3 className="m-0 relative text-inherit leading-[24px] font-medium font-inherit z-[1]">
                      Lorem
                    </h3>
                    <div className="self-stretch relative text-sm leading-[20px] text-greys-blue-grey-700 z-[1]">
                      Admin
                    </div>
                  </div>
                </div>
                <img
                  className="absolute top-[10px] left-[260px] w-4 h-4 z-[1]"
                  alt=""
                  src="/group-21861.svg"
                />
              </div>
            </header>
            <div className="w-[1497px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border max-w-full mq1500:max-w-[calc(100%_-_2px)]">
              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-px pl-0 box-border gap-[0px_25px] max-w-full mq1225:flex-wrap">
                <div className="flex-1 rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border flex flex-col items-start justify-start pt-[18px] px-0 pb-6 gap-[8px] min-w-[363px] max-w-full text-base text-greys-blue-grey-800 border-[1px] border-solid border-whitesmoke-100 mq450:min-w-full">
                  <div className="self-stretch h-[334px] relative rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border hidden border-[1px] border-solid border-whitesmoke-100" />
                  <div className="w-[263px] flex flex-row items-start justify-start pt-0 px-[29px] pb-[13px] box-border text-3xl text-primary-dark-shade">
                    <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[26px]">
                      Highest Weight
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                    <div className="w-[472px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-mid text-lightslategray font-open-sans">
                      <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq450:flex-wrap">
                        <div className="h-[17px] w-[138px] flex flex-row items-end justify-start gap-[0px_58.5px]">
                          <h3 className="m-0 relative text-inherit leading-[16px] font-normal font-inherit z-[1]">
                            #
                          </h3>
                          <h3 className="m-0 flex-1 relative text-inherit leading-[16px] font-normal font-inherit z-[1]">
                            Name
                          </h3>
                        </div>
                        <h3 className="m-0 w-[166.1px] relative text-inherit leading-[16px] font-normal font-inherit inline-block shrink-0 z-[1]">
                          Weight Lift (in kg)
                        </h3>
                      </div>
                    </div>
                    <div className="self-stretch h-7 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center pt-2.5 px-0 pb-[9px] box-border max-w-full z-[1]">
                        <div className="self-stretch flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                    </div>
                    <div className="self-stretch h-[30px] flex flex-row items-start justify-start pt-0 px-[23px] pb-2 box-border max-w-full">
                      <div className="h-[22.8px] flex-1 overflow-hidden flex flex-row items-end justify-start gap-[0px_34px] max-w-full z-[1] mq450:gap-[0px_17px]">
                        <div className="w-9 relative leading-[20px] inline-block shrink-0">
                          01
                        </div>
                        <div className="mt-[-2px] w-[162px] flex flex-col items-start justify-start">
                          <h3 className="mt-[-2px] m-0 w-[61px] relative text-inherit leading-[20px] font-normal font-inherit inline-block">
                            Ankit
                          </h3>
                        </div>
                        <div className="mb-[-21px] w-[42.4px] relative leading-[20px] inline-block shrink-0">
                          150 kg
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-7 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center pt-2.5 px-0 pb-[9px] box-border max-w-full z-[1]">
                        <div className="self-stretch flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                    </div>
                    <div className="self-stretch h-[30px] flex flex-row items-start justify-start pt-0 px-[23px] pb-2 box-border max-w-full">
                      <div className="h-[22.8px] flex-1 overflow-hidden flex flex-row items-start justify-start pt-px px-0 pb-0 box-border gap-[0px_44px] max-w-full z-[1] mq450:gap-[0px_22px]">
                        <div className="w-[26px] relative text-sm leading-[20px] inline-block shrink-0">
                          02
                        </div>
                        <div className="w-[152px] flex flex-col items-start justify-start">
                          <h3 className="m-0 w-[65px] relative text-inherit leading-[20px] font-normal font-inherit inline-block">
                            Vikky
                          </h3>
                        </div>
                        <div className="mb-[-19px] w-[42.4px] relative leading-[20px] inline-block shrink-0">
                          140 kg
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-7 flex flex-row items-start justify-start pt-0 px-0 pb-2 box-border max-w-full">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-center pt-2.5 px-0 pb-[9px] box-border max-w-full z-[1]">
                        <div className="self-stretch flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 px-[23px] box-border max-w-full">
                      <div className="h-[22.8px] flex-1 overflow-hidden flex flex-row items-end justify-start gap-[0px_42px] max-w-full z-[1] mq450:gap-[0px_21px]">
                        <div className="w-[26px] relative text-sm leading-[20px] inline-block shrink-0">
                          03
                        </div>
                        <div className="mt-[-1px] w-[156px] flex flex-col items-start justify-start">
                          <h3 className="mt-[-1px] m-0 w-[71px] relative text-inherit leading-[20px] font-normal font-inherit inline-block">
                            Happy
                          </h3>
                        </div>
                        <div className="mb-[-21px] w-[38.1px] relative leading-[20px] inline-block shrink-0">
                          90 kg
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[8px_0px] max-w-full">
                    <div className="self-stretch h-5 flex flex-row items-center justify-center pt-2.5 px-0 pb-[9px] box-border max-w-full z-[1]">
                      <div className="self-stretch flex-1 relative bg-aliceblue max-w-full" />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[23px] box-border max-w-full">
                      <div className="h-[22.8px] flex-1 overflow-hidden flex flex-row items-start justify-start gap-[0px_36px] max-w-full z-[1] mq450:gap-[0px_18px]">
                        <div className="w-[34px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border text-sm">
                          <div className="self-stretch relative leading-[20px]">
                            04
                          </div>
                        </div>
                        <div className="mt-[-1px] w-40 flex flex-col items-start justify-start">
                          <h3 className="mt-[-1px] m-0 w-14 relative text-inherit leading-[20px] font-normal font-inherit inline-block">
                            Virat
                          </h3>
                        </div>
                        <div className="mb-[-19px] w-[38.1px] relative leading-[20px] inline-block shrink-0">
                          80 kg
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[466px] rounded-xl bg-color-white shadow-[0px_4px_4px_rgba(243,_232,_255,_0.25)] flex flex-col items-start justify-start pt-[23px] pb-[60px] pr-[37px] pl-[31px] box-border gap-[26px] max-w-full">
                  <div className="w-[466px] h-[329px] relative rounded-xl bg-color-white shadow-[0px_4px_4px_rgba(243,_232,_255,_0.25)] hidden max-w-full" />
                  <h1 className="m-0 w-[195px] relative text-inherit leading-[32px] font-semibold font-inherit inline-block z-[1] mq450:text-lg mq450:leading-[26px]">
                    One Rep Max
                  </h1>
                  <div className="self-stretch flex flex-row items-end justify-start gap-[0px_21px] text-right text-xs text-black font-inter mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[15px]">
                      <div className="flex flex-row items-center justify-start">
                        <div className="flex flex-col items-end justify-start gap-[21px_0px]">
                          <div className="flex flex-row items-start justify-start gap-[0px_5px]">
                            <div className="relative z-[2]">1000</div>
                            <div className="h-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                              <img
                                className="w-1.5 h-px relative z-[4]"
                                alt=""
                                src="/vector-1.svg"
                              />
                            </div>
                          </div>
                          <div className="flex flex-col items-end justify-start gap-[25px_0px]">
                            <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                              <div className="relative z-[2]">750</div>
                              <img
                                className="h-px w-1.5 relative z-[4]"
                                alt=""
                                src="/vector-2.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                              <div className="relative z-[2]">500</div>
                              <img
                                className="h-px w-1.5 relative z-[4]"
                                alt=""
                                src="/vector-2.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                              <div className="relative z-[2]">250</div>
                              <img
                                className="h-px w-1.5 relative z-[4]"
                                alt=""
                                src="/vector-2.svg"
                              />
                            </div>
                            <div className="flex flex-row items-center justify-start gap-[0px_5px]">
                              <div className="relative z-[2]">0</div>
                              <img
                                className="h-px w-1.5 relative z-[4]"
                                alt=""
                                src="/vector-2.svg"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="h-[163px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border">
                          <img
                            className="w-px flex-1 relative max-h-full z-[3]"
                            alt=""
                            src="/vector-6.svg"
                          />
                        </div>
                      </div>
                    </div>
                    <CaloriesBurnFrame
                      group="/group-1.svg"
                      textBlockFrame="/vector-7.svg"
                      frameVectorLorem="/vector-8.svg"
                      frameVectorLorem1="/vector-9.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-start gap-[7px_0px] min-w-[103px] text-center text-3xs font-xs-regular">
                      <div className="self-stretch flex flex-row items-end justify-start gap-[0px_19px]">
                        <img
                          className="h-[107px] w-10 relative z-[3]"
                          alt=""
                          src="/vector-10.svg"
                        />
                        <img
                          className="h-[133px] w-10 relative z-[3]"
                          alt=""
                          src="/vector-11.svg"
                        />
                        <img
                          className="h-[116px] w-10 relative z-[3]"
                          alt=""
                          src="/vector-12.svg"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-start gap-[0px_28px]">
                        <div className="relative z-[2]">Lorem</div>
                        <div className="relative z-[2]">Lorem</div>
                        <div className="relative z-[2]">Lorem</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[420px] rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border flex flex-col items-center justify-start pt-[23px] px-2.5 pb-3.5 gap-[21px] max-w-full border-[1px] border-solid border-whitesmoke-100">
                  <div className="w-[420px] h-[329px] relative rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border hidden max-w-full border-[1px] border-solid border-whitesmoke-100" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[11px]">
                    <h1 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[26px]">
                      Monthly Performance
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[15px_0px] max-w-full text-base text-lightslategray">
                    <div className="self-stretch h-[167px] relative">
                      <img
                        className="absolute top-[0px] left-[0px] w-full h-full z-[1]"
                        alt=""
                        src="/group-17.svg"
                      />
                      <img
                        className="absolute top-[72.2px] left-[0px] w-[396px] h-[93.3px] z-[2]"
                        loading="lazy"
                        alt=""
                        src="/group-16.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start py-0 px-[15px] box-border gap-[6px_0px] max-w-full">
                      <div className="self-stretch h-[21px] flex flex-row items-center justify-center py-2.5 px-0 box-border max-w-full z-[1]">
                        <div className="self-stretch flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                      <div className="flex flex-row items-center justify-start gap-[0px_8px]">
                        <div className="flex flex-row items-center justify-start py-0 pr-1.5 pl-0 gap-[0px_8px]">
                          <img
                            className="h-[9px] w-[19px] relative z-[1]"
                            loading="lazy"
                            alt=""
                            src="/group-18.svg"
                          />
                          <h3 className="m-0 relative text-inherit leading-[30px] font-normal font-inherit z-[1]">
                            Last Month
                          </h3>
                        </div>
                        <div className="flex flex-col items-start justify-start pt-1.5 pb-0 pr-1.5 pl-0">
                          <div className="w-px h-6 relative bg-silver z-[1]" />
                        </div>
                        <img
                          className="h-[9px] w-[19px] relative z-[1]"
                          loading="lazy"
                          alt=""
                          src="/group-18-copy.svg"
                        />
                        <h3 className="m-0 relative text-inherit leading-[30px] font-normal font-inherit z-[1]">
                          This Month
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1433px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-base text-greys-blue-grey-800">
              <div className="w-[1339px] flex flex-row items-start justify-start gap-[0px_55px] max-w-full mq850:gap-[0px_27px] mq1225:flex-wrap">
                <div className="h-[328px] w-[635px] rounded-xl bg-color-white shadow-[0px_4px_4px_rgba(255,_244,_222,_0.25)] box-border flex flex-col items-start justify-start py-[23px] px-0 gap-[8px] min-w-[635px] max-w-full border-[1px] border-solid border-whitesmoke-100 mq850:h-auto mq850:min-w-full mq1225:flex-1">
                  <div className="self-stretch h-80 relative rounded-xl bg-color-white box-border hidden border-[1px] border-solid border-whitesmoke-100" />
                  <div className="w-[244px] flex flex-row items-start justify-start pt-0 px-[43px] pb-2 box-border shrink-0 text-3xl text-primary-dark-shade">
                    <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[26px]">
                      Accuracy
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[7px_0px] max-w-full shrink-0">
                    <div className="self-stretch flex flex-col items-center justify-start gap-[1px_0px] max-w-full text-mid text-lightslategray font-open-sans">
                      <div className="w-[606px] flex flex-row items-start justify-start py-0 pr-5 pl-7 box-border max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-between min-h-[15px] max-w-full gap-[20px] mq850:flex-wrap">
                          <h3 className="m-0 w-[76.5px] relative text-inherit leading-[16px] font-normal font-inherit inline-block shrink-0 z-[1]">
                            Name
                          </h3>
                          <h3 className="m-0 w-[281.2px] relative text-inherit leading-[16px] font-normal font-inherit inline-block shrink-0 z-[1]">
                            Accuracy Achieved
                          </h3>
                        </div>
                      </div>
                      <div className="self-stretch h-5 rounded-sm flex flex-row items-center justify-center pt-[9px] px-0 pb-2.5 box-border max-w-full z-[1]">
                        <div className="h-[0.9px] flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
                      <div className="flex flex-row items-center justify-start gap-[0px_43px] max-w-full mq850:flex-wrap mq850:gap-[0px_21px]">
                        <div className="w-[227px] flex flex-col items-start justify-start">
                          <h3 className="m-0 w-[67.4px] relative text-inherit leading-[20px] font-normal font-inherit inline-block z-[1]">
                            Ankit
                          </h3>
                        </div>
                        <div className="h-1.5 w-[177px] flex flex-col items-start justify-start pt-0 px-0 pb-0.5 box-border">
                          <div className="self-stretch h-[3.6px] relative rounded-lg bg-lightsteelblue z-[1]">
                            <div className="absolute h-full top-[0%] right-[0px] bottom-[0%] rounded-lg bg-lightsteelblue w-full hidden" />
                            <div className="absolute h-full top-[0%] right-[39.4px] bottom-[0%] rounded-lg bg-darkslateblue w-[137.8px] z-[1]" />
                          </div>
                        </div>
                        <div className="h-[21.9px] w-[49.2px] rounded-lg bg-lightblue box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0.5 px-0.5 pb-[5px] z-[1] text-center text-3xs text-navy font-open-sans border-[1px] border-solid border-darkslateblue">
                          <div className="h-[21.9px] w-[49.2px] relative rounded-lg bg-lightblue box-border hidden border-[1px] border-solid border-darkslateblue" />
                          <div className="w-[25.9px] relative leading-[16px] inline-block shrink-0 z-[1]">
                            80%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch h-5 rounded-sm flex flex-row items-center justify-center pt-[9px] px-0 pb-2.5 box-border max-w-full z-[1]">
                      <div className="h-[0.9px] flex-1 relative bg-aliceblue max-w-full" />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
                      <div className="flex flex-row items-start justify-center gap-[0px_43px] min-h-[23px] max-w-full mq850:flex-wrap mq850:gap-[0px_21px]">
                        <div className="w-[227px] flex flex-col items-start justify-start">
                          <h3 className="m-0 w-[60.9px] relative text-inherit leading-[20px] font-normal font-inherit inline-block z-[1]">
                            Vikky
                          </h3>
                        </div>
                        <div className="h-[11px] w-[177px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                          <div className="self-stretch h-[3.6px] relative rounded-lg bg-plum-100 z-[1]">
                            <div className="absolute h-full top-[0%] right-[0px] bottom-[0%] rounded-lg bg-plum-100 w-full hidden" />
                            <div className="absolute h-full top-[0%] right-[68.9px] bottom-[0%] rounded-lg bg-fuchsia w-[108.3px] z-[1]" />
                          </div>
                        </div>
                        <div className="h-[21.7px] w-[49.2px] rounded-lg bg-colors-green-50 box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-0.5 px-0.5 pb-[3px] z-[1] text-center text-3xs text-fuchsia font-open-sans border-[1px] border-solid border-fuchsia">
                          <div className="h-[21.7px] w-[49.2px] relative rounded-lg bg-colors-green-50 box-border hidden border-[1px] border-solid border-fuchsia" />
                          <div className="w-[25.6px] relative leading-[16px] inline-block shrink-0 z-[1]">
                            60%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-center justify-start gap-[5px_0px] max-w-full">
                      <div className="self-stretch h-5 rounded-sm flex flex-row items-center justify-center pt-[9px] px-0 pb-2.5 box-border max-w-full z-[1]">
                        <div className="h-[0.9px] flex-1 relative bg-aliceblue max-w-full" />
                      </div>
                      <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
                        <div className="flex flex-row items-end justify-center gap-[0px_45px] min-h-[24px] max-w-full mq850:flex-wrap mq850:gap-[0px_22px]">
                          <div className="h-[23px] w-[222px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                            <h3 className="m-0 w-[71.3px] relative text-inherit leading-[20px] font-normal font-inherit inline-block z-[1]">
                              Happy
                            </h3>
                          </div>
                          <div className="h-[11px] w-[177px] flex flex-col items-start justify-start pt-0 px-0 pb-[7px] box-border">
                            <div className="self-stretch h-[3.6px] relative rounded-lg bg-plum-200 z-[1]">
                              <div className="absolute h-full top-[-2.78%] right-[0.3px] bottom-[2.78%] rounded-lg bg-plum-200 w-full hidden" />
                              <div className="absolute h-full top-[-2.78%] right-[79.1px] bottom-[2.78%] rounded-lg bg-blueviolet w-[98.4px] z-[1]" />
                            </div>
                          </div>
                          <div className="h-[21.9px] w-[49.2px] rounded-lg bg-supporting-color-violet-shade box-border overflow-hidden shrink-0 flex flex-row items-center justify-center pt-[3px] pb-0.5 pr-2.5 pl-[11px] z-[1] text-center text-3xs text-blueviolet font-open-sans border-[1px] border-solid border-blueviolet">
                            <div className="h-[21.9px] w-[49.2px] relative rounded-lg bg-supporting-color-violet-shade box-border hidden border-[1px] border-solid border-blueviolet" />
                            <div className="w-[25.6px] relative leading-[16px] inline-block shrink-0 z-[1]">
                              50%
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-start gap-[8px_0px] max-w-full shrink-0">
                    <div className="self-stretch h-5 rounded-sm flex flex-row items-center justify-center pt-[9px] px-0 pb-2.5 box-border max-w-full z-[1]">
                      <div className="h-[0.9px] flex-1 relative bg-aliceblue max-w-full" />
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full">
                      <div className="flex flex-row items-center justify-center gap-[0px_43px] min-h-[23px] max-w-full mq850:flex-wrap mq850:gap-[0px_21px]">
                        <div className="w-[227px] flex flex-col items-start justify-start">
                          <h3 className="m-0 w-[67.4px] relative text-inherit leading-[20px] font-normal font-inherit inline-block z-[1]">
                            Virat
                          </h3>
                        </div>
                        <div className="w-[177px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                          <div className="self-stretch h-1 relative rounded-lg bg-navajowhite z-[1]">
                            <div className="absolute top-[-0.2px] left-[0.3px] rounded-lg bg-navajowhite w-[177.2px] h-[3.6px] hidden z-[1]" />
                            <div className="absolute top-[-0.2px] left-[0.3px] rounded-lg bg-darkorange-100 w-[59.1px] h-[3.6px] z-[2]" />
                          </div>
                        </div>
                        <div className="w-[49px] rounded-lg bg-supporting-color-yellow-shade box-border flex flex-row items-center justify-center pt-[3px] px-0.5 pb-0.5 z-[1] text-center text-3xs text-darkorange-200 font-open-sans border-[1px] border-solid border-darkorange-200">
                          <div className="h-[21.9px] w-[49.2px] relative rounded-lg bg-supporting-color-yellow-shade box-border hidden border-[1px] border-solid border-darkorange-200" />
                          <div className="w-[25.6px] relative leading-[16px] inline-block shrink-0 z-[2]">
                            25%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex-1 rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border flex flex-col items-center justify-start pt-6 px-6 pb-[25px] relative gap-[23px] min-w-[422px] max-w-full text-3xl text-primary-dark-shade border-[1px] border-solid border-whitesmoke-100 mq850:min-w-full">
                  <div className="w-[649px] h-[319.7px] relative rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border hidden max-w-full z-[0] border-[1px] border-solid border-whitesmoke-100" />
                  <div className="self-stretch flex flex-row items-start justify-start py-0 px-[3px] shrink-0">
                    <h1 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[26px]">
                      Top performer of the week
                    </h1>
                  </div>
                  <img
                    className="w-[553.4px] h-[0.9px] absolute !m-[0] right-[28.2px] bottom-[119.3px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/path-2-copy.svg"
                  />
                  <img
                    className="w-[553.4px] h-[0.9px] absolute !m-[0] right-[28.2px] bottom-[148.5px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/path-2-copy-2.svg"
                  />
                  <img
                    className="w-[553.4px] h-[0.9px] absolute !m-[0] top-[141.2px] right-[28.2px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/path-2-copy-3.svg"
                  />
                  <img
                    className="w-[553.4px] h-[0.9px] absolute !m-[0] top-[112px] right-[28.2px] z-[1]"
                    loading="lazy"
                    alt=""
                    src="/path-2-copy-4.svg"
                  />
                  <div className="self-stretch flex flex-col items-start justify-start py-0 px-0.5 box-border gap-[7px_0px] max-w-full shrink-0 text-xs text-primary-200">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[0px_17px] max-w-full mq850:flex-wrap">
                      <div className="relative leading-[16px] z-[1]">500</div>
                      <img
                        className="flex-1 relative max-w-full overflow-hidden max-h-full min-w-[359px] mt-[-1px] z-[1] mq850:min-w-full"
                        loading="lazy"
                        alt=""
                        src="/path-2-copy-5.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[0px_17px] max-w-full mq850:flex-wrap">
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <div className="flex flex-col items-start justify-start gap-[15px_0px]">
                          <div className="relative leading-[16px] z-[1]">
                            400
                          </div>
                          <div className="relative leading-[16px] z-[1]">
                            300
                          </div>
                          <div className="relative leading-[16px] z-[1]">
                            200
                          </div>
                          <div className="relative leading-[16px] z-[1]">
                            100
                          </div>
                          <div className="relative leading-[16px] z-[1]">0</div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[361px] max-w-full text-center mq850:min-w-full">
                        <div className="self-stretch flex flex-col items-center justify-start max-w-full">
                          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-6 box-border max-w-full">
                            <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq850:flex-wrap">
                              <div className="h-20 flex flex-row items-end justify-start py-0 pr-1.5 pl-0 box-border gap-[0px_4px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[72.9px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-[98px] flex flex-row items-end justify-start gap-[0px_5px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[68.3px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-[131px] flex flex-row items-end justify-start gap-[0px_4px]">
                                <div className="h-[32.8px] w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-[91px] flex flex-row items-end justify-start gap-[0px_5px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[36.4px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-[69px] flex flex-row items-end justify-start gap-[0px_5px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[64.7px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-24 flex flex-row items-end justify-start py-0 pr-[5px] pl-0 box-border gap-[0px_5px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[77.4px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                              <div className="h-[122px] flex flex-row items-end justify-start gap-[0px_5px]">
                                <div className="self-stretch w-[12.1px] relative rounded-sm bg-dodgerblue z-[2]" />
                                <div className="h-[63.8px] w-[12.1px] relative rounded-sm bg-mediumspringgreen z-[2]" />
                              </div>
                            </div>
                          </div>
                          <img
                            className="self-stretch relative max-w-full overflow-hidden max-h-full mt-[-1px] z-[1]"
                            loading="lazy"
                            alt=""
                            src="/path-2.svg"
                          />
                        </div>
                        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_1px] mq850:flex-wrap">
                          <div className="w-[78.5px] relative leading-[16px] inline-block shrink-0 z-[1]">
                            Monday
                          </div>
                          <div className="h-[51px] flex-1 relative min-w-[205px]">
                            <div className="absolute top-[0.2px] left-[0.4px] leading-[16px] inline-block w-[78.5px] h-[14.6px] z-[1]">
                              Tuesday
                            </div>
                            <div className="absolute top-[0px] left-[70.5px] flex flex-col items-end justify-start py-0 pr-0 pl-px gap-[22px_0px]">
                              <div className="relative leading-[16px] z-[1]">
                                Wednesday
                              </div>
                              <div className="h-[14.6px] overflow-hidden shrink-0 flex flex-row items-center justify-start py-0 pr-[29px] pl-0 box-border gap-[0px_7px] z-[1] text-left text-sm text-darkslategray-300 font-open-sans">
                                <div className="h-2.5 w-[11.1px] relative rounded-md bg-dodgerblue" />
                                <div className="mt-[-2px] relative leading-[16px] font-semibold">
                                  Rahul
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[0px] left-[158.5px] w-[159px] h-[52px] flex flex-col items-center justify-start gap-[22px_0px]">
                              <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[0px_2px]">
                                <div className="flex-1 relative leading-[16px] z-[1]">
                                  Thursday
                                </div>
                                <div className="flex-1 relative leading-[16px] z-[1]">
                                  Friday
                                </div>
                              </div>
                              <div className="flex-1 flex flex-row items-start justify-start py-0 pr-5 pl-[30px] text-left text-sm text-darkslategray-300 font-open-sans">
                                <div className="h-[14.6px] overflow-hidden flex flex-row items-center justify-start py-0 pr-[33px] pl-0 box-border gap-[0px_7px] z-[1]">
                                  <div className="h-2.5 w-[11.1px] relative rounded-md bg-mediumspringgreen" />
                                  <div className="mt-[-2px] relative leading-[16px] font-semibold">
                                    Vikas
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[78.5px] relative leading-[16px] inline-block shrink-0 z-[1]">
                            Saturday
                          </div>
                          <div className="w-[78.5px] relative leading-[16px] inline-block shrink-0 z-[1]">
                            Sunday
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[1545px] flex flex-row items-start justify-start py-0 px-5 box-border max-w-full text-xs text-darkslategray-100 font-epilogue">
              <div className="w-[1092px] flex flex-row items-start justify-start gap-[0px_44px] max-w-full mq850:gap-[0px_22px] mq1225:flex-wrap">
                <div className="flex-1 overflow-hidden flex flex-row items-start justify-start py-0 px-0 box-border relative min-w-[384px] max-w-full mq450:min-w-full">
                  <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                    <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-start pt-0 pb-14 pr-0.5 pl-0 box-border relative gap-[8px] max-w-full z-[2]">
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px]">
                      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]" />
                      <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-xl bg-color-white shadow-[0px_4px_20px_rgba(238,_238,_238,_0.5)] box-border z-[1] border-[1px] border-solid border-whitesmoke-100" />
                    </div>
                    <div className="self-stretch overflow-hidden flex flex-row items-end justify-start pt-6 px-[29px] pb-2 relative z-[3]">
                      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px]" />
                      <div className="w-[70px] relative font-medium hidden opacity-[0.4] mix-blend-normal z-[1]">
                        Chart Value
                      </div>
                      <h1 className="m-0 relative text-3xl leading-[32px] font-semibold font-xs-regular text-primary-dark-shade z-[1] mq450:text-lg mq450:leading-[26px]">
                        Upcoming Competetion
                      </h1>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[23px] pl-[29px] box-border max-w-full text-lightslategray font-xs-regular">
                      <div className="flex-1 flex flex-row items-end justify-start gap-[0px_14px] max-w-full mq850:flex-wrap">
                        <Month202304April />
                        <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border min-w-[198px]">
                          <div className="self-stretch flex flex-col items-start justify-start gap-[9px_0px]">
                            <div className="rounded-3xs bg-lightsalmon flex flex-row items-center justify-center py-3 pr-1.5 pl-2.5 whitespace-nowrap z-[4]">
                              <div className="h-[39px] w-[305px] relative rounded-3xs bg-lightsalmon hidden" />
                              <div className="relative leading-[15px] z-[1]">
                                <span className="font-medium">4 April</span>
                                <span>
                                  {" "}
                                  - South delhi weightlifting championship
                                </span>
                              </div>
                            </div>
                            <div className="rounded-3xs bg-honeydew flex flex-row items-center justify-center py-3 px-2 whitespace-nowrap z-[4]">
                              <div className="h-[39px] w-[305px] relative rounded-3xs bg-honeydew hidden" />
                              <div className="relative leading-[15px] z-[1]">
                                <span className="font-medium">7 April</span>
                                <span>
                                  {" "}
                                  - South delhi weightlifting championship
                                </span>
                              </div>
                            </div>
                            <div className="rounded-3xs bg-lightsalmon flex flex-row items-center justify-center py-3 pr-1.5 pl-2.5 whitespace-nowrap z-[4]">
                              <div className="h-[39px] w-[305px] relative rounded-3xs bg-lightsalmon hidden" />
                              <div className="relative leading-[15px] z-[1]">
                                <span className="font-medium">12 April</span>
                                <span>
                                  {" "}
                                  - South delhi weightlifting championship
                                </span>
                              </div>
                            </div>
                            <div className="rounded-3xs bg-honeydew flex flex-row items-center justify-center py-3 px-2 whitespace-nowrap z-[4]">
                              <div className="h-[39px] w-[305px] relative rounded-3xs bg-honeydew hidden" />
                              <div className="relative leading-[15px] z-[1]">
                                <span className="font-medium">15 April</span>
                                <span>
                                  {" "}
                                  - South delhi weightlifting championship
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[457px] rounded-sm bg-color-white shadow-[0px_4px_4px_rgba(255,_226,_229,_0.25)] flex flex-col items-start justify-start pt-[33px] pb-[86px] pr-8 pl-5 box-border gap-[41px_0px] min-w-[457px] max-w-full text-3xl text-primary-dark-shade font-xs-regular mq450:gap-[20px_0px] mq850:min-w-full mq1225:flex-1">
                  <div className="w-[457px] h-[348px] relative rounded-sm bg-color-white shadow-[0px_4px_4px_rgba(255,_226,_229,_0.25)] hidden max-w-full" />
                  <div className="flex flex-row items-start justify-start py-0 px-4">
                    <h1 className="m-0 relative text-inherit leading-[32px] font-semibold font-inherit z-[1] mq450:text-lg mq450:leading-[26px]">
                      Calories Burn
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-center justify-center relative text-center text-3xs text-black">
                    <img
                      className="w-1.5 h-px absolute !m-[0] top-[3px] left-[34.2px] z-[1]"
                      alt=""
                      src="/vector-13.svg"
                    />
                    <div className="self-stretch flex flex-row items-end justify-start gap-[0px_20px] mq450:flex-wrap">
                      <div className="h-[156px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border text-right text-xs font-inter">
                        <div className="h-[149px] flex flex-row items-start justify-start gap-[0px_1px]">
                          <div className="self-stretch flex flex-col items-end justify-start gap-[21px_0px]">
                            <div className="flex-1 flex flex-row items-start justify-start py-0 pr-[11px] pl-0">
                              <div className="relative z-[1]">1000</div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px]">
                              <div className="relative z-[1]">750</div>
                              <img
                                className="h-px w-1.5 relative z-[1]"
                                alt=""
                                src="/vector-14.svg"
                              />
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px]">
                              <div className="relative z-[1]">500</div>
                              <div className="h-0.5 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                                <img
                                  className="w-1.5 h-px relative z-[1]"
                                  alt=""
                                  src="/vector-14.svg"
                                />
                              </div>
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px]">
                              <div className="relative z-[1]">250</div>
                              <img
                                className="h-px w-1.5 relative z-[1]"
                                alt=""
                                src="/vector-14.svg"
                              />
                            </div>
                            <div className="flex-1 flex flex-row items-center justify-start gap-[0px_6px]">
                              <div className="relative z-[1]">0</div>
                              <img
                                className="h-px w-1.5 relative z-[1]"
                                alt=""
                                src="/vector-17.svg"
                              />
                            </div>
                          </div>
                          <div className="h-[138px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                            <img
                              className="w-px flex-1 relative max-h-full z-[1]"
                              alt=""
                              src="/vector-18.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="h-[132px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[0px_19px]">
                        <div className="self-stretch flex flex-col items-center justify-start gap-[7px_0px]">
                          <img
                            className="w-[40.3px] flex-1 relative max-h-full z-[2]"
                            alt=""
                            src="/vector-19.svg"
                          />
                          <div className="relative z-[1]">Lorem</div>
                        </div>
                        <div className="h-[115px] flex flex-col items-end justify-start gap-[7px_0px]">
                          <img
                            className="w-[40.3px] flex-1 relative max-h-full z-[2]"
                            alt=""
                            src="/vector-20.svg"
                          />
                          <div className="relative z-[1]">Lorem</div>
                        </div>
                      </div>
                      <div className="h-[82px] flex flex-col items-end justify-start gap-[7px_0px]">
                        <img
                          className="w-[40.3px] flex-1 relative max-h-full z-[2]"
                          alt=""
                          src="/vector-21.svg"
                        />
                        <div className="relative z-[1]">Lorem</div>
                      </div>
                      <CaloriesBurnFrame
                        group="/group-2.svg"
                        textBlockFrame="/vector-22.svg"
                        frameVectorLorem="/vector-23.svg"
                        frameVectorLorem1="/vector-24.svg"
                        propRight="unset"
                        propLeft="-203.7px"
                        propHeight="90px"
                        propHeight1="97.6px"
                        propHeight2="13px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="mb-[-87px] w-[370px] h-[13px] flex flex-row items-start justify-between py-0 pr-0 pl-5 box-border max-w-full gap-[20px]">
        <div className="self-stretch w-[34px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
          <div className="self-stretch h-[12.6px] relative inline-block shrink-0">
            Lorem
          </div>
        </div>
        <div className="h-[12.6px] w-[31.2px] relative inline-block shrink-0">
          Lorem
        </div>
        <div className="h-[12.6px] w-[31.2px] relative inline-block shrink-0">
          Lorem
        </div>
        <div className="h-[12.6px] w-[31.2px] relative inline-block shrink-0">
          Lorem
        </div>
        <div className="h-[12.6px] w-[31.2px] relative inline-block shrink-0">
          Lorem
        </div>
        <div className="h-[12.6px] w-[31.2px] relative inline-block shrink-0">
          Lorem
        </div>
      </div>
    </div>
  );
};

export default DashboardDesign;
