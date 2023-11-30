<template>
  <div class="">
    <div class="">
      <p class="">
        404
      </p>
      <p class="t">
        Упс, ошибка — такой страницы не существует
      </p>
      <span class="">
        Попробуйте снова или вернитесь на главную
      </span>
      <button @click="redirect()" class="">
        Вернуться на главную
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
  name: "404",
  setup() {
    const router = useRouter();
    const redirect = () => {
      router.push('/')
    }

    return {
      redirect
    }
  }
}

</script>

<style scoped>

</style>
