<template>
  <div class="services2">
    <h1 class="services2-title">
      DỊCH VỤ CỦA CHÚNG TÔI
    </h1>
    <div class="swiper-container" id="services-swiper-id">
      <div class="swiper-wrapper">
        <div v-for="(item, index) in services" :key="index" class="swiper-slide service-item-swiper">
          <div class="img-shadow"></div>
          <img :src="item.imageSrc" alt="Image 1" />
          <h2>{{ item.title }}</h2>
          <div class="service-hover">
            <div class="hover-title">{{ item.title }}</div>
            <div class="hover-button">
              <a :href="item.link"
                >Xem chi tiết
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.5 0L5.4425 1.0575L9.6275 5.25H0.5V6.75H9.6275L5.4425 10.9425L6.5 12L12.5 6L6.5 0Z"
                    fill="#1D5A99"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="swiper-button-next"
        id="services-swiper-next"
        aria-controls="swiper-wrapper"
      ></div>
      <div
        class="swiper-button-prev"
        id="services-swiper-prev"
        aria-controls="swiper-wrapper"
      ></div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      services: [
        {
          imageSrc: '../template/images/title-home-1678693484.png',
          title: 'Bảo vệ công trường',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-cong-truong-14'
        },
        {
          imageSrc: '../template/images/title-home-1677510758.png',
          title: 'Bảo vệ nhà máy, xí nghiệp',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-nha-may-xi-nghiep-8'
        },
        {
          imageSrc: '../template/images/title-home-1677491114.png',
          title: 'Bảo vệ tòa nhà văn phòng, chung cư',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-toa-nha-van-phong-chung-cu-7'
        },
        {
          imageSrc: '../template/images/title-home-1677506995.jpg',
          title: 'Bảo vệ siêu thị, trung tâm thương mại, cửa hàng.',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-sieu-thi-trung-tam-thuong-mai-cua-hang-5'
        },
        {
          imageSrc: '../template/images/title-home-1677556782.jpg',
          title: 'Bảo vệ yếu nhân, ca sỹ, nghệ sỹ, ngôi sao',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-yeu-nhan-ca-sy-nghe-sy-ngoi-sao-4'
        },
        {
          imageSrc: '../template/images/title-home-1677551663.jpg',
          title: 'Bảo vệ Khu nghỉ mát, khách sạn',
          link: 'https://truongthanhdaiviet.com.vn/dich-vu/bao-ve-khu-nghi-mat-khach-san-3'
        },
      ]
    };
  },
};
</script>
<style scoped>
.services2 {
  background-image: url(../images/bg-ourservices.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  padding: 60px 0 0;
}
.services2-title {
  color: white;
  text-align: center;
  font-weight: bold;
}
.swiper-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 25% !important;
  height: 679px;
}
@media screen and (max-width: 400px) {
  .swiper-slide {
    width: 100% !important;
  }
  .services2 {
    background-image:url(../images/bg-ourservices-mobile.png)
  }
}
.swiper-slide img {
  width: 100%;
  box-shadow: inset;
  box-shadow: 0px -200px 200px -30% rgba(0, 0, 0, 0.33) inset;
  height: 100%;
  object-fit: cover;
}
.swiper-slide .img-shadow {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 81.67%);
  height: 50%;
  width: 100%;
  position: absolute;
  bottom: 0
}
.service-item-swiper {
  position: relative;
}
.service-item-swiper > h2 {
  position: absolute;
  bottom: 0;
  text-align: center;
  padding: 30px;
  font-size: 20px;
  line-height: 1.3;
  color: #84b5e9;
  font-weight: bold;
}
#services-swiper-next, #services-swiper-prev {
    background: rgba(0,0,0,.9);
    box-shadow: 0px 2px 10px rgba(0,0,0,.25);
    width: 30px;
    height: 60px;
    text-align: center;
}
#services-swiper-next::after, #services-swiper-prev::after {
  font-family: swiper-icons;
  text-transform: none!important;
  letter-spacing: 0;
  font-variant: initial;
  line-height: 1;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
#services-swiper-prev {
  left: 0 !important;
}
#services-swiper-next {
  right: 0 !important;
}
.hover-button {
  display: block;
  text-align: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all .3s ease-in-out;
  font-weight: bold;
  padding: 8px 14px;
}

.swiper-slide:hover h2 {
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out
}

.swiper-slide:hover .service-hover::after {
    opacity: 1;
    visibility: visible;
    transition: all .3s ease-in-out
}

.swiper-slide:hover .service-hover .hover-title {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all .3s ease-in-out
}

.swiper-slide:hover .service-hover .hover-button {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    transition: all .3s ease-in-out;
    display: block;
}

.service-hover {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    padding: 15px;
}
.service-hover::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(29,90,153,.68);
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    visibility: hidden;
    transition: all .3s ease-in-out
}
.hover-title {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-20px);
    transition: all .3s ease-in-out;
    margin-bottom: 30px;
    font-size: 20px;
    color: white;
    font-weight: bold;
}
.hover-button a {
    display: flex;
    align-items: center;
    gap: 5px;
    background: #fff;
    border-radius: 30px;
    font-weight: bold;
    font-size: 14px;
    color: #1d5a99;
    padding: 12px 30px
}
.hover-button {
  font-size: 14px;
  padding: 12px 30px;
}
</style>
