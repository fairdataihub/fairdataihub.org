import LottieAnimation from '@/components/lotties';

import careerLottie from '../../assets/lotties/careers.json';

const Hero = () => {
  return (
    <div className="bg-[#f9f1f3] bg-cover bg-top bg-no-repeat md:bg-right-top 2xl:bg-contain">
      <div className="pt-12 sm:pt-16">
        <div className="careers-hero">
          <div className="mx-auto max-w-screen-lg px-6 py-8">
            <div className="items-center justify-center md:flex">
              <div className="w-full p-2 lg:w-1/2 lg:max-w-lg">
                <h1 className="w-full text-center text-4xl font-black sm:text-3xl md:py-3 md:text-4xl lg:text-5xl">
                  Join our wonderful team!
                </h1>
              </div>

              <div className="mt-6 flex w-full items-center justify-center p-5 lg:mt-0 lg:w-1/2 lg:p-2">
                <LottieAnimation
                  animationData={careerLottie}
                  width={400}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
