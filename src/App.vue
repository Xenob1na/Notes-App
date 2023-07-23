<script setup>
import { useTodoListStore } from './store/useTodoListStore';
import { storeToRefs } from "pinia";
import { ref, computed } from 'vue';
import Modal from './components/Modal.vue'

const store = useTodoListStore();
const { todoList } = storeToRefs(store);
const { toggleCompeted, deleteTodo } = store;
const IsModal = ref(false)
const query = ref("")

const querySearch = computed(() => {
  return todoList.value.filter((todo) => todo.toString().indexOf(query.value) !== -1);
})

function OpenModel() {
  IsModal.value = true
}
</script>

<template>
  <div class="max-w-[1170px] mx-auto mt-4 mb-6">
    <h1 class="text-center text-[35px] font-semibold text-white">My Notes</h1>
   <div>
    <div class="max-w-[400px] mx-auto mt-4">
      <form @click.prevent="" class="relative">
              <input 
              type="search" 
              placeholder="Search"
              v-model="query"
              class="rounded-[70px] block text-[#A6A6A6] border-2 border-[#A6A6A6] w-[410px] bg-[#161C28] p-5 outline-none"
              >
              <button class="absolute top-3 right-0 h-[46px] bg-[#54BD95] text-white rounded-[46px] px-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
      </form>
    </div>
      <div class="flex justify-between">
        <div>
        <span class="text-white text-[16px]">(count: {{ todoList.length  }})</span>
        </div>
        <div>
        <button class="bg-[#54BD95] fixed text-white rounded-[46px] px-3 h-[46px] hover:bg-[#3c886b] delay-[100ms] transition-all" @click="OpenModel">
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
      {{ query }}
      <div class="mt-9 max-w-[1000px] mx-auto">
        <div class="inline-grid grid-cols-2 gap-8 ">
          <div v-for="(todo, index) in querySearch" :key="todo.id" class="bg-[#E4EE9A] py-5 px-9 min-w-[500px] text-center rounded-[20px]" :class="{'bg-[#e2ee83]': todo.completed}">
            <div class="">
              <p class="text-[18px] font-semibold" :class="{'line-through': todo.completed}">{{ todo.item }}</p>
            </div>
            <div class="mt-2" :class="{'line-through': todo.completed}">
              <span>{{ todo.date }}</span>
            </div>
            <div class="mt-9">
              <button class="bg-[#54BD95] text-white rounded-[46px] px-3 h-[46px] hover:bg-[#3c886b] delay-[100ms] transition-all mr-2"  @click.stop="toggleCompeted(todo.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </button>
              <button class="bg-[#F19F78] text-white rounded-[46px] px-3 h-[46px] hover:bg-[#c17e5f] delay-[100ms] transition-all" @click="deleteTodo(index)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
   </div>
  </div>
</template>

<style scoped>

</style>
