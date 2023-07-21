<script setup>
import { useTodoListStore } from './store/useTodoListStore';
import { storeToRefs } from "pinia";
const store = useTodoListStore();
const { todoList } = storeToRefs(store);
import { ref } from 'vue';
import Search from './components/Search.vue';
import Modal from './components/Modal.vue'
function OpenModel() {
  IsModal.value = true
}
const IsModal = ref(false)
</script>

<template>
  <div class="max-w-[1170px] mx-auto mt-4">
    <h1 class="text-center text-[35px] font-semibold text-white">My Notes</h1>
   <div>
    <div class="max-w-[400px] mx-auto mt-4">
      <Search />
    </div>
      <div class="flex justify-between">
        <div></div>
        <div>
        <button class="bg-[#54BD95] text-white rounded-[46px] px-3 h-[46px] hover:bg-[#3c886b] delay-[100ms] transition-all" @click="OpenModel">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
        </button>
        <Modal 
        v-if="IsModal"
        @close="IsModal = false"
        />
      </div>
      </div>
      <div class="flex justify-between">
        <div v-for="(todo, index) in todoList" :key="todo.id">
        <span>{{ todo.item }}</span>
        </div>
      </div>
   </div>
  </div>
</template>

<style scoped>

</style>
