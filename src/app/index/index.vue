<template>
  <div>
    <Header/>
    <About/>
    <Services/>
    <Features/>
    <Team/>
    <a href="#" class="btn btn-lg dp-color btn-lg-square rounded-circle back-to-top"><i
        class="bi bi-arrow-up"></i></a>
  </div>
</template>

<script>
import Header from "@/app/index/header-index/Header";
import About from "@/app/index/about-index/About";
import Services from "@/app/index/services-index/Services";
import Features from "@/app/index/features-index/Features";
import Team from "@/app/index/team-index/Team";

export default {
  name: "IndexPage",
  components: {
    Team, Features, Services, About, Header
  }
}
</script>

