const img000000101 = "https://www.figma.com/api/mcp/asset/fc1525b6-e84b-404a-a94a-ddf34bd53e48";
const imgPhoto3 = "https://www.figma.com/api/mcp/asset/cfa44300-61c0-4d0d-a959-6f5f7d820729";
const imgPhoto2 = "https://www.figma.com/api/mcp/asset/67a358ed-eba9-4afd-980e-5cefe99bda47";
const imgPhoto4 = "https://www.figma.com/api/mcp/asset/f47180e6-f7b4-41ea-90fd-1bb315f34578";
const imgPhoto5 = "https://www.figma.com/api/mcp/asset/cd7096ea-9d4c-4c06-b575-26752ca6352e";
const imgRectangle = "https://www.figma.com/api/mcp/asset/1448418b-c2d2-48e2-9baa-dc7c93b35aee";
const imgPersonCard01Photo = "https://www.figma.com/api/mcp/asset/e563c6fe-9ea3-4340-827b-c700348aaa58";
const imgRectangle1 = "https://www.figma.com/api/mcp/asset/2f5c815d-7c90-489c-9de7-3a439cd2eba7";
const imgDivider = "https://www.figma.com/api/mcp/asset/385b07d3-e417-4878-b609-effaac096e25";
const imgDivider1 = "https://www.figma.com/api/mcp/asset/a7cb7e77-5905-4a3c-82df-08dc83ed8187";
const imgVector7 = "https://www.figma.com/api/mcp/asset/b9b1faa8-b661-4496-880c-1da023e8bb1b";

type IconsProps = {
  className?: string;
  type?: "icons.community" | "icons.food" | "icons.place_to_stay" | "icons.season" | "icons.seven_days" | "icons.surf" | "icons.transfer";
};

function Icons({ className, type = "icons.food" }: IconsProps) {
  const isIconsCommunity = type === "icons.community";
  const isIconsFood = type === "icons.food";
  const isIconsPlaceToStay = type === "icons.place_to_stay";
  const isIconsSeason = type === "icons.season";
  const isIconsSurf = type === "icons.surf";
  const isIconsTransfer = type === "icons.transfer";
  return (
    <div className={className || "overflow-clip relative size-[36px]"} id={isIconsCommunity ? "node-6_2031" : isIconsSeason ? "node-6_2032" : isIconsPlaceToStay ? "node-6_2030" : isIconsSurf ? "node-6_2028" : isIconsFood ? "node-6_2026" : isIconsTransfer ? "node-6_2029" : "node-6_2027"}>
      <div className={`-translate-y-1/2 absolute flex flex-col justify-center leading-[0] text-[#ffb0ff] whitespace-nowrap ${isIconsCommunity ? '-translate-x-1/2 font-["SF_Pro:Bold",sans-serif] font-bold left-1/2 text-[21px] text-center top-[17.5px]' : isIconsSeason ? '-translate-x-1/2 font-["SF_Pro:Black",sans-serif] font-[1000] left-1/2 text-[22px] text-center top-[18px]' : isIconsPlaceToStay ? '-translate-x-1/2 font-["SF_Pro:Bold",sans-serif] font-bold left-[calc(50%+1px)] text-[25px] text-center top-[17px]' : isIconsSurf ? '-translate-x-1/2 font-["SF_Pro:Bold",sans-serif] font-bold left-[calc(50%+0.5px)] text-[25px] text-center top-[17px]' : isIconsFood ? '-translate-x-1/2 font-["SF_Pro:Bold",sans-serif] font-bold left-1/2 text-[28px] text-center top-[19px]' : isIconsTransfer ? 'font-["SF_Pro:Bold",sans-serif] font-bold left-[-1px] text-[26px] top-[18.5px]' : 'font-["SF_Pro:Bold",sans-serif] font-bold left-0 text-[28px] top-[18px]'}`} id={isIconsCommunity ? "node-6_2023" : isIconsSeason ? "node-6_2025" : isIconsPlaceToStay ? "node-6_2021" : isIconsSurf ? "node-6_2019" : isIconsFood ? "node-6_2015" : isIconsTransfer ? "node-6_2017" : "node-6_2012"} style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.2]">{isIconsCommunity ? "\u{100632}" : isIconsSeason ? "\u{100637}" : isIconsPlaceToStay ? "\u{10066A}" : isIconsSurf ? "\u{1020B0}" : isIconsTransfer ? "\u{100749}" : type === "icons.seven_days" ? "\u{100249}" : "\u{100E29}"}</p>
      </div>
    </div>
  );
}

