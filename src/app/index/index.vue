<template>
  <div>
    <Header/>
    <About/>
    <Services/>
    <a href="#" class="btn btn-lg dp-color btn-lg-square rounded-circle back-to-top">
      <em class="bi bi-arrow-up"/>
    </a>
  </div>
</template>

<script>
import Header from "@/app/index/header-index/Header";
import About from "@/app/index/about-index/About";
import Services from "@/app/index/services-index/Services";

export default {
  name: "IndexPage",
  components: {
    Services, About, Header
  },
}
</script>

