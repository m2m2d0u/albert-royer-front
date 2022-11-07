<template>
  <div class="container-xxl py-5">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
          <div class="d-flex flex-column">
            <img class="img-fluid rounded w-100 align-self-end" :src="require('../../../assets/img/dp1.jpg')" alt="">
            <img class="img-fluid rounded w-50 bg-white pt-3 pe-3" :src="require('../../../assets/img/dp2.jpg')" alt=""
                 style="margin-top: -25%;">
          </div>
        </div>
        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <p class="d-inline-block border rounded-pill py-1 px-4">About Us</p>
          <h1 class="mb-4">Who are we? Get Know About Us!</h1>
          <p>DP World is a major player in global trade and an integral part of the supply chain. It operates in the
            areas of marine terminals, maritime services, logistics and ancillary services to technology-driven trade
            solutions. It has a portfolio of 78 operational marine and inland terminals supported by more than 50
            related companies in over 40 countries worldwide.</p>
          <p><em class="far fa-check-circle text-primary me-3"/>Marine terminals</p>
          <p><em class="far fa-check-circle text-primary me-3"/>Maritime services</p>
          <p><em class="far fa-check-circle text-primary me-3"/>Logistics </p>
          <p>
            <em class="far fa-check-circle text-primary me-3"/>
            Ancillary services to technology-driven trade solutions
          </p>
          <a class="btn dp-color rounded-pill py-3 px-5 mt-3" href="https://www.dpworld.com/">Read more</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutIndex'
}
</script>
