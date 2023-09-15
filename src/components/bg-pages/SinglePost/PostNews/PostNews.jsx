import React from 'react'
import SlideBar from '../SliderBar/SlideBar'
import calendar from "../../../../assets/SinglePageImg/Calendar.svg"
import clock from "../../../../assets/SinglePageImg/Clock.svg"
import bracer from "../../../../assets/SinglePageImg/braces.svg"
import facebook from "../../../../assets/SinglePageImg/Facebook (1).svg"
import twitter from "../../../../assets/SinglePageImg/Twitter (1).svg"
import linked from "../../../../assets/SinglePageImg/Linked-In (1).svg"
import img1 from "../../../../assets/SinglePageImg/image (60).png"
import right from "../../../../assets/SinglePageImg/Right (1).svg"
import left from "../../../../assets/SinglePageImg/Left.svg"
import postprev from "../../../../assets/SinglePageImg/image (61).png"
import postnext from "../../../../assets/SinglePageImg/image (63).png"

function PostNews() {
  return (
    <div className='w-[1230px] mx-auto mt-[100px] flex justify-between'>
      <div className='w-[810px]'>
        <div className='w-[552px] flex justify-between items-end'>
          <div className='w-[140px]'>
            <p className='text-gray text-[16px] leading-[160%]'>Published</p>
            <div className='flex mt-[4px]'>
              <img src={calendar} alt="calendar" />
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>July 5, 2020</b>
            </div>
          </div>
          <div className='w-[140px]'>
          <p className='text-gray text-[16px] leading-[160%]'>Reading time</p>
            <div className='flex mt-[4px]'>
              <img src={clock} alt="clock" />
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>4 min</b>
            </div>
          </div>
          <div className='w-[165px]'>
           <div className='flex'>
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>Share:</b>
              <div className='w-[96px] ml-[12px] flex justify-between'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linked} alt="lenked" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[810px] h-[2px] bg-[#E5E8ED] mt-[60px]'></div>
        <div className='w-[810px] mt-[60px] text-start'>
           <h5 className='text-black text-[20px] leading-[150%]'
           >Vulputate vitae pellentesque scelerisque luctus consequat mattis pellentesque dui odio. Interdum aenean sit malesuada ornare sed gravida rhoncus, congue. Purus auctor nullam diam quis est hendrerit ac euismod. </h5>
           <p className='text-black text-[16px] mt-[24px] leading-[160%]'>
           At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.
           Amet, morbi sed pharetra, elit eget mi potenti. Condimentum orci interdum feugiat lectus libero duis. Nisl massa, elementum varius sit. Nunc felis, porttitor aliquam urna, accumsan et sed. Aliquet non sed duis diam vehicula rhoncus.
           </p>
        </div>
        <div className='text-start mt-[60px]'>
          <h2 className='text-black text-[32px] leading-[130%]'>
            Why SEM Without CRO Is Impossible?</h2>
          <p className='text-[#424551] text-[16px] mt-[24px] leading-[160%]'>
            Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
          <img
          className='mt-[40px]'
          src={img1} alt="img1" />
          <div className='w-[810px] mt-[48px] flex justify-between items-start'>
            <img src={bracer} alt="bracer" />
            <b className='text-black text-[20px] w-[752px] leading-[150%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus  facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in tot euismod vulputate etiam eros. Vel accumsan at elit neque, ipsum.</b>
          </div>
        </div>
        <div className='mt-[60px] w-[810px]'>
          <h2 className='text-black text-[32px] leading-[130%]'>
          Check your conversion tracking</h2>
          <p className='text-[#424551] text-[16px] mt-[24px] leading-[160%]'>
            Mauris amet arcu nisl vel dictum tellus. Sed rhoncus, ut sed id ut erat mattis. Vitae mus blandit in neque amet non fringilla blandit:</p>
          <ul className='text-[#424551] text-[16px] mt-[24px]
          leading-[160%] w-[542px] ml-[21px]'>
            <li className='mt-[4px] list-disc'>Dui, lectus at dui magna vitae vitae egestas sed.</li>
            <li className='mt-[4px] list-disc'>Vulputate placerat amet pulvinar lorem nisl.</li>
            <li className='mt-[4px] list-disc'>Consequat feugiat habitant gravida quisque elit bibendum id adipiscing sed.</li>
            <li className='mt-[4px] list-disc'>Etiam duis lobortis in fames ultrices commodo nibh.</li>
          </ul>
          <p className='text-[#424551] text-[16px] mt-[24px] leading-[160%]'>
          Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
        </div>
        <div className='w-[810px] flex justify-between items-end'>
          <div className='w-[332px] flex justify-between mt-[60px]'>
            <b className='text-black text-[16px] leading-[160%]'>Tags:</b>
            <ul className='text-gray text-[14px] leading-[21px] flex justify-between text-center w-[240px]'>
              <li className='border border-solid ml-[12px] hover:bg-perple
               hover:text-white hover:border-perple p-[5.5px_16px]
                border-[#D7D5DD] rounded'>#business</li>
              <li className='border border-solid ml-[12px] hover:bg-perple
               hover:text-white hover:border-perple p-[5.5px_16px]
                border-[#D7D5DD] rounded'>#PPC</li>
              <li className='border border-solid ml-[12px] hover:bg-perple
               hover:text-white hover:border-perple p-[5.5px_16px]
                border-[#D7D5DD] rounded'>#targeting</li>
            </ul>
          </div>
          <div className='w-[165px]'>
           <div className='flex'>
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>Share:</b>
              <div className='w-[96px] ml-[12px] flex justify-between items-center'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={linked} alt="lenked" />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[810px] h-[2px] bg-[#E5E8ED] mt-[53px]'></div>
        <div className='w-[810px] mt-[48px] flex justify-between items-end'>
          <div className='w-[340px] h-[150px]'>
            <div className='w-[120px] flex items-center'>
              <img src={left} alt="left" />
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>Prev Post</b>
            </div>
            <div className='w-[340px] flex justify-between mt-[20px]'>
                <img src={postprev} alt="postprev"/>
                <div className='w-[220px]'>
                <div className='flex items-center justify-start'>
                   <img src={clock} alt="clock" />
                   <p className='text-black text-[14px] ml-[8px] leading-[21px]'
                    >March 12, 2020</p>
                </div>
                <div className='mt-[5px]'>
                <b className='text-black text-[16px] leading-[21px]'>
                  10 tips for a small business digital marketing strategy</b>
               </div>
               </div>
            </div>
          </div>
          <div className='w-[340px] h-[150px] relative'>
            <div className='w-[125px] inline-flex items-center absolute right-0'>
              <b className='text-black text-[20px] ml-[8px] leading-[160%]
              '>Next Post</b>
              <img src={right} alt="left" />
            </div>
            <div className='w-[340px] flex justify-between mt-[50px]'>
              <div className='w-[225px]'>
                <div className='flex items-center justify-end'>
                   <img src={clock} alt="clock" />
                   <p className='text-black text-[14px] text-end ml-[8px] leading-[21px]'
                    >March 56, 2020</p>
                </div>
                <div className='mt-[5px] text-end'>
                <b className='text-black text-[16px] leading-[21px]'>
                Why SEO Is All About Content Marketing?</b>
               </div>
              </div>
              <img src={postnext} alt="postnext"/>
            </div>
          </div>
        </div>
      </div>
      <SlideBar/>
    </div>
  )
}

export default PostNews
