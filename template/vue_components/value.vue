<template>
  <main style="margin-top: 0px">
    <section class="home-banner">
      <div class="mediabox">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Yh6RCiQLTro?autoplay=1&mute=1&loop=1&rel=0&modestbranding=1&autohide=1&showinfo=0&controls=0"
          allow="autoplay"
          allowfullscreen="allowfullscreen"
          style="width: 1920px; height: 1080px"
        ></iframe>
      </div>
    </section>
    <section class="section-banner">
      <div class="wrapper">
        <div
          id="js__marginCalculate"
          class="textbox"
        >
          <div class="text">
            <div class="text-sub">CÔNG TY CỔ PHẦN DỊCH VỤ BẢO VỆ</div>

            <div class="text-main">TRƯỜNG THÀNH ĐẠI VIỆT</div>
          </div>

          <div class="desc">
            Công ty cổ phần dịch vụ bảo vệ Trường Thành Đại Việt xin được gửi
            đến quý<br />
            Khách hàng lời chào trân trọng, lời chúc sức khỏe và thành công!<br />
            Công ty cổ phần dịch vụ bảo vệ Trường Thành Đại Việt được cấp giấy
            phép<br />
            hoạt động kinh doanh trong lĩnh vực dịch vụ bảo vệ trên phạm vi toàn
            quốc<br />
            năm 2011 với sự quan tâm hỗ trợ của Cục Chống Khủng Bố (nay là Cục
            An<br />
            Ninh Nội Địa – Bộ Công An) và tập đoàn Bamboo Capital – BCG Group.
          </div>

          <div class="button">
            <a
              href="https://truongthanhdaiviet.com.vn/gioi-thieu"
              title="Xem chi tiết"
            >
              Xem chi tiết
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
                  fill="white"
                ></path>
              </svg>
            </a>
          </div>
        </div>

        <div class="imagebox">
          <img
            src="../template/images/0-1677897378.png"
            alt="CÔNG TY CỔ PHẦN DỊCH VỤ BẢO VỆ"
          />
        </div>
      </div>
    </section>
    <section class="core-values">
      <div class="web-container">
        <div class="core-values--title">GIÁ TRỊ CỐT LÕI</div>
        <ul class="box-items">
          <li>
            <div class="image">
              <img
                src="../template/images/khach-hang-la-trong-tam-1-1677487537.png"
                alt="Khách hàng là trọng tâm"
              />
            </div>

            <div class="text">
              <h3>Khách hàng là trọng tâm</h3>
            </div>
          </li>
          <li>
            <div class="image">
              <img
                src="../template/images/chuyen-trach-1-1677472719.png"
                alt="DỊCH VỤ CHUYÊN NGHIỆP"
              />
            </div>

            <div class="text">
              <h3>DỊCH VỤ CHUYÊN NGHIỆP</h3>
            </div>
          </li>
          <li>
            <div class="image">
              <img
                src="../template/images/than-thien-1-1677486199.png"
                alt="THÂN THIỆN"
              />
            </div>

            <div class="text">
              <h3>THÂN THIỆN</h3>
            </div>
          </li>
          <li>
            <div class="image">
              <img
                src="../template/images/trach-nhiem-1-1677472340.png"
                alt="TỐC ĐỘ"
              />
            </div>

            <div class="text">
              <h3>TỐC ĐỘ</h3>
            </div>
          </li>
          <li>
            <div class="image">
              <img
                src="../template/images/sang-tao-1-1677486212.png"
                alt="SÁNG TẠO"
              />
            </div>

            <div class="text">
              <h3>SÁNG TẠO</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="customer-benefits">
      <div class="web-container">
        <div class="customer-benefits--title">QUYỀN LỢI CỦA KHÁCH HÀNG</div>

        <!-- equal or large than 992 -->
        <div class="d-none d-lg-block">
          <div class="customer-benefits--row">
            <div class="customer-benefits--col">
              <nav class="customer-benefits-nav">
                <div class="nav-list" id="nav-tab" role="tablist">
                  <button
                    class="nav-link"
                    :class="{ active: currentTabButton === 0 }"
                    @click="currentTabButton = 0"
                  >
                    <span> LỢI ÍCH TÀI CHÍNH </span>
                  </button>
                  <button
                    class="nav-link"
                    :class="{ active: currentTabButton === 1 }"
                    @click="currentTabButton = 1"
                  >
                    <span> LỢI ÍCH NGOÀI TÀI CHÍNH </span>
                  </button>
                  <button
                    class="nav-link"
                    :class="{ active: currentTabButton === 2 }"
                    @click="currentTabButton = 2"
                  >
                    <span> LỢI ÍCH HÀNH CHÍNH NHÂN SỰ </span>
                  </button>
                </div>
              </nav>
            </div>

            <div class="customer-benefits--col">
              <div class="tab-content">
                <div
                  class="tab-pane"
                  :class="{ show: currentTabButton === 0, active: currentTabButton === 0, fade: currentTabButton !== 0 }"
                  v-if="currentTabButton === 0"
                >
                  <ul class="customer-benefits-list">
                    <li>Đào tạo chuyên nghiệp</li>
                    <li>Quản lý trực tiếp, gián tiếp</li>
                    <li>Trang đồng phục</li>
                    <li>Công cụ thiết bị hỗ trợ</li>
                    <li>Văn phòng phẩm</li>
                    <li>Tiền ngoài giờ, ca đêm</li>
                    <li>Bảo hiểm y tế, bảo hiểm xã hội</li>
                    <li>Tiền lễ tết theo luật định</li>
                    <li>Bảo hiểm thân thể 24/24</li>
                  </ul>
                </div>
                <div
                  class="tab-pane"
                  :class="{ show: currentTabButton === 1, active: currentTabButton === 1, fade: currentTabButton !== 1 }"
                  v-if="currentTabButton === 1"
                >
                  <ul class="customer-benefits-list">
                    <li>
                      Dịch vụ đáp ứng tốt mọi nhu cầu về an ninh của Quý Khách
                    </li>
                    <li>
                      Uy tín của Quý Khách được nâng cao qua hình tượng của nhân
                      viên Bảo vệ Trường Thành Đại Việt
                    </li>
                    <li>
                      Lực lượng nhân viên bảo vệ đạo đức sức khỏe và chuyên
                      nghiệp
                    </li>
                    <li>Quý khách được lựa chọn nhân sự theo ý muốn</li>
                    <li>
                      Dịch vụ có thể thay đổi hoặc chấm dứt một cách tiện lợi và
                      nhanh chóng
                    </li>
                    <li>
                      Có lực lượng dự phòng, phản ứng nhanh hỗ trợ ngày đêm
                    </li>
                  </ul>
                </div>
                <div
                  class="tab-pane"
                  :class="{ show: currentTabButton === 2, active: currentTabButton === 2, fade: currentTabButton !== 2 }"
                  v-if="currentTabButton === 2"
                >
                  <ul class="customer-benefits-list">
                    <li>Tuyển chọn và đào tạo nhân viên</li>
                    <li>Nhân thân nhân viên bảo vệ</li>
                    <li>Kỹ nằng làm việc</li>
                    <li>Khả năng thích ứng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- small than 992 -->
        <div class="d-block d-lg-none">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item customer-benefits-nav">
              <h2 class="accordion-header" id="heading1">
                <button
                  class="accordion-button"
                  :class="{ collapsed: mobileTabButton !== 0 }"
                  type="button"
                  @click="collapseTab(0)"
                >
                  LỢI ÍCH TÀI CHÍNH
                </button>
              </h2>

              <div
                id="collapse1"
                class="accordion-collapse"
                v-if="mobileTabButton === 0"
              >
                <div class="accordion-body">
                  <ul class="customer-benefits-list">
                    <li>Đào tạo chuyên nghiệp</li>
                    <li>Quản lý trực tiếp, gián tiếp</li>
                    <li>Trang đồng phục</li>
                    <li>Công cụ thiết bị hỗ trợ</li>
                    <li>Văn phòng phẩm</li>
                    <li>Tiền ngoài giờ, ca đêm</li>
                    <li>Bảo hiểm y tế, bảo hiểm xã hội</li>
                    <li>Tiền lễ tết theo luật định</li>
                    <li>Bảo hiểm thân thể 24/24</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item customer-benefits-nav">
              <h2 class="accordion-header" id="heading2">
                <button
                  class="accordion-button"
                  :class="{ collapsed: mobileTabButton !== 1 }"
                  type="button"
                  @click="collapseTab(1)"
                >
                  LỢI ÍCH NGOÀI TÀI CHÍNH
                </button>
              </h2>

              <div
                id="collapse2"
                class="accordion-collapse"
                v-if="mobileTabButton === 1"
              >
                <div class="accordion-body">
                  <ul class="customer-benefits-list">
                    <li>
                      Dịch vụ đáp ứng tốt mọi nhu cầu về an ninh của Quý Khách
                    </li>
                    <li>
                      Uy tín của Quý Khách được nâng cao qua hình tượng của nhân
                      viên Bảo vệ Trường Thành Đại Việt
                    </li>
                    <li>
                      Lực lượng nhân viên bảo vệ đạo đức sức khỏe và chuyên
                      nghiệp
                    </li>
                    <li>Quý khách được lựa chọn nhân sự theo ý muốn</li>
                    <li>
                      Dịch vụ có thể thay đổi hoặc chấm dứt một cách tiện lợi và
                      nhanh chóng
                    </li>
                    <li>
                      Có lực lượng dự phòng, phản ứng nhanh hỗ trợ ngày đêm
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="accordion-item customer-benefits-nav">
              <h2 class="accordion-header" id="heading3">
                <button
                  class="accordion-button"
                  :class="{ collapsed: mobileTabButton !== 2 }"
                  type="button"
                  @click="collapseTab(2)"
                >
                  LỢI ÍCH HÀNH CHÍNH NHÂN SỰ
                </button>
              </h2>

              <div
                id="collapse3"
                class="accordion-collapse"
                v-if="mobileTabButton === 2"
              >
                <div class="accordion-body">
                  <ul class="customer-benefits-list">
                    <li>Tuyển chọn và đào tạo nhân viên</li>
                    <li>Nhân thân nhân viên bảo vệ</li>
                    <li>Kỹ nằng làm việc</li>
                    <li>Khả năng thích ứng</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
module.exports = {
    data: function() {
        return {
            currentTabButton: 0,
            mobileTabButton: 0,
        }
    },
    methods: {
        collapseTab(value) {
            if (this.mobileTabButton !== value) {
                this.mobileTabButton = value
            } else {
                this.mobileTabButton = 99
            }
        }
    }
}
</script>