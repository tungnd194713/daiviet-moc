<template>
  <section class="section-contact-form">
    <div class="contact-form-wrapper">
      <div class="left-contact">
        <div
          id="js__margincontact"
          class="form-contact-wrapper"
          style="padding-left: 183.5px"
        >
          <div class="contact-form">
            <h4>LIÊN HỆ VỚI</h4>
            <h4>TRƯỜNG THÀNH ĐẠI VIỆT</h4>
            <form
              action="https://truongthanhdaiviet.com.vn/"
              class="test contact-page--form-footer"
            >
              <div class="contact-form-detail">
                <div class="input-wrapper">
                  <input
                    class="input-contact-form"
                    id="fullname-contact-footer"
                    type="text"
                    required=""
                  />
                  <label class="label-contact-form required">Họ và tên </label>
                </div>
                <div class="input-wrapper">
                  <input
                    class="input-contact-form"
                    id="email-contact-footer"
                    type="text"
                    required=""
                  />
                  <label class="label-contact-form required">Email... </label>
                </div>
                <div class="input-wrapper">
                  <input
                    class="input-contact-form"
                    id="phone-contact-footer"
                    type="text"
                    required=""
                  />
                  <label class="label-contact-form required"
                    >Số điện thoại...
                  </label>
                </div>
                <div class="input-wrapper">
                  <textarea
                    class="textarea-contact-form"
                    type="text"
                    style="height: 98px; overflow-y: hidden"
                    required="required"
                    id="note-contact-footer"
                  ></textarea>
                  <label class="label-contact-form">Nội dung đính kèm...</label>
                </div>
                <button
                  class="btn-send"
                  type="button"
                  onclick="app.submitContactFooter(&#39;https://truongthanhdaiviet.com.vn/save-contact&#39;)"
                >
                  GỬI THÔNG TIN
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 0L4.9425 1.0575L9.1275 5.25H0V6.75H9.1275L4.9425 10.9425L6 12L12 6L6 0Z"
                      fill="#1D5A99"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          id="js__marginbottomcontact"
          class="form-bottom-contact"
          style="padding-left: 183.5px"
        >
          <div class="left-bottom-contact-form">TRUONG THANH DAI VIET</div>
          <div class="right-bottom-contact-form">security viet nam</div>
        </div>
      </div>
      <div class="right-contact">
        <div class="img-box">
          <img
            src="../template/images/bg-contactform.png"
            alt=""
          />
        </div>
        <div class="right-contact-content">TRUONG THANH DAI VIET</div>
      </div>
    </div>
  </section>
</template>
