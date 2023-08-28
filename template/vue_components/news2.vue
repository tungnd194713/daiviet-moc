<template>
  <div class="news2">
    <div class="news2-title">TIN TỨC & SỰ KIỆN</div>
    <div class="swiper-container" id="news-swiper-id">
      <div class="swiper-wrapper">
        <div
          v-for="(item, index) in news"
          :key="index"
          class="news-card swiper-slide"
        >
          <a class="news-link" :href="item.link">
            <div class="img">
                <img :src="item.imageSrc" alt="" />
            </div>
            <div class="news-title">{{ item.title }}</div>
          </a>
          <div class="news-content">{{ item.description }}</div>
        </div>
      </div>
      <div class="swiper-navigation-custom">
        <div
          class="swiper-button-prev"
          id="news-swiper-prev"
          aria-controls="swiper-wrapper"
        ></div>
        <div class="swiper-counting-paginate">
          <div class="index"></div>
          <div>/</div>
          <div class="slides"></div>
        </div>
        <div
          class="swiper-button-next"
          id="news-swiper-next"
          aria-controls="swiper-wrapper"
        ></div>
      </div>
      <div
        class="swiper-pagination"
      ></div>
    </div>
  </div>
</template>
<script>
module.exports = {
  data: function () {
    return {
      news: [
        {
          imageSrc: "../template/images/title-1682585524.jpg",
          title: "Tầm quan trọng của công tác đào tạo nhân viên bảo vệ",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/tam-quan-trong-cua-cong-tac-dao-tao-nhan-vien-bao-ve-39",
          description: "Công tác đào tạo tại Trường Thành Đại Việt",
        },
        {
          imageSrc: "../template/images/title-1682306936.jpg",
          title: "Lịch nghỉ lễ giỗ tổ Hùng Vương, 30/04 và 01/05",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/lich-nghi-le-gio-to-hung-vuong-3004-va-0105-38",
          description:
            "Công ty cổ phần dịch vụ bảo vệ Trường Thành Đại Việt thông báo lịch nghỉ lễ giỗ tổ Hùng Vương, 30/04 và 01/05",
        },
        {
          imageSrc: "../template/images/title-1678347423.png",
          title: "Trường Thành Đại Việt bảo vệ sự kiện Ecopark",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/truong-thanh-dai-viet-bao-ve-su-kien-ecopark-35",
          description:
            "Ngày 6/3/2023 công ty Trường Thành Đại Việt đã thực hiện nhiêm vụ bảo vệ an ninh tại sự kiện Ecopark Hưng Yên.",
        },
        {
          imageSrc: "../template/images/title-1678691451.png",
          title: "Phụ nữ với nghề bảo vệ",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/phu-nu-voi-nghe-bao-ve-36",
          description:
            "Công ty cổ phần dịch vụ bảo vệ Trường Thành Đại Việt chúc mừng ngày Quốc tế phụ nữ",
        },
        {
          imageSrc: "../template/images/title-1677489241.png",
          title: "Công ty Trường Thành Đại Việt đào tạo phòng cháy chữa cháy",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/cong-ty-truong-thanh-dai-viet-dao-tao-phong-chay-chua-chay-24",
          description:
            "Phòng nghiệp vụ mở lớp đào tạo phòng cháy chữa cháy cho nhân viên",
        },
        {
          imageSrc: "../template/images/title-1677550364.png",
          title: "Trường Thành Đại Việt chúc Tết nhân viên bảo vệ",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/truong-thanh-dai-viet-chuc-tet-nhan-vien-bao-ve-25",
          description:
            "Ban lãnh đạo và phòng Nghiệp vụ công ty Trường Thành Đại Việt đã đi chúc Tết và lì xì cho nhân viên",
        },
        {
          imageSrc: "../template/images/title-1677552235.png",
          title: "Lễ Tổng Kết năm 2022 của công ty Trường Thành Đại Việt",
          link: "https://truongthanhdaiviet.com.vn/tin-tuc/le-tong-ket-nam-2022-cua-cong-ty-truong-thanh-dai-viet-28",
          description:
            "Công ty Trường Thành Đại Việt tổ chức lễ tổng kết năm 2022 và kế hoạch phát triển năm 2023",
        },
      ],
    };
  },
};
</script>
<style scoped>
.news2 {
    background-image: url(../images/bg-blogevents.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    padding: 90px 0;
}
.swiper-container {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
}
.news2-title {
    font-weight: 900;
    font-size: 32px;
    text-align: center;
    color: #1d5a99;
    text-transform: uppercase;
    margin-bottom: 24px;
}
.swiper-slide {
    width: 30%;
    gap: 5%;
}
.news-link {
    
}
.news-link .img {
    height: 280px;
    overflow: hidden;
    display: inline-block;
}
.news-link img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.news-link .news-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: -0.01em;
    color: #1d5a99;
    margin-bottom: 6px;
}
.news-link .news-content {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    font-weight: 400;
    font-size: 16px;
    color: #666;
    margin-bottom: 0;
}
.news-link:hover img {
    transition: all .3s linear;
    transform: scale(1.1);
    transform-origin: center center;
    filter: opacity(0.5);
}
.swiper-pagination {
    display: none;
}
.swiper-navigation-custom {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 60px;
}
.swiper-navigation-custom .swiper-counting-paginate {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.swiper-navigation-custom .swiper-counting-paginate > * {
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  color: #333;
}
#news-swiper-next, #news-swiper-prev {
    margin-top: 0;
    position: relative;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #1d5a99;
    border: 2px solid #fff;
    box-shadow: 0px 2px 10px rgba(0,0,0,.25);
    border-radius: 50%;
}
#news-swiper-next::after, #news-swiper-prev::after {
    flex-shrink: 0;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
}
@media screen and (max-width: 400px) {
    .news2 {
        background-image: url(../images/bg-blogevents-mobile.png) !important;
    }
    .swiper-container {
        padding: 0 24px !important;
    }
    .swiper-navigation-custom {
        margin-top: 0 !important;
    }
}
</style>
