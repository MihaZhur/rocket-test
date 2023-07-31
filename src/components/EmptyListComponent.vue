<template>
  <div class="empty-image">
    <img src="Group.png" alt="" />
  </div>
  <div class="empty-info">
    <b class="empty-title">По данным параметрам ничего не найдено</b>
    <p class="empty-description">
      Попробуйте изменить параметры фильтрации или вернуться в общий каталог
    </p>
    <button-reset-filter />
  </div>
</template>
<script>
import ButtonResetFilter from "./ButtonResetFilter.vue";
export default {
  components: {
    ButtonResetFilter,
  },
};
</script>
<style>
.empty-image img {
  max-width: 100%;
  height: auto;
}
.empty-image {
  max-width: 300px;
  margin: 0 auto;
  margin-top: 100px;
}
.empty-info {
  max-width: 500px;
  text-align: center;
  margin: 0 auto;
  margin-top: 40px;
}
.empty-description {
  margin-bottom: 20px;
}
</style>
