<template>
  <div>
    <!-- Page Header Start -->
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <h1 class="display-3 text-white mb-3 animated slideInDown">Contact Us</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol class="breadcrumb text-uppercase mb-0">
            <li class="breadcrumb-item"><router-link to="/" class="text-white" href="#">Home</router-link></li>
            <li class="breadcrumb-item text-primary active" aria-current="page">Contact</li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- Page Header End -->


    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4">
            <div class="h-100 bg-light rounded d-flex align-items-center p-5">
              <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                   style="width: 55px; height: 55px;">
                <em class="fa fa-map-marker-alt text-primary"></em>
              </div>
              <div class="ms-4">
                <p class="mb-2">Address</p>
                <h5 class="mb-0">18 Boulevard de la Republique Dakar</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="h-100 bg-light rounded d-flex align-items-center p-5">
              <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                   style="width: 55px; height: 55px;">
                <em class="fa fa-phone-alt text-primary"></em>
              </div>
              <div class="ms-4">
                <p class="mb-2">Call Us Now</p>
                <h5 class="mb-0">33 889 08 21</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="h-100 bg-light rounded d-flex align-items-center p-5">
              <div class="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                   style="width: 55px; height: 55px;">
                <em class="fa fa-envelope-open text-primary"></em>
              </div>
              <div class="ms-4">
                <p class="mb-2">Mail Us Now</p>
                <h5 class="mb-0">dakar@dpworld.com</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div class="bg-light rounded p-5">
              <p class="d-inline-block border rounded-pill py-1 px-4">Contact Us</p>
              <h1 class="mb-4">Have Any Query? Please Contact Us!</h1>
              <form>
                <div class="row g-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="name" placeholder="Your Name">
                      <label for="name">Your Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="email" placeholder="Your Email">
                      <label for="email">Your Email</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="subject" placeholder="Subject">
                      <label for="subject">Subject</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <textarea class="form-control" placeholder="Leave a message here" id="message"
                                style="height: 100px"></textarea>
                      <label for="message">Message</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div class="h-100" style="min-height: 400px;">
              <iframe style="height: 655px;width: 600px" title="Localisation DP World"
                      src="https://maps.google.com/maps?width=700&amp;height=700&amp;hl=en&amp;q=%2018%20Boulevard%20de%20la%20R%C3%A9publique%20+(DP%20Word)&amp;ie=UTF8&amp;t=&amp;z=10&amp;iwloc=B&amp;output=embed"
                      />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>

</style>