export default function SurfCampLanding() {
  return (
    <div className="bg-white relative size-full" data-node-id="8:2235" data-name="surf_camp_landing">
      <div className="absolute bg-[#323740] h-[800px] left-0 overflow-clip top-[64px] w-[1440px]" data-node-id="8:2236" data-name="01-hero_section-1440px">
        <div className="absolute bg-white h-[800px] left-0 overflow-clip top-0 w-[1440px]" data-node-id="8:2237" data-name="content_wrapper-photo-video">
          <div className="absolute flex h-[2266px] items-center justify-center left-[-59px] top-[-920px] w-[1556px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[2266px] relative w-[1556px]" data-node-id="8:2238" data-name="00000010 1">
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
                  <img alt="" className="absolute max-w-none object-cover size-full" src={img000000101} />
                  <div className="absolute bg-[rgba(0,0,0,0.1)] inset-0" />
                </div>
              </div>
            </div>
          </div>
          <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-1/2 text-center text-white top-[56px]" data-node-id="8:2492">
            <div className="flex flex-col font-['Covered_By_Your_Grace:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[96px] whitespace-nowrap" data-node-id="8:2239">
              <p className="leading-[0.9]">Real Morocco, Not Tourism.</p>
            </div>
            <p className="font-['Bricolage_Grotesque:Medium',sans-serif] font-medium leading-[1.2] relative shrink-0 text-[16px] w-[416px]" data-node-id="8:2240" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              Seven days in a fishing village. You surf when the swell comes, eat where the locals eat, and spend the rest of the time doing nothing in particular.
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[824px] left-0 overflow-clip top-[864px] w-[1440px]" data-node-id="8:2241" data-name="02-about_section-1440px">
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[64px] items-start justify-center left-1/2 top-[80px]" data-node-id="8:2242">
          <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1277px]" data-node-id="8:2243">
            <div className="content-stretch flex items-start pr-[16px] relative shrink-0 w-[308px]" data-node-id="8:2244">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[#323740] w-[308px]" data-node-id="8:2245">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full" data-node-id="8:2246" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-none">Not a resort</p>
                </div>
                <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="8:2247" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[1.2]">{`Seven days in a fishing village that hasn't been packaged yet. Small group, real house, local food. Off-season so the beaches are empty and the prices are honest.`}</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] pr-[16px] relative shrink-0 text-[#323740] w-[308px]" data-node-id="8:2248">
              <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full" data-node-id="8:2249" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-none">Not a checklist</p>
              </div>
              <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="8:2250" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-[1.2]">Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] pr-[16px] relative shrink-0 text-[#323740] w-[308px]" data-node-id="8:2251">
              <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full" data-node-id="8:2252" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-none">Not a checklist</p>
              </div>
              <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="8:2253" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-[1.2]">Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] pr-[16px] relative shrink-0 text-[#323740] w-[308px]" data-node-id="8:2254">
              <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] tracking-[-0.96px] w-full" data-node-id="8:2255" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-none">Not a checklist</p>
              </div>
              <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[16px] w-full" data-node-id="8:2256" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                <p className="leading-[1.2]">Surf the same break three days in a row until it makes sense. Read a book start to finish for the first time in years.</p>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-[1280px]" data-node-id="8:2257">
            <div className="content-stretch flex gap-[8px] items-start justify-center relative shrink-0" data-node-id="8:2258" data-name="block_tag-location">
              <div className="bg-[#323740] border-2 border-[#323740] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative self-stretch shrink-0" data-node-id="8:2259" data-name="block_tag-place">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.14px] whitespace-nowrap" data-node-id="8:2260">
                  <p className="leading-[1.2]">Tamraght, Morocco</p>
                </div>
              </div>
              <div className="bg-[#ffb0ff] border-2 border-[#ffb0ff] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative self-stretch shrink-0" data-node-id="8:2261" data-name="block_tag-map">
                <a className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[14px] tracking-[0.14px] whitespace-nowrap" href="https://maps.app.goo.gl/4SHVHBwwkDBUa61a9" data-node-id="8:2262" target="_blank">
                  <p className="cursor-pointer decoration-solid leading-[1.2] underline">Check on Google Maps</p>
                </a>
              </div>
              <div className="bg-[rgba(255,176,255,0.5)] border-2 border-[#ffd7ff] border-solid content-stretch flex items-center justify-center px-[8px] py-[4px] relative self-stretch shrink-0" data-node-id="8:2502" data-name="block_tag-place">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[14px] tracking-[0.14px] whitespace-nowrap" data-node-id="8:2503">
                  <p className="leading-[1.2]">More Photos</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-[1280px]" data-node-id="8:2263" data-name="about-media_slider">
              <div className="border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2264" data-name="photo_1">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[124.96%] left-[-5.14%] max-w-none top-[-12.47%] w-[110.34%]" src={img000000101} />
                </div>
              </div>
              <div className="border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2265" data-name="photo_3">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-[-32.32%] max-w-none top-0 w-[187.21%]" src={imgPhoto3} />
                </div>
              </div>
              <div className="border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2266" data-name="photo_2">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto2} />
              </div>
              <div className="border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2267" data-name="photo_4">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-[151.3%] left-[-0.1%] max-w-none top-[-51.34%] w-full" src={imgPhoto4} />
                </div>
              </div>
              <div className="border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2268" data-name="photo_5">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto5} />
              </div>
              <div className="bg-[#323740] border-[0.74px] border-[rgba(50,55,64,0.1)] border-solid h-[396px] relative shrink-0 w-[308px]" data-node-id="8:2269" data-name="photo_6" />
            </div>
          </div>
        </div>
      </div>
      <div className="-translate-x-1/2 absolute bg-[#eef5ff] border-38 border-solid border-white h-[650px] left-1/2 overflow-clip top-[1688px] w-[1440px]" data-node-id="8:2270" data-name="03-program_section-1440px">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[1252px] left-1/2 mix-blend-multiply top-1/2 w-[1484px]" data-node-id="8:2271" data-name="Rectangle">
          <div aria-hidden="true" className="absolute bg-size-[1280px_1080px] bg-top-left inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: `url('${imgRectangle}')` }} />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[64px] h-[474px] items-start left-[61px] top-[45px] w-[1280px]" data-node-id="8:2272">
          <div className="flex flex-[1_0_0] flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px relative text-[#ffb0ff] text-[56px] text-center tracking-[-1px] w-full" data-node-id="8:2273" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="leading-[64px] mb-0">Everything you need.</p>
            <p className="leading-[64px]">{`Nothing you don't.`}</p>
          </div>
          <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full" data-node-id="8:2274" data-name="program_list">
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-node-id="8:2275" data-name="program_top_line">
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2276" data-name="program_01-how_long">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2277">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2278">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.seven_days" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2280" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Seven days</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2281" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2]">Shared house or private room depending on your tier — both are real places.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2282" data-name="program_02-food">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2284">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2285">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2287" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Food</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2288" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2]">Breakfast at the house, lunch at the port, dinner wherever the day leads.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2289" data-name="program_03-surfing">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2290">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2291">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.surf" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2293" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Surf sessions</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2294" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2] mb-0">Guided, with a local instructor</p>
                    <p className="leading-[1.2] mb-0">who knows every break from</p>
                    <p className="leading-[1.2]">Anchor Point down.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2295" data-name="program_03-transfer">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2296">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2297">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.transfer" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2299" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Transfer</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2300" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2] mb-0">Airport pickup, daily rides to the</p>
                    <p className="leading-[1.2] mb-0">beach, one inland day trip to</p>
                    <p className="leading-[1.2]">the mountains.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[16px] items-start relative shrink-0" data-node-id="8:2301" data-name="program_bottom_line">
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2302" data-name="program_05-rooms">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2303">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2304">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.place_to_stay" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2306" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Place to stay</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2307" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2]">Shared house or private room depending on your tier — both are real places.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2308" data-name="program_03-community">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2309">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2310">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.community" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2312" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Community</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2313" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2]">Breakfast at the house, lunch at the port, dinner wherever the day leads.</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col items-start pr-[24px] relative shrink-0 w-[308px]" data-node-id="8:2314" data-name="program_07-off_season">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2315">
                  <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-node-id="8:2316">
                    <Icons className="overflow-clip relative shrink-0 size-[36px]" type="icons.season" />
                    <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[28px] whitespace-nowrap" data-node-id="8:2318" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2]">Off-season calm</p>
                    </div>
                  </div>
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2319" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.2] mb-0">Guided, with a local instructor</p>
                    <p className="leading-[1.2] mb-0">who knows every break from</p>
                    <p className="leading-[1.2]">Anchor Point down.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#efe3cc] h-[780px] left-[-1px] overflow-clip top-[2386px] w-[1440px]" data-node-id="8:2320" data-name="04-photo_section-1440">
        <div className="absolute h-[2096px] left-0 top-[-708px] w-[1440px]" data-node-id="8:2321" data-name="00020001 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgPhoto5} />
        </div>
      </div>
      <div className="absolute bg-white h-[860px] left-0 overflow-clip top-[3166px] w-[1440px]" data-node-id="8:2322" data-name="05-team_section">
        <div className="-translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] left-[calc(50%-206px)] text-[#323740] text-[56px] top-[97px] whitespace-nowrap" data-node-id="8:2323" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[0.9]">{`Who you'll meet`}</p>
        </div>
        <div className="absolute content-stretch flex items-center justify-between left-[80px] top-[170px] w-[1274px]" data-node-id="8:2324" data-name="meet_the_team">
          <div className="bg-[#eef5ff] h-[570px] overflow-clip relative shrink-0 w-[308px]" data-node-id="8:2325" data-name="person_card_01-the_cook">
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-0 top-0 w-[308px]" data-node-id="8:2326">
              <div className="bg-size-[auto_auto,128px_128px] bg-top-left h-[308px] relative shrink-0 w-full" data-node-id="8:2327" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="person_card_01-photo" />
              <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-node-id="8:2328" data-name="person_card_01-content">
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2329" data-name="person_card_01-content">
                  <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-node-id="8:2330" data-name="person_card_01-text">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full" data-node-id="8:2331" data-name="person_card_01-text">
                      <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(50,55,64,0.5)] tracking-[0.16px] w-full" data-node-id="8:2332">
                        <p className="leading-[1.2]">THE COOK</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#323740] text-[28px] w-full" data-node-id="8:2333" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2]">Hassan</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2334" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2] mb-0">Cooks for everyone. Knows</p>
                        <p className="leading-[1.2]">every spice in the souk.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2335" data-name="person_card_01-quote">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="8:2336" data-name="divider">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgDivider} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2337">
                      <p className="leading-[1.2]">
                        “Food is how you understand
                        <br aria-hidden="true" />a place.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eef5ff] h-[570px] overflow-clip relative shrink-0 w-[308px]" data-node-id="8:2338" data-name="person_card_02-the_instructor">
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-0 top-0 w-[308px]" data-node-id="8:2339">
              <div className="bg-size-[auto_auto,128px_128px] bg-top-left h-[308px] relative shrink-0 w-full" data-node-id="8:2340" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="person_card_02-photo" />
              <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-node-id="8:2341" data-name="person_card_02-content">
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2342" data-name="person_card_02-content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="8:2343" data-name="person_card_02-text">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full" data-node-id="8:2344" data-name="person_card_02-text">
                      <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(50,55,64,0.5)] tracking-[0.16px] w-full" data-node-id="8:2345">
                        <p className="leading-[1.2]">THE INSTRUCTOR</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#323740] text-[28px] w-full" data-node-id="8:2346" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2]">Yassine</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2347" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2] mb-0">Reads the swell better than the</p>
                        <p className="leading-[1.2]">forecast app.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2348" data-name="person_card_02-quote">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="8:2349" data-name="divider">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgDivider} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2350">
                      <p className="leading-[1.2] mb-0">“The best wave is always the</p>
                      <p className="leading-[1.2]">next one.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eef5ff] h-[570px] overflow-clip relative shrink-0 w-[308px]" data-node-id="8:2351" data-name="person_card_03-the_host">
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-0 top-0 w-[308px]" data-node-id="8:2352">
              <div className="bg-size-[auto_auto,128px_128px] bg-top-left h-[308px] relative shrink-0 w-full" data-node-id="8:2353" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="person_card_03-photo" />
              <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-node-id="8:2354" data-name="person_card_03-content">
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2355" data-name="person_card_03-content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="8:2356" data-name="person_card_03-text">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full" data-node-id="8:2357" data-name="person_card_03-text">
                      <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(50,55,64,0.5)] tracking-[0.16px] w-full" data-node-id="8:2358">
                        <p className="leading-[1.2]">THE HOST</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#323740] text-[28px] w-full" data-node-id="8:2359" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2]">Karim</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2360" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2] mb-0">Built the place with his brothers</p>
                        <p className="leading-[1.2]">ten years ago.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2361" data-name="person_card_03-quote">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="8:2362" data-name="divider">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgDivider} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2363">
                      <p className="leading-[1.2] mb-0">“Food is how you understand a</p>
                      <p className="leading-[1.2]">place.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#eef5ff] h-[570px] overflow-clip relative shrink-0 w-[308px]" data-node-id="8:2364" data-name="person_card_04-the_fixer">
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-0 top-0 w-[308px]" data-node-id="8:2365">
              <div className="bg-size-[auto_auto,128px_128px] bg-top-left h-[308px] relative shrink-0 w-full" data-node-id="8:2366" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="person_card_04-photo" />
              <div className="content-stretch flex flex-col items-start px-[20px] relative shrink-0 w-full" data-node-id="8:2367" data-name="person_card_04-content">
                <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2368" data-name="person_card_024content">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="8:2369" data-name="person_card_04-text">
                    <div className="content-stretch flex flex-col gap-[12px] items-start leading-[0] relative shrink-0 text-center w-full" data-node-id="8:2370" data-name="person_card_04-text">
                      <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center not-italic relative shrink-0 text-[16px] text-[rgba(50,55,64,0.5)] tracking-[0.16px] w-full" data-node-id="8:2371">
                        <p className="leading-[1.2]">THE FIXER</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#323740] text-[28px] w-full" data-node-id="8:2372" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2]">Zuka</p>
                      </div>
                      <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#323740] text-[16px] w-full" data-node-id="8:2373" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                        <p className="leading-[1.2] mb-0">Handles airport runs, bookings,</p>
                        <p className="leading-[1.2]">and the WhatsApp chaos.</p>
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[28px] items-start relative shrink-0 w-full" data-node-id="8:2374" data-name="person_card_02-quote">
                    <div className="h-0 relative shrink-0 w-full" data-node-id="8:2375" data-name="divider">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgDivider} />
                      </div>
                    </div>
                    <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2376">
                      <p className="leading-[1.2] mb-0">{`“If it can go wrong, I've`}</p>
                      <p className="leading-[1.2]">already fixed it.”</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#eaeaea] h-[964px] left-0 overflow-clip top-[3996px] w-[1440px]" data-node-id="8:2377" data-name="06-pricing_section">
        <div className="absolute bg-size-[1280px_1080px] bg-top-left h-[1216px] left-0 mix-blend-color-dodge top-[-126px] w-[1440px]" data-node-id="8:2378" style={{ backgroundImage: `url('${imgRectangle1}')` }} data-name="Rectangle" />
        <div className="-translate-x-1/2 absolute content-stretch flex flex-col gap-[16px] h-[177px] items-center leading-[0] left-1/2 text-center top-[64px] w-[848px]" data-node-id="8:2379">
          <div className="flex flex-[1_0_0] flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-full relative text-[#ffb0ff] text-[56px] tracking-[-0.96px] w-[min-content]" data-node-id="8:2380" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="leading-[64px]">Choose what fits you better</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center min-h-px relative text-[#323740] text-[16px] w-[632px]" data-node-id="8:2381" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="leading-[1.2]">All tiers include accommodation, daily meals, five surf sessions with local instructors, transport around the region, hidden spots, and the full slow-living Morocco experience. The only difference between the tiers is the type of room and living setup you choose.</p>
          </div>
        </div>
        <div className="-translate-x-1/2 absolute content-stretch flex items-center justify-between left-1/2 top-[305px] w-[1280px]" data-node-id="8:2382" data-name="pricing_tier-cards">
          <div className="bg-white h-[539px] overflow-clip relative shrink-0 w-[416px]" data-node-id="8:2383" data-name="pricing_tier_01-cheapest">
            <div className="absolute bg-size-[auto_auto,128px_128px] bg-top-left h-[280px] left-0 overflow-clip top-0 w-[416px]" data-node-id="8:2384" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="pricing_tier_01-photo">
              <div className="absolute content-stretch flex gap-[8px] items-end left-[24px] text-white top-[192px]" data-node-id="8:2385" data-name="price">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[72px] whitespace-nowrap" data-node-id="8:2386" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[64px]">€800</p>
                </div>
                <p className="font-['Special_Elite:Regular',sans-serif] h-[20px] leading-[1.2] not-italic relative shrink-0 text-[16px] text-center tracking-[0.16px] w-[98px]" data-node-id="8:2387">
                  /per person
                </p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[36px] top-[316px] w-[344px]" data-node-id="8:2388" data-name="pricing_tier_01-text">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[#323740] text-center w-full" data-node-id="8:2389" data-name="top_text">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full" data-node-id="8:2390" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[36.8px]">Dorm room</p>
                </div>
                <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-full" data-node-id="8:2391" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[1.2]">Bunk in a shared house room (4–6 people)</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="8:2392" data-name="divider">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                </div>
              </div>
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2393">
                <p className="leading-[1.4]">{`For travelers who like company and don't mind sharing space.`}</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[539px] overflow-clip relative shrink-0 w-[416px]" data-node-id="8:2394" data-name="pricing_tier_02-cheap">
            <div className="absolute bg-size-[auto_auto,128px_128px] bg-top-left h-[280px] left-0 overflow-clip top-0 w-[416px]" data-node-id="8:2395" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="pricing_tier_02-photo">
              <div className="absolute content-stretch flex gap-[8px] items-end left-[24px] text-white top-[192px]" data-node-id="8:2396" data-name="price">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[72px] whitespace-nowrap" data-node-id="8:2397" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[64px]">€960</p>
                </div>
                <p className="font-['Special_Elite:Regular',sans-serif] h-[20px] leading-[1.2] not-italic relative shrink-0 text-[16px] text-center tracking-[0.16px] w-[98px]" data-node-id="8:2398">
                  /per person
                </p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[36px] top-[316px] w-[344px]" data-node-id="8:2399" data-name="pricing_tier_02-text">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[#323740] text-center w-full" data-node-id="8:2400" data-name="top_text">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full" data-node-id="8:2401" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[36.8px]">Shared Room</p>
                </div>
                <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-full" data-node-id="8:2402" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[1.2] mb-0">A door you can close. Quiet mornings</p>
                  <p className="leading-[1.2]">before surf.</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="8:2403" data-name="divider">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                </div>
              </div>
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2404">
                <p className="leading-[1.4] mb-0">Your own room in the house, shared</p>
                <p className="leading-[1.4]">bathroom</p>
              </div>
            </div>
          </div>
          <div className="bg-white h-[539px] overflow-clip relative shrink-0 w-[416px]" data-node-id="8:2405" data-name="pricing_tier_03-double">
            <div className="absolute bg-size-[auto_auto,128px_128px] bg-top-left h-[280px] left-0 overflow-clip top-0 w-[416px]" data-node-id="8:2406" style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), url('${imgPersonCard01Photo}')` }} data-name="pricing_tier_03-photo">
              <div className="absolute content-stretch flex gap-[8px] items-end left-[24px] text-white top-[192px]" data-node-id="8:2407" data-name="price">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[72px] whitespace-nowrap" data-node-id="8:2408" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[64px]">€1400</p>
                </div>
                <p className="font-['Special_Elite:Regular',sans-serif] h-[20px] leading-[1.2] not-italic relative shrink-0 text-[16px] text-center tracking-[0.16px] w-[98px]" data-node-id="8:2409">
                  /per couple
                </p>
              </div>
            </div>
            <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[36px] top-[316px] w-[344px]" data-node-id="8:2410" data-name="pricing_tier_03-text">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 text-[#323740] text-center w-full" data-node-id="8:2411" data-name="top_text">
                <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[32px] w-full" data-node-id="8:2412" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[36.8px]">Double Bed</p>
                </div>
                <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[18px] w-full" data-node-id="8:2413" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[1.2] mb-0">A door you can close. Quiet mornings</p>
                  <p className="leading-[1.2]">before surf.</p>
                </div>
              </div>
              <div className="h-0 relative shrink-0 w-full" data-node-id="8:2414" data-name="divider">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgDivider1} />
                </div>
              </div>
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] text-center tracking-[0.16px] w-full" data-node-id="8:2415">
                <p className="leading-[1.4]">{`For travelers who like company and don't mind sharing space.`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[726px] left-0 overflow-clip top-[4950px] w-[1440px]" data-node-id="8:2416" data-name="07-contact">
        <div className="absolute bg-[#efe3cc] border-[0.74px] border-[rgba(0,0,0,0.1)] border-solid h-[288px] left-[1585px] overflow-clip top-[517px] w-[200px]" data-node-id="8:2417">
          <div className="absolute bg-[#1e1e1e] h-[219px] left-[11.26px] top-[11.26px] w-[176px]" data-node-id="8:2418" />
        </div>
        <div className="absolute content-stretch flex flex-col gap-[28px] items-start left-[80px] top-[64px] w-[415px]" data-node-id="8:2419">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="8:2420">
            <div className="flex flex-col font-['Bricolage_Grotesque:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323740] text-[56px] tracking-[-0.96px] w-full" data-node-id="8:2421" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              <p className="leading-none">Nearest dates 24 June – 1 July</p>
            </div>
          </div>
          <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] w-[310px]" data-node-id="8:2422" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
            <p className="leading-[1.2]">We handle the logistics. The rest is you, the Atlantic, and however much of Morocco you want to absorb.</p>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[729px] top-[64px] w-[631px]" data-node-id="8:2423">
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-node-id="8:2424">
            <div className="content-start flex flex-wrap gap-[16px] items-start relative shrink-0 w-full" data-node-id="8:2425">
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[307px]" data-node-id="8:2426">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] w-full" data-node-id="8:2427">
                  <p className="leading-[1.2]">Name *</p>
                </div>
                <div className="bg-[rgba(50,55,64,0.05)] content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="8:2428">
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(74,57,75,0.3)] whitespace-nowrap" data-node-id="8:2429" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.4]">Your name</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[308px]" data-node-id="8:2430">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] w-full" data-node-id="8:2431">
                  <p className="leading-[1.2]">Email *</p>
                </div>
                <div className="bg-[rgba(50,55,64,0.05)] content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="8:2432">
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(74,57,75,0.3)] whitespace-nowrap" data-node-id="8:2433" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.4]">example@surfcamp.com</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[307px]" data-node-id="8:2434">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] w-full" data-node-id="8:2435">
                  <p className="leading-[1.2]">Instagram</p>
                </div>
                <div className="bg-[rgba(50,55,64,0.05)] content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="8:2436">
                  <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(74,57,75,0.3)] whitespace-nowrap" data-node-id="8:2437" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                    <p className="leading-[1.4]">Link to profile</p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[308px]" data-node-id="8:2438">
                <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] w-full" data-node-id="8:2439">
                  <p className="leading-[1.2]">Prefered Plan</p>
                </div>
                <div className="bg-[rgba(50,55,64,0.05)] content-stretch flex h-[56px] items-center overflow-clip px-[16px] py-[12px] relative shrink-0 w-full" data-node-id="8:2440">
                  <div className="content-stretch flex flex-[1_0_0] items-center justify-between min-w-px relative" data-node-id="8:2441">
                    <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] whitespace-nowrap" data-node-id="8:2442" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                      <p className="leading-[1.2] whitespace-pre">{`Shared Room  •  €960`}</p>
                    </div>
                    <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="8:2443" data-name="Icons.shevron_down">
                      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[8px] left-1/2 top-1/2 w-[16px]" data-node-id="I8:2443;8:2207">
                        <div className="absolute inset-[-12.5%_-6.25%_-17.68%_-6.25%]">
                          <img alt="" className="block max-w-none size-full" src={imgVector7} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[8px] h-[142px] items-start relative shrink-0 w-full" data-node-id="8:2444">
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] w-full" data-node-id="8:2445">
                <p className="leading-[1.2]">Additional Info</p>
              </div>
              <div className="bg-[rgba(50,55,64,0.05)] content-stretch flex flex-col h-[112px] items-center p-[20px] relative shrink-0 w-full" data-node-id="8:2446">
                <div className="flex flex-col font-['Bricolage_Grotesque:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[16px] text-[rgba(74,57,75,0.3)] w-[590px]" data-node-id="8:2447" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
                  <p className="leading-[1.4]">Questions, Do you go alone, or with your friends or partner, Expectations or Suggestions</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffb0ff] border-2 border-[#ffb0ff] border-solid content-stretch flex h-[56px] items-center justify-center overflow-clip px-[39px] py-[12px] relative rounded-[1000px] shrink-0 w-full" data-node-id="8:2448">
            <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="8:2449" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              <p className="leading-[1.2]">Send Application</p>
            </div>
          </div>
        </div>
        <div className="absolute content-stretch flex flex-col items-start left-[80px] top-[560px] w-[1280px]" data-node-id="8:2450">
          <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-node-id="8:2451">
            <div className="bg-[#eef5ff] content-stretch flex flex-col font-['Special_Elite:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic px-[24px] py-[16px] relative shrink-0 text-[#323740] text-[14px] tracking-[1px] uppercase w-[308px] whitespace-nowrap" data-node-id="8:2452" data-name="a.group">
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2453">
                <p className="leading-[1.2]">Email</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2454">
                <p className="leading-[1.2]">hello@surfmorocco.com</p>
              </div>
            </div>
            <div className="bg-[#eef5ff] content-stretch flex flex-col font-['Special_Elite:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic px-[24px] py-[16px] relative shrink-0 text-[#323740] text-[14px] tracking-[1px] uppercase w-[308px] whitespace-nowrap" data-node-id="8:2455" data-name="a.group">
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2456">
                <p className="leading-[1.2]">WhatsApp</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2457">
                <p className="leading-[1.2]">+212 600 000 000</p>
              </div>
            </div>
            <div className="bg-[#eef5ff] content-stretch flex flex-col font-['Special_Elite:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic px-[24px] py-[16px] relative shrink-0 text-[#323740] text-[14px] tracking-[1px] uppercase w-[308px] whitespace-nowrap" data-node-id="8:2458" data-name="a.group">
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2459">
                <p className="leading-[1.2]">Telegram</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2460">
                <p className="leading-[1.2]">@surfmorocco</p>
              </div>
            </div>
            <div className="bg-[#eef5ff] content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[308px]" data-node-id="8:2461" data-name="a.group">
              <div className="relative shrink-0 w-full" data-node-id="8:2462">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col font-['Special_Elite:Regular',sans-serif] gap-[4px] items-start leading-[0] not-italic relative size-full text-[#323740] text-[14px] tracking-[1px] uppercase whitespace-nowrap">
                  <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2463">
                    <p className="leading-[1.2]">Instagram</p>
                  </div>
                  <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2464">
                    <p className="leading-[1.2]">@surfmorocco</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[#ffb0ff] h-[230px] left-0 overflow-clip top-[5653px] w-[1440px]" data-node-id="8:2465" data-name="top_bar-fixed_scroll">
        <div className="-translate-x-1/2 absolute bg-size-[1280px_1080px] bg-top-left h-[1216px] left-1/2 mix-blend-color-dodge top-[-517px] w-[1440px]" data-node-id="8:2466" style={{ backgroundImage: `url('${imgRectangle1}')` }} data-name="Rectangle" />
        <div className="absolute contents left-[977px] top-[72px]" data-node-id="8:2467">
          <div className="-translate-y-1/2 absolute flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] left-[977px] not-italic text-[#323740] text-[14px] top-[112.11px] tracking-[1.3px] uppercase whitespace-nowrap" data-node-id="8:2468">
            <p>
              <span className="leading-[20.15px]">Send me a letter</span>
              <span className="leading-[20.15px]">{` if you want to collaborate`}</span>
            </p>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[26.261px] items-center justify-center left-[1070px] top-[142.13px] w-[181.535px]">
            <div className="flex-none rotate-[1.67deg]">
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#323740] text-[14px] tracking-[1.3px] uppercase whitespace-nowrap" data-node-id="8:2469">
                <p className="leading-[20.15px]">zukaaisme@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="-translate-y-1/2 absolute flex h-[30.09px] items-center justify-center left-[1157px] top-[87.04px] w-[107.419px]">
            <div className="flex-none rotate-[-4.96deg]">
              <div className="flex flex-col font-['Special_Elite:Regular',sans-serif] justify-center leading-[0] not-italic relative text-[#323740] text-[14px] tracking-[1.3px] uppercase whitespace-nowrap" data-node-id="8:2470">
                <p className="leading-[20.15px]">22 June 2026</p>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] left-[80px] text-[#f095f0] text-[96px] top-1/2 whitespace-nowrap" data-node-id="8:2471" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
          <p className="leading-[0.9]">Surf Morocco</p>
        </div>
      </div>
      <div className="absolute bg-white h-[64px] left-0 overflow-clip top-0 w-[1440px]" data-node-id="8:2472" data-name="00-menu-fixed_scroll">
        <div className="absolute content-stretch flex items-center justify-between left-[80px] top-[12px] w-[1280px]" data-node-id="8:2495">
          <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-[200px]" data-node-id="8:2473">
            <div className="flex flex-col font-['Bricolage_Grotesque:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] whitespace-nowrap" data-node-id="8:2474" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              <p className="leading-none">Surf Morocco</p>
            </div>
          </div>
          <div className="content-stretch flex font-['Special_Elite:Regular',sans-serif] gap-[24px] items-center leading-[0] not-italic relative shrink-0 text-[#323740] text-[16px] tracking-[0.16px] whitespace-nowrap" data-node-id="8:2477" data-name="menu-linked_sections">
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2478">
              <p className="leading-[1.2]">About</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2479">
              <p className="leading-[1.2]">Program</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2480">
              <p className="leading-[1.2]">House</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2481">
              <p className="leading-[1.2]">People</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2482">
              <p className="leading-[1.2]">Pricing</p>
            </div>
            <div className="flex flex-col justify-center relative shrink-0" data-node-id="8:2483">
              <p className="leading-[1.2]">Contacts</p>
            </div>
          </div>
          <div className="bg-[#ffb0ff] border-2 border-[#ffb0ff] border-solid content-stretch flex h-[40px] items-center justify-center overflow-clip px-[39px] py-[12px] relative rounded-[50px] shrink-0 w-[200px]" data-node-id="8:2475" data-name="menu-cta_button">
            <div className="flex flex-col font-['Bricolage_Grotesque:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#323740] text-[16px] whitespace-nowrap" data-node-id="8:2476" style={{ fontVariationSettings: "'opsz' 14, 'wdth' 100" }}>
              <p className="leading-[1.2]">Apply now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}