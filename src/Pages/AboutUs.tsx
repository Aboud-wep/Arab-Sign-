import firIcon from '../assets/Icons/Path_1.png'
import secIcon from '../assets/Icons/Path_2.png'
import thiIcon from '../assets/Icons/Path_3.png'
import forIcon from '../assets/Icons/Path_4.png'
import serviceImage from '../assets/Images/Services_Image.png'
import smallleft from '../assets/Images/small_left.png'
import bluesignright from '../assets/Images/blue_sign_right .png'
import OmarAlmokhtar from '../assets/Images/Omar_Almokhtar.png'
import blueright from '../assets/Images/blue_right.png'
import bluesignleft from '../assets/Images/blue_sign_left.png'
import clientsalifbee from '../assets/Images/clients_alif_bee.png'
import clientsbaby from '../assets/Images/clients_baby.png'

const AboutUs = () => {
  return (
    <div className="font-janna">
      
      <div className="relative w-full h-[850px] bg-center bg-cover bg-no-repeat overflow-hidden bg-[url('./src/assets/Images/AboutUsImage2.png')]">
        <img
          src="./src/assets/Images/AboutUsColor2.png"
          alt="Overlay"
          className="absolute top-0 left-0 object-cover w-full h-full opacity-90"
        />

      
        <div className="relative w-[580px] h-[469px] mr-[209px] mt-[190px]">
          <img
            src={firIcon}
            alt="Arab Sign icon"
            className="absolute top-0 right-[147px] w-[431px] h-[469px]"
          />
          <img
            src={secIcon}
            alt="Arab Sign icon"
            className="absolute top-[111px] right-[328px] w-[191px] h-[232px] opacity-90"
          />
          <img
            src={thiIcon}
            alt="Arab Sign icon"
            className="absolute top-[131px] right-[79px] w-[79px] h-[203px] opacity-80"
          />
          <img
            src={forIcon}
            alt="Arab Sign icon"
            className="absolute top-[75px] right-0 w-[123px] h-[316px] opacity-70"
          />
        </div>

        <div className="absolute top-[275px] mr-[1034px] w-[588px]">
          <h1 className="mb-2 text-[90px] font-bold text-[#0153A5]">
            إشارة عربي
          </h1>
          <p className="font-bold text-[55px] text-[#1B375F] ">
            شاشة العالم بين يديك
          </p>

          <div className="flex mt-8 justify-between text-[40px] text-center font-almarai ">
            <a
              href="#services"
              className="px-6 py-3 font-bold text-white bg-[#709AC2] w-[190px] h-[81px] rounded-full"
            >
              خدماتنا
            </a>
            <a
              href="#work"
              className="px-6 py-3 font-bold text-white bg-[#709AC2] w-[190px] h-[81px] rounded-full"
            >
              أعمالنا
            </a>
            <a
              href="#clients"
              className="px-6 py-3 font-bold text-white bg-[#709AC2] w-[190px] h-[81px] rounded-full"
            >
              عملائنا
            </a>
          </div>
        </div>
      </div>

      <div id="services" className="h-[798px] flex relative overflow-hidden">
        
        <div className="relative mr-[251px] mt-[103px] w-[873px] z-10">
          <h2 className="text-[79px] text-[#0153A5]">خدماتنا</h2>

          
          <ul className="absolute space-y-[82px] list-disc text-[45px] text-[#3F6592] leading-snug">
            <li>إنتاج محتوى مرئي متنوع بلغة الإشارة</li>
            <li>
              موقعنا الإلكتروني يتيح إمكانية مشاهدة الكثير من القنوات بلغة
              الإشارة
            </li>
            <li>خدمات تعليمية مختلفة</li>
          </ul>
        </div>

        <div className="absolute left-[-82px] top-[90px] bg-[url('./src/assets/Images/service_left_blue.png')]">
          <img
            src={serviceImage}
            alt="Service Image"
            className="h-[883px] w-[811px]"
          />
        </div>

        <div className="mt-[98px] mr-[1237px] absolute">
          <img src={smallleft} alt="Small Left" />
        </div>

        <div className="mt-[498px] mr-[-273px] absolute">
          <img src={bluesignright} alt="Service Right" />
        </div>
      </div>

      <div
        id="work"
        className="h-[908px] relative bg-[#EAEAEA] flex overflow-hidden"
      >
        <div className="flex">
          <img
            src={OmarAlmokhtar}
            alt="Service Image"
            className="h-[782px] w-[718px] mr-[110px] mt-[75px]"
          />
          <img
            src={blueright}
            alt="Service Image"
            className="h-[299px] w-[275px] absolute mr-[571px] mt-[532px]"
          />
        </div>

        <div className="mt-[259px] relative mr-[65px] w-[873px] h-[528px] text-[#3F6592]">
          <h2 className="text-[79px] font-bold mb-4 text-[#0153A5]">أعمالنا</h2>
          <h3 className="text-[65px] font-bold ">فيلم عمر المختار</h3>
          <p className="text-[45px]">
            أول عمل سينمائي مدبلج إلى لغة الإشارة العربية
          </p>

          <a
            href="https://www.youtube.com/watch?v=zoQ8sEJouuM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="py-[10px] px-[42px] bg-[#0153A5] text-white text-[40px] rounded-full absolute left-0 bottom-[71px]">
              اضغط للمشاهدة
            </button>
          </a>
        </div>

        <div className="absolute left-[-200px] top-19">
          <img src={bluesignleft} alt="Service Image" />
        </div>
      </div>

      <div
        id="clients"
        className="h-[600px] relative text-center overflow-hidden"
      >
        <h2 className="text-[79px] font-bold mb-[65px] mt-[55px] text-[#0153A5]">
          عملائنا
        </h2>

        <div className="right-[-273px] bottom-[-175px] absolute">
          <img src={bluesignright} alt="Service Right" />
        </div>
        <div className="flex justify-center my-auto gap-[122px]">
          <img src={clientsbaby} alt="Service Right" />
          <img src={clientsalifbee} alt="Service Right" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
